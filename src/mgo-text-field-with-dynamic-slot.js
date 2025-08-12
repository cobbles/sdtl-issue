import { LitElement, html, css } from 'lit';
import { HasSlotController } from './slot';

export class MgoTextFieldWithDynamicSlot extends LitElement {
  hasSlotController = new HasSlotController(
    this,
    "label"
  );  
  
  static styles = css`
    .form-control {
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    const isLabelSlotted = this.hasSlotController.test('label');

    return html`
      <div class="form-control">
        <label hidden=${isLabelSlotted} aria-hidden=${isLabelSlotted} for="MyForm__name">
          <slot name="label"></slot>
        </label>
        <input id="MyForm__name" />
      </div>
    `;
  }
}

customElements.define('mgo-text-field-with-dynamic-slot', MgoTextFieldWithDynamicSlot);