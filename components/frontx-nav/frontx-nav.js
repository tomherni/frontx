import { LitElement, html, css } from 'lit-element';

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
        font-family: 'Comic Sans MS', 'Comic Sans', Lora, serif;
        text-decoration: none;
        line-height: normal;
        letter-spacing: 0.04em;
      }

      @media (min-width: 1280px) {
        .💎 {
          margin: 0.25em;
        }
      }

      .💎 span:nth-child(1) {
        color: #fdbf2d;
      }
      .💎 span:nth-child(2) {
        color: #eb7d3c;
      }
      .💎 span:nth-child(3) {
        color: #fc0d1b;
      }
      .💎 span:nth-child(4) {
        color: #19af54;
      }
      .💎 span:nth-child(5) {
        color: #1eb1ed;
      }
      .💎 span:nth-child(6) {
        color: #6f359e;
      }

      .💎 span:nth-child(7) {
        display: block;
        color: #cf0f1f;
        font-size: 0.53em;
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
      }

      li span {
        border-bottom: 1px solid #333;
      }

      li a:hover span {
        border: none;
      }
    `;
  }

  render() {
    return html`
      <div>
        <a href="/" class="💎">
          <span>f</span><span>r</span><span>o</span><span>n</span><span>t</span><span>x</span>
          <span>logo gallery</span>
        </a>

        <nav>
          <ul>
            <li>
              <a href=""><span>2018</span></a>
            </li>
            <li>
              <a href=""><span>2019</span></a>
            </li>
            <li>
              <a href=""><span>2020</span></a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('frontx-nav', FrontxNav);
