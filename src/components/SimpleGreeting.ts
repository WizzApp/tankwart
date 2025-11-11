import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
	render() {
		return html`<p>Hello from my template.</p>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"simple-greeting": SimpleGreeting;
	}
}
