import { LitElement, html, css } from 'lit-element';
import logos from './logos.js';
import '../frontx-logo/frontx-logo.js';
import '../frontx-nav/frontx-nav.js';

function when(condition, template) {
  return condition ? template() : undefined;
}

export class FrontxGallery extends LitElement {
  static get properties() {
    return {
      logos: { type: Array },
    };
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      main {
        width: 80vw;
        max-width: 80vh;
        margin: 0 auto;
        padding-top: 6em;
        text-align: center;
      }

      @media (min-width: 1280px) {
        main {
          padding-top: 2em;
        }
      }

      h1 {
        margin: 0 0 1.5em;
        font-weight: 400;
        font-size: 1.8em;
        line-height: normal;
      }

      .🤓 {
        position: relative;
      }

      .🤓::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        height: 1px;
        background-color: #999;
        z-index: -1;
      }

      h2 {
        display: inline-block;
        margin: 0;
        padding: 0 24px;
        color: #999;
        background-color: #fff;
      }

      article {
        margin: 4em 0;
      }

      figure {
        margin: 0;
        padding: 6% 6% 0;
        background-color: #333;
        box-shadow: 0.3em 0.3em 0.6em rgba(0, 0, 0, 0.25);
      }

      .🖼 {
        position: relative;
        width: 100%;
        padding-top: 100%;
      }

      .🖼 > .📦 {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #fff;
      }

      .🖼 > .📦::after {
        content: 'Loading...';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4em;
        margin: auto;
        line-height: 4em;
        z-index: 1;
      }

      img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 2;
      }

      img[src=''] {
        visibility: hidden;
      }

      h3 {
        margin: 0;
        padding: 1em 0;
        color: #ddd;
        font: inherit;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }

      p {
        margin: 1.5em 0 0;
      }

      p + p {
        margin: 0.25em 0 0;
      }
    `;
  }

  constructor() {
    super();
    this.logos = Object.entries(logos);
  }

  firstUpdated() {
    this.io = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting && !target.getAttribute('src')) {
            target.setAttribute('src', target.dataset.src);
          }
        });
      },
      { threshold: 0 },
    );

    this.shadowRoot.querySelectorAll('main img').forEach(img => this.io.observe(img));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.io) {
      this.io.disconnect();
    }
  }

  scroll(event) {
    const el = this.shadowRoot.getElementById(`year-${event.detail}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <header>
        <frontx-nav @scroll-year=${this.scroll}></frontx-nav>
      </header>

      <main>
        <h1><frontx-logo></frontx-logo> logos</h1>

        ${this.logos.map(
          ([year, items]) => html`
            <div class="🤓">
              <h2 id="year-${year}">${year}</h2>
            </div>

            ${items.map(
              ({ title, path, text }) => html`
                <article>
                  <figure>
                    <div class="🖼">
                      <div class="📦">
                        <img src="" data-src="assets/img/logos/${path}" alt="${title}" />
                      </div>
                    </div>
                    <figcaption><h3>${title}</h3></figcaption>
                  </figure>
                  ${when(text, () =>
                    text.map(
                      line =>
                        html`
                          <p>${line}</p>
                        `,
                    ),
                  )}
                </article>
              `,
            )}
          `,
        )}
      </main>
    `;
  }
}

customElements.define('frontx-gallery', FrontxGallery);
