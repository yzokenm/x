//////////////// SPA - Single Page Application
"use strict";

//// Custom Elements
import El from "./elements/el.js";
// import Form from "./elements/form.js";
// import Toast from "./elements/toast.js";

// import CSS from "./css.js";
// document.head.innerHTML += `<style>${CSS}</style>`;

//// Core Classes
import Dom from "./dom.js";
// import Title from "./title.js";
import Router from "./router.js";
import Form from "./form.js";
// import Cover from "./cover.js";
import Hyperlink from "./hyperlink.js";
import Loading from "./loading.js";
import Menu from "./menu.js";
// import Nav from "./nav.js";

export default class Core{
  static {
    Core.#onLoad();
    Core.#onUrlChange();
    Core.#onHashChange();
    Core.#onHistoryButtonClicked();
    Core.#onDomChange();

  }

  /////// Event Handlers
  static #onLoad(){
    document.addEventListener('readystatechange', ()=>{
      if(event.target.readyState === 'loading') return;
      if(event.target.readyState === 'interactive') return;
      // if(event.target.readyState === 'complete');

      // window.dispatchEvent(new Event('load'));
      // console.log("onLoad");

      Router.handle();

      Menu.setActive();

      Loading.done();

    });
  }

  static #onUrlChange(){
    window.addEventListener('locationchange', ()=>{
      // window.dispatchEvent(new Event('locationchange'));
      // console.log("onUrlChange");

      Router.handle();

      Menu.setActive();

    });
  }

  static #onHashChange(){
    window.addEventListener('hashchange', ()=>{
      // window.dispatchEvent(new Event('hashchange'));
      // console.log("onHashChange");

      // Nav.setActive();

    });
  }

  static #onHistoryButtonClicked(){
    window.addEventListener('popstate', ()=>{
      // window.dispatchEvent(new Event('popstate'));
      // console.log("onHistoryButtonClicked");

      Router.handle();

    });
  }

  static #onDomChange(){
    window.addEventListener('domChange', ()=>{
      // window.dispatchEvent(new CustomEvent('domChange'));
      // console.log("onDomChange");

      Hyperlink.collect();
      Form.collect();

    });
  }

};
