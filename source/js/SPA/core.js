//////////////// SPA - Single Page Application
"use strict";

///////////////////////////// Modules
// Order matters
import Logger from "../modules/logger.js";
import bridge from "../modules/bridge.js";
import XRequest from "../modules/XRequest.js";

//// Core Classes
import Language from "./language.js";

import Title from "./title.js";
import SVG from "./svg.js";
import CSS from "./css.js";

import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

import Hyperlink from "./hyperlink.js";
import Router from "./router.js";
import DOM from "./dom.js";

import Cover from "./cover.js";
import Loading from "./loading.js";
import Menu from "./menu.js";
import Form from "./form.js";

//// Custom Elements (In docs we call these Built-In X-Elements)
import XSVG from "./elements/XSVG.js";
import Modal from "./elements/modal.js";
import Toast from "./elements/toast.js";
import Share from "./elements/share.js"; // Share depends on modal
import Offline from "./elements/Offline.js";
import Notification_Bell from "./elements/Notification_Bell.js";

import Table from "./elements/table.js";
import Tooltip from "./elements/tooltip.js";
import Select from "./elements/select.js";

export default class Core{

	// Class Static Initialization Block
	static {
		// Try To Get Initial Data Then Init The Methods
		Core.#get_initial_data()
			.then(()=>{
				Core.#init();
				Core.#onLoad();
				Core.#onUrlChange();
				Core.#onHashChange();
				Core.#onHistoryButtonClicked();
				Core.#onDomChange();
				Core.#observeMutations();
			});
	}

	/////// Initial Data
	static async #get_initial_data(){
		return new Promise( async (resolve, reject) => {
			let response = await window.bridge({for:"initialData"}, "/api");

			if(typeof response === "object"){
				Log.success(response);

				window.session = response["session"];
				window.CONF = response["CONF"];
				window.Language.DICT = response["LANG_DICT"];
				window.USER_AUTHENTICITY_STATUSES = response["USER_AUTHENTICITY_STATUSES"];
				window.USER_ROLES = response["USER_ROLES"];
				window.USER_OCCUPATIONS = response["USER_OCCUPATIONS"];
				window.NOTIFICATION_TYPES = response["NOTIFICATION_TYPES"];
				window.SVG.load(response["PROJECT_SVG"]);

				resolve();
			}else{
				Log.error("Fetching the initial data failed!");

				reject();
			}
		});
	}

	// Initialize all the initial methods
	static #init(){
		Log.info("Core.#init()");

		Language.init();
		x.CSS.init();
		Menu.init();
		Header.init();
		Footer.init();
		Router.handle();
	}

	/////// Event Handlers
	static #onLoad(){
		// Works On The First Visit
		document.addEventListener('readystatechange', ()=>{
			if(event.target.readyState === 'loading') return;
			if(event.target.readyState === 'interactive') return;
			// if(event.target.readyState === 'complete');

			// window.dispatchEvent(new Event('load'));
			Log.info("onLoad");

			Router.handle();
			Menu.set_active();
		});
	}

	static #onUrlChange(){
		window.addEventListener('locationchange', ()=>{
			// window.dispatchEvent(new Event('locationchange'));
			Log.info("Core.#onUrlChange()");

			Router.handle();
			Menu.set_active();
		});
	}

	static #onHashChange(){
		window.addEventListener('hashchange', ()=>{
			// window.dispatchEvent(new Event('hashchange'));
			Log.info("Core.#onHashChange()");
		});
	}

	static #onHistoryButtonClicked(){
		window.addEventListener('popstate', ()=>{
			// window.dispatchEvent(new Event('popstate'));
			Log.info("Core.#onHistoryButtonClicked()");

			Router.handle();
			Menu.set_active();
		});
	}

	static #onDomChange(){
		window.addEventListener('domChange', ()=>{
			// window.dispatchEvent(new CustomEvent('domChange'));
			// window.dispatchEvent(new CustomEvent("domChange", {detail:"menu"}));
			Log.info("Core.#onDomChange()");

			// Targets sample event.detail = ["menu", "main"...]
			// If has target(s) then update the dom. body > target
			if(!!event.detail === true) DOM.update(event.detail);
		});
	}

	static #observeMutations(){
		// Callback function to execute when mutations are observed
		const callback = (mutationList, observer)=>{
			// Ensure that any methods requiring execution upon a DOM change are encapsulated within the for loop provided below.
			for(const mutation of mutationList){

				// Skip observing based on element
				// if(mutation.target.nodeName == "IFRAME") continue;

				// Check if the mutation target is within an element to be ignored
				if(mutation.target.closest('[x-ignore-mutations]')) continue;

				// A child node has been added or removed.
				if(mutation.type === "childList"){
					Hyperlink.collect();
					Form.collect();
				}

				// The ${mutation.attributeName} attribute was modified.
				// else if(mutation.type === "attributes"){}

				XRequest.collect();
			}
		};

		// Create an observer instance linked to the callback function
		const observer = new MutationObserver(callback);

		observer.observe(document.body, {attributes: true, childList: true, subtree: true});

		// observer.disconnect();
	}
};
