"use strict";

export default class Menu{
  static selector = "body > menu";
  static #selectorMenuButton = "body > header > x-icon[for=menu]";
  static #selectorHyperlinks = `${Menu.selector} > * > section[for=menu] > a`;
  static #hyperlinks = null;

  static #elementMenuHamburgerButton = null;
  static #elementMenu = null;

  static #shown = false;

  static #modes = ["normal", "alwaysOpen", "onlyLogos"];
  static #currentMode = null;


  /////////////////// Init
  static init(){
    Menu.#elementMenuHamburgerButton = document.querySelector(Menu.#selectorMenuButton);
    Menu.#elementMenu = document.querySelector(Menu.selector);

    // Check If "body > menu" Exists
    if(!!Menu.#elementMenu === false) return;

    // Try To Build The Menu
    if(Menu.build() === false) return;

    // Listen To The Events
    Menu.#onClickMenuButtonShow();
    Menu.#onClickCoverHide();
    Menu.#toggleAlwaysOpenMode();
    Menu.#colorModeSwitcher();

  }

  /////////////////// Create Menu | Re-Build
  static build(){
    // console.log("Menu.build()");

    // Check If CONF Has Menu
    if(!("menu" in window.CONF)) return false;

    // Check If Menu Is Enabled
    if(window.CONF["menu"]["enabled"] === false) return false;


    // Creates DOM For Menu And Submenus
    Menu.buildMenu();


    // Add Hyperlinks Into Menu > Main
    Menu.#elementMenu.querySelector("main").innerHTML = hyperlinks;

    // Gather All Hyperlinks To Use Later
    // Update When Re-Build
    Menu.#hyperlinks = document.querySelectorAll(Menu.#selectorHyperlinks);

    // After Adding Hyperlinks To Dom Create Hide Event For Each Of The Hyperlinks
    // Update When Re-Build
    Menu.#onClickHyperlinksHide();

    // Toggle Submenus
    // Update When Re-Build
    Menu.#onClickArrowToggleSubmenu();

  }

  static buildMenu(){
    let hyperlinks = "";

    for(const menu of window.CONF["menu"]["menus"])
      if(Menu.#menuGuard(menu["name"]) === true){



        // Hyperlink Blue Print
        hyperlinks += `
          <section for="menu">
            <a href="${window.CONF["pages"][menu["name"]]["aliases"][0]}">
              <x-icon color="#ffffff">${"logo" in menu ? menu["logo"] : menu["name"]}</x-icon>
              <span>${window.Lang.use(menu["name"])}</span>
            </a>
            ${Menu.buildSubmenu(menu)}
          </section>
        `;

      }
  }

  static buildSubmenu(menu){
    //// Submenus
    let submenuContainer = "";

    // Check If Submenus Exists
    if("submenu" in menu){

      // Open Container
      submenuContainer = `
        <x-icon for="submenusToggler" color="#ffffff">arrow_down</x-icon>
        <section for="submenu">
      `;

      // Loop Through Submenus
      for(const submenu of menu["submenu"])

        // Check If Submenu Passes The Guard Tests
        if(Menu.#menuGuard(submenu["name"]) === true)
          submenuContainer += `
            <a href="${window.CONF["pages"][submenu["name"]]["aliases"][0]}">
              <x-icon color="#ffffff">${"logo" in submenu ? submenu["logo"] : submenu["name"]}</x-icon>
              <span>${window.Lang.use(submenu["name"])}</span>
            </a>
          `;

        // Close Container
        submenuContainer += "</section>";

    }

    return submenuContainer;

  }

  /////////////////// On Click Events
  // Active
  static setActive(){
    for(const hyperlink of Menu.#hyperlinks){

      // Remove Actives
      hyperlink.removeAttribute("active");

      // IF Hyperlink Href Equals To Current Pathname Then Set As Active
      if(hyperlink.getAttribute("href") == window.location.pathname)
        hyperlink.setAttribute("active", "");

      // If Equals To One Of The Followings Set Home As Active
      else if(window.location.pathname == "/" || window.location.pathname == "" || window.location.pathname == "/home")
        document.querySelector(`${Menu.#selectorHyperlinks}:first-child`).setAttribute("active", "");

    }

  }

  // On Click Menu Button Show The Menu
  static #onClickMenuButtonShow(){
    document.querySelector(Menu.#selectorMenuButton).onclick = Menu.#show;
  }

  // On Click Cover Hide
  static #onClickCoverHide(){
    document.querySelector(window.Cover.selector).addEventListener("click", Menu.#hide);
  }

  // On Click Menu Anchors Hide The Menu
  static #onClickHyperlinksHide(){
    for(const hyperlink of Menu.#hyperlinks) hyperlink.addEventListener("click", Menu.#hide);

  }

  // On Click Arrow For Submenu Toggle Submenu
  static #onClickArrowToggleSubmenu(){
    for(const hyperlink of Menu.#hyperlinks){
      const submenusTogglerContainer = hyperlink.parentNode.querySelector("x-icon[for=submenusToggler]");
      if(!!submenusTogglerContainer === true)
        submenusTogglerContainer.addEventListener("click", ()=>{
          hyperlink.parentNode.querySelector("section[for=submenu]").classList.toggle("show");
        });
    }
  }

  /////////////////// Tools
  // Show Menu
  static #show(){
    // Check If Already Shown
    if(Menu.#shown) return;

    // Check if body > menu exists
    if(!!Menu.#elementMenu === false) return;

    Menu.#elementMenu.style.transform = "translate(0px, 0px)";
    window.Cover.show();

    Menu.#shown = true;

  }

  // Hide Menu
  static #hide(){
    // Check If Already Hidden
    if(!Menu.#shown) return;

    // Check If Current Mode Is "alwaysOpen" Mode
    if(Menu.#currentMode === 1) return;

    // Check if body > menu exists
    if(!!Menu.#elementMenu === false) return;

    Menu.#elementMenu.removeAttribute("style");
    window.Cover.hide();

    Menu.#shown = false;

  }

  // toggleAlwaysOpenMode Menu
  static #toggleAlwaysOpenMode(){
    const toggler = document.querySelector(`${Menu.selector} > header > div[for=toggleAlwaysOpenMode]`);

    const header = document.querySelector(window.Header.selector);
    const main = document.querySelector(window.Main.selector);
    const footer = document.querySelector(window.Footer.selector);

    toggler.addEventListener("click", ()=>{

      if(Menu.#currentMode === 1){
        // Mode Change To "normal"
        Menu.#currentMode = 0;

        window.Cover.show();

        // Show Hamburger Button
        Menu.#elementMenuHamburgerButton.style.visibility = "visible";

        // Change The Lock Logo To Open
        toggler.innerHTML = "<x-icon color='#ffffff'>lockOpen</x-icon>";

        // Header, Main, Footer Maximize
        header.removeAttribute("style");
        main.removeAttribute("style");
        footer.removeAttribute("style");

      }else{
        // Mode Change To "alwaysOpen"
        Menu.#currentMode = 1;

        window.Cover.hide();

        // Hide Hamburger Button
        Menu.#elementMenuHamburgerButton.style.visibility = "hidden";

        // Change The Lock Logo To Locked
        toggler.innerHTML = "<x-icon color='#ffffff'>lockLocked</x-icon>";

        // Get Calculated Meni Width
        const menuWidth = Menu.#elementMenu.offsetWidth + "px";

        // Header, Main, Footer Minimize
        for(const element of [header, main, footer]){
          element.style.width = `calc(100% - ${menuWidth})`;
          element.style.marginLeft = menuWidth;
        }

      }

    });

  }

  // Switcher Color Mode
  static #colorModeSwitcher(){
    const switcher = document.querySelector(`${Menu.selector} > header > div[for=colorModeSwitcher]`);

    switcher.addEventListener("click", ()=>{
      // Dark Mode
      if(window.CSS.currentColorMode === window.CSS.colorModes.LIGHT){
        switcher.innerHTML = "<x-icon color='#ffffff'>light_mode</x-icon>";
        window.CSS.currentColorMode = window.CSS.colorModes.DARK;
      }
      // Light Mode
      else{
        switcher.innerHTML = "<x-icon color='#ffffff'>dark_mode</x-icon>";
        window.CSS.currentColorMode = window.CSS.colorModes.LIGHT;
      }

      window.CSS.colorModeSwitcher();

    });
  }

  // Guard
  static #menuGuard(menu){
    // Check If Menu Is Enabled
    // Done At Menu.init()


    // Check If Menu Exists (Depreciated)
    // Already Looping Through Existent Menus


    // Check If Current Menu Is Enabled (Depreciated)
    // If Menu In List Means Already Enabled
    // if(window.CONF["menu"]["menus"][menu]["enabled"] === false) return false;


    // Check If Menu Linked Page Exists In CONF["pages"]
    if(!(menu in window.CONF["pages"])) return false;


    // Check If Menu Linked Page Is Enabled In CONF["pages"]
    if(window.CONF["pages"][menu]["enabled"] == false) return false;


    // Everyone
    if(window.CONF["pages"][menu]["allowed"].includes("everyone")) return true;


    // Session Dependent Checks
    if("user" in window.session){
      // Root
      if(window.session["user"]["type"] == window.USER_TYPES["root"]["id"]) return true;

      // If User Type Matches With One Of The Page's Allowed User Types
      for(let user_type in window.USER_TYPES)
        if(
          window.session["user"]["type"] == window.USER_TYPES[user_type]["id"] &&
          window.CONF["pages"][menu]["allowed"].includes(user_type)
        )
          return true;

    }


    // Session Independent Checks
    if(!("user" in window.session)){
      // Unauthenticated User
      if(window.CONF["pages"][menu]["allowed"].includes("unauthenticated")) return true;

    }


    // Failed The Guard Checks
    return false;

  }

}

// Make Menu Usable W/O Importing It
window.Menu = Menu;
