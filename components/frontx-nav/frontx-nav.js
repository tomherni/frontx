import { LitElement, html, css } from 'lit-element';
import logos from '../frontx-gallery/logos.js';
import '../frontx-logo/frontx-logo.js';

export class FrontxNav extends LitElement {
  static get styles() {
    return css`
      div {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.2);
        z-index: 3;
      }

      @media (min-width: 1280px) {
        div {
          width: auto;
          flex-direction: column;
          border: none;
          box-shadow: none;
        }
      }

      .💎 {
        flex: 0 0 auto;
        display: block;
        margin-right: 0.5em;
        padding: 0 0.35em 0.25em;
        font-size: 1.5em;
        text-decoration: none;
        line-height: normal;
        letter-spacing: 0.04em;
      }

      @media (min-width: 1280px) {
        .💎 {
          margin: 0.25em;
        }
      }

      .💎 frontx-logo {
        display: block;
      }

      .💎 span {
        display: block;
        color: #cf0f1f;
        font-size: 0.53em;
        font-family: 'Comic Sans MS', 'Comic Sans', Lora, serif;
      }

      nav {
        flex: 1 1 auto;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline-block;
      }

      @media (min-width: 1280px) {
        li {
          display: block;
        }
      }

      li a {
        display: inline-block;
        padding: 0 0.25em;
        color: inherit;
        font: inherit;
        font-size: 0.9em;
        text-decoration: none;
        cursor: pointer;
      }

      li span {
        border-bottom: 1px solid #333;
      }

      li a:hover span {
        border: none;
      }
    `;
  }

  constructor() {
    super();
    this.years = Object.keys(logos);
  }

  scrollTo(detail) {
    this.dispatchEvent(new CustomEvent('scroll-year', { detail }));
  }

  render() {
    return html`
      <div>
        <a href="/" class="💎">
          <frontx-logo></frontx-logo>
          <span>logo gallery</span>
        </a>

        <nav>
          <ul>
            ${this.years.map(
              year => html`
                <li>
                  <a @click=${() => this.scrollTo(year)}><span>${year}</span></a>
                </li>
              `,
            )}
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('frontx-nav', FrontxNav);
