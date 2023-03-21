export default class ShareBtn extends HTMLElement {
  static #template = document.createElement("template");

  static {
    ShareBtn.#template.innerHTML = `
      <button class="share-button">
        <svg><use href="#share"></use></svg>
      </button>
    `;
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(ShareBtn.#template.content.cloneNode(true));
    
    this.shadowRoot.querySelector(".share-button").addEventListener("click", async () => {
      try {
        await navigator.share({
          title: "Title",
          text: this.container.innerText, // Use the container passed as property
          url: "",
        });
      } catch (error) {
        console.log(error);
      }
    });
    
    
    // CSS: {
    //   const style = document.createElement('style');
    //   style.textContent = ``
    //   this.shadowRoot.appendChild(style);
    // }
  }
  static get observedAttributes() {
    return ["container"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(newValue);
    if (name === "container") {
      this.container = document.querySelector(newValue);
    }
  }

  set container(container) {
    this._container = container;
  }

  get container() {
    return this._container;
  }
}

customElements.define("x-share", ShareBtn);
