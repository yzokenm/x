"use strict";

export default class Share extends HTMLElement{
  static #template = document.createElement("template");

  static {
    Share.#template.innerHTML = `
      <share>
        <x-icon>share</x-icon>
      </share>
      <div class="share-dialog">
        <a class="linkedin-share">Linked In</a>
        <a class="facebook-share">Facebook</a>
        <a class="twitter-share">Twitter</a>
      </div>
    `;
  }

  constructor(){
    super();

    // Closed
    this.shadow = this.attachShadow({mode: 'closed'});

    Selector: {
      if(this.hasAttribute("selector"))
        this.selector = this.getAttribute("selector");

    }

    CSS: {
      const style = document.createElement('style');
      style.textContent = `
        share{
          width: 50px;
          height: 50px;
        }

        .share-dialog{
          display: none;
          flex-column: row;
          width: 100px;
          height: 50px;
        }

        a{
          text-decoration: none;
          
          display: flex;
          flex-direction: row;
          justify-content: space-between
        }

      `;
      this.shadow.appendChild(style);
    }

    // Clone And Append Template
    this.shadow.appendChild(Share.#template.content.cloneNode(true));
    this.onclick = async ()=>{
      if(!!this.selector === false) return;
      
      // Select The Element
      const text = document.querySelector(this.selector);

      if(!!text === false) return;

      const shareData = {
        title: "MDN",
        text: text.innerText,
        url: "https://developer.mozilla.org",
      };

      // Check If navigator.share
      if(!!navigator.share === true)
        try{
          await navigator.share(shareData);
          console.log("MDN shared successfully");

        }catch(err){
          console.log(`Error: ${err}`);

        }

      else{

        // In case of no native support for 'navigator.share' on OS!
        const shareDialog = this.shadow.querySelector(".share-dialog");
        shareDialog.style.display = "block";
        
        // Social media sharing URLs
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}`;
        const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${shareData.url}&quote=${shareData.text}`;
        const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${shareData.url}&title=${shareData.title}&summary=${shareData.text}`;
      
        // Set the href attributes of the social media sharing links
        shareDialog.querySelector(".twitter-share").href = twitterShareUrl;
        shareDialog.querySelector(".facebook-share").href = facebookShareUrl;
        shareDialog.querySelector(".linkedin-share").href = linkedinShareUrl;
      
      }

    };

          
  }

};

window.customElements.define('x-share', Share);

// Make Share Usable W/O Importing It
window.Share = Share;
          
