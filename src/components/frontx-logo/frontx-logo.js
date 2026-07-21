import { LitElement, html, css } from 'lit';

export class FrontxLogo extends LitElement {
  static styles = css`
    :host {
      display: inline;
      font-family: 'Comic Sans MS', 'Comic Sans', Lora, serif;
      letter-spacing: 0.04em;
    }

    span {
      &:nth-of-type(1) {
        color: #fdbf2d;
      }

      &:nth-of-type(2) {
        color: #eb7d3c;
      }

      &:nth-of-type(3) {
        color: #fc0d1b;
      }

      &:nth-of-type(4) {
        color: #19af54;
      }

      &:nth-of-type(5) {
        color: #1eb1ed;
      }

      &:nth-of-type(6) {
        color: #6f359e;
      }
    }
  `;

  render() {
    return html`
      <span>f</span><span>r</span><span>o</span><span>n</span><span>t</span
      ><span>x</span>
    `;
  }
}

customElements.define('frontx-logo', FrontxLogo);
