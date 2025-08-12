import { screen } from 'shadow-dom-testing-library';
import "@testing-library/jest-dom";
import "shadow-dom-testing-library";

import "./mgo-text-field.js";
import "./mgo-text-field-with-slot.js"
import "./mgo-text-field-with-dynamic-slot.js"

test("mgo-text-field should find Input Label text", async () => {

  document.body.innerHTML = `
    <mgo-text-field>
      <div slot="label">Input Label</div>
    </mgo-text-field>
  `;

  const input = await screen.findByShadowLabelText('Input Label');
  expect(input).toBeInTheDocument();
});

test("mgo-text-field-with-slot should project the slot to Input Label text", async () => {

  document.body.innerHTML = `
    <mgo-text-field-with-slot>
      <div slot="label">Input Label</div>
    </mgo-text-field-with-slot>
  `;

  const input = await screen.findByShadowLabelText('Input Label');
  expect(input).toBeInTheDocument();
});


test("mgo-text-field-with-dynamic-slot should have visible label when slotted", async () => {

  document.body.innerHTML = `
    <mgo-text-field-with-dynamic-slot>
      <div slot="label">Input Label</div>
    </mgo-text-field-with-dynamic-slot>
  `;

  const input = await screen.findByShadowLabelText('Input Label');
  expect(input).toBeInTheDocument();
});

