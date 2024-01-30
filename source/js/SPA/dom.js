// const newDiv = document.createElement("div");
// const newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent);


// else if(DOM.page.before.constructor.name === 'Function') DOM.page.before();

export default class DOM{
	static #page = null;

	static setPage(page){
		// Check If Page Is Valid
		if(!!page == false) return;

		// Update "page" Variable
		DOM.#page = page;

		// Start The Page's Life Cycle
		DOM.lifeCycle();
	}

	static async executeOnFormGotResponse(response){

		// If Async Function Passed Or Normal One
		if(DOM.#page.onFormGotResponse.constructor.name === 'AsyncFunction') await DOM.#page.onFormGotResponse(response);
		else DOM.#page.onFormGotResponse(response);

	}

	static async lifeCycle(){
		Log.info("DOM.lifeCycle()");

		// Create Page Scoped Variable
		window.pageData = {};

		////////// Title
		// Set Title
		window.Title.set(DOM.#page.TITLE);

		////////// Content / Main
		///// Before
		// Check If before() Exists
		if(!!DOM.#page.before === true)
			// If Async Function Passed Or Normal One
			if(DOM.#page.before.constructor.name === 'AsyncFunction') await DOM.#page.before();
			else DOM.#page.before();

		////////// Header
		// Let Header Class To Handle
		window.Header.handle(DOM.#page.header);

		///// Content - Render The Content
		// Check If Default Function Exists
		if(typeof DOM.#page.default === "function")
			// If Async Function Passed Or Normal One
			if(DOM.#page.default.constructor.name === 'AsyncFunction') DOM.render(await DOM.#page.default());
			else DOM.render(DOM.#page.default());
		else DOM.render(`
			<container class="p-5">
				<column class="flex-y-start surface-error p-3 gap-0-5">
					<error>ERROR</error>
					<info class="text-size-0-8">DOM.lifeCycle() -> No default function defined!</info>
				</column>
			</container>
		`);

		////////// Footer
		// Let Footer Class To Handle
		window.Footer.handle(DOM.#page.footer);

		///// After
		// Check If after() Exists
		if(!!DOM.#page.after === true)
			// If Async Function Passed Or Normal One
			if(DOM.#page.after.constructor.name === 'AsyncFunction') await DOM.#page.after();
			else DOM.#page.after();

		// Delete The Page Data At The End Of Each Life Cycle
		delete window.pageData;
	}

	static render(dom){
		// Scroll To Top Before Rendering
		window.scrollTo(0, 0);

		// If Passed Object Like: createElement("x-form")
		if(typeof dom === "object") window.Main.element.replaceChildren(dom);

		// If Passed String Like: "<x-form></x-from>"
		else if(typeof dom === "string") window.Main.element.innerHTML = dom;

		window.dispatchEvent(new CustomEvent("domChange"));
	}

	static update(targets = []){
		Log.info("DOM.update() - init");

		for(const target of targets)
			switch(target){
				case "menu":
					Log.info(`DOM.update() - target: ${target}`);
					Menu.build();
					break;

				case "header":
					Log.info(`DOM.update() - target: ${target}`);
					break;

				case "main":
					Log.info(`DOM.update() - target: ${target}`);
					DOM.lifeCycle();
					break;

				case "footer":
					Log.info(`DOM.update() - target: ${target}`);
					break;

				case "all":
					Log.info(`DOM.update() - target: ${target}`);
					Menu.build();
					DOM.lifeCycle();
					break;

				default:
					Log.warning(`DOM.update() - Unknown Target For Dom Change: ${target}`);
			}
	}
}

// Make DOM Usable W/O Importing It
window.DOM = DOM;
