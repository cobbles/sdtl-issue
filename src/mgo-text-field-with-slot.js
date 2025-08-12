import { LitElement, html, css } from 'lit';

export class MgoTextFieldWithSlot extends LitElement {
  static styles = css`
    .form-control {
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <div class="form-control">
        <label for="MyForm__name">
          <slot name="label"></slot>
        </label>
        <input id="MyForm__name" />
      </div>
    `;
  }
}

customElements.define('mgo-text-field-with-slot', MgoTextFieldWithSlot);
