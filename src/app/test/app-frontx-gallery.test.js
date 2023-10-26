import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import '../app-frontx-gallery.js';

describe('App: frontx-gallery', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<app-frontx-gallery></app-frontx-gallery>`);
  });

  it('should load images in the viewport', async () => {
    const images = element.shadowRoot.querySelectorAll('img[data-src]');
    await waitUntil(() => !!images[0].getAttribute('src'));

    expect(images[0].getAttribute('src')).to.include('/2018-frontx.png');
    expect(images[1].getAttribute('src')).to.be.empty;
  });

  it('should pass the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
