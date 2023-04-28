// <x-icon>yzoken</x-icon>

"use strict";

export default class Copy extends HTMLElement{
  static #template = document.createElement("template");

  static {
    Copy.#template.innerHTML = `
      <copy>
        <x-icon>copyContent</x-icon>
      </copy>
    `;
  }

  constructor(){
    super();
     this.isCopied = false;

    // Closed
    this.shadow = this.attachShadow({mode: 'closed'});

    Selector: {
      if(this.hasAttribute("selector"))
        this.selector = this.getAttribute("selector");

    }

    CSS: {
      const style = document.createElement('style');
      style.textContent = `
        copy{
          width: 50px;
          height: 50px;
        }
      `;
      this.shadow.appendChild(style);
    }

    // Clone And Append Template
    this.shadow.appendChild(Copy.#template.content.cloneNode(true));
    
    this.onclick =()=>{
      // Select copy element
      const copySelector = this.shadow.querySelector('copy');

      if(!!this.selector === false) return;
      // Select The Element
      const element = document.querySelector(this.selector);
      if(!!element === false) return;

      // Check If isCopied False Show Toast Once
      if (this.isCopied === false) window.Toast.new('info', 'Copied');
      // Copy the content
      navigator.clipboard.writeText(element.innerText);
      
      // Updating Elements
      this.isCopied = true
      copySelector.setAttribute('disabled', '')
      copySelector.innerHTML = '<x-icon>x</x-icon>';
      copySelector.style.pointerEvents = 'none'

      // Set A Timeout To Replace Contents Back 
      setTimeout(() => {
        this.isCopied = false;
        copySelector.removeAttribute('disabled')
        copySelector.innerHTML = '<x-icon>copyContent</x-icon>';
        copySelector.style.pointerEvents = 'auto';
      }, 5000);

    };

  }

};

window.customElements.define('x-copy', Copy);

// Make Copy Usable W/O Importing It
window.Copy = Copy;
