import { screen } from 'shadow-dom-testing-library';
import "@testing-library/jest-dom";
import "shadow-dom-testing-library";

import "./mgo-button.js";
import "./mgo-text-field.js";

test("mgo-button findByShadowRole works", async () => {
  document.body.innerHTML = `
    <mgo-button>My button</mgo-button>
  `;
  const btn = await screen.findByShadowRole('button', { name: 'My button' });
  expect(btn).toBeInTheDocument();
});

test("mgo-text-field findByShadowLabelText fails with hidden label", async () => {
  document.body.innerHTML = `
    <mgo-text-field>
      <div slot="label">Input Label</div>
    </mgo-text-field>
  `;
  await expect(
    screen.findByShadowLabelText('Input Label')
  ).rejects.toThrow();
});

test("mgo-text-field findByShadowLabelText works when label is visible", async () => {
  class VisibleLabelField extends customElements.get('mgo-text-field') {
    constructor() {
      super();
      const label = this.shadowRoot.querySelector('label');
      label.removeAttribute('aria-hidden');
      label.removeAttribute('hidden');
    }
  }
  customElements.define('mgo-visible-text-field', VisibleLabelField);

  document.body.innerHTML = `
    <mgo-visible-text-field>
      <div slot="label">Input Label</div>
    </mgo-visible-text-field>
  `;

  const input = await screen.findByShadowLabelText('Input Label');
  expect(input).toBeInTheDocument();
});

