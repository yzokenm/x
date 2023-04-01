"use strict";

export default class SVG{
  static #all = {
    "home": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>`,
    "menu": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>`,
    "laboratory": `<rect fill="none" height="24" width="24"/><path d="M20.54,17.73L15,11V5h1c0.55,0,1-0.45,1-1s-0.45-1-1-1H8C7.45,3,7,3.45,7,4s0.45,1,1,1h1v6l-5.54,6.73 C3.14,18.12,3,18.56,3,19c0.01,1.03,0.82,2,2,2H19c1.19,0,2-0.97,2-2C21,18.56,20.86,18.12,20.54,17.73z"/>`,
    "avatar": `<g><rect fill="none" height="24" width="24"/></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></g>`,
    "folder": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z"/>`,
    "openBook": `<g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M17.5,4.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45,0-2.99,0.22-4.28,0.79C1.49,5.62,1,6.33,1,7.14 l0,11.28c0,1.3,1.22,2.26,2.48,1.94C4.46,20.11,5.5,20,6.5,20c1.56,0,3.22,0.26,4.56,0.92c0.6,0.3,1.28,0.3,1.87,0 c1.34-0.67,3-0.92,4.56-0.92c1,0,2.04,0.11,3.02,0.36c1.26,0.33,2.48-0.63,2.48-1.94l0-11.28c0-0.81-0.49-1.52-1.22-1.85 C20.49,4.72,18.95,4.5,17.5,4.5z M21,17.23c0,0.63-0.58,1.09-1.2,0.98c-0.75-0.14-1.53-0.2-2.3-0.2c-1.7,0-4.15,0.65-5.5,1.5V8 c1.35-0.85,3.8-1.5,5.5-1.5c0.92,0,1.83,0.09,2.7,0.28c0.46,0.1,0.8,0.51,0.8,0.98V17.23z"/><g/><path d="M13.98,11.01c-0.32,0-0.61-0.2-0.71-0.52c-0.13-0.39,0.09-0.82,0.48-0.94c1.54-0.5,3.53-0.66,5.36-0.45 c0.41,0.05,0.71,0.42,0.66,0.83c-0.05,0.41-0.42,0.71-0.83,0.66c-1.62-0.19-3.39-0.04-4.73,0.39 C14.13,10.99,14.05,11.01,13.98,11.01z"/><path d="M13.98,13.67c-0.32,0-0.61-0.2-0.71-0.52c-0.13-0.39,0.09-0.82,0.48-0.94c1.53-0.5,3.53-0.66,5.36-0.45 c0.41,0.05,0.71,0.42,0.66,0.83c-0.05,0.41-0.42,0.71-0.83,0.66c-1.62-0.19-3.39-0.04-4.73,0.39 C14.13,13.66,14.05,13.67,13.98,13.67z"/><path d="M13.98,16.33c-0.32,0-0.61-0.2-0.71-0.52c-0.13-0.39,0.09-0.82,0.48-0.94c1.53-0.5,3.53-0.66,5.36-0.45 c0.41,0.05,0.71,0.42,0.66,0.83c-0.05,0.41-0.42,0.7-0.83,0.66c-1.62-0.19-3.39-0.04-4.73,0.39 C14.13,16.32,14.05,16.33,13.98,16.33z"/></g>`,
    "lockLocked": `<g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>`,
    "lockOpen": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22.53.14 1.08-.18 1.22-.72C9.44 3.93 10.63 3 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8z"/>`,
    "copyContent": `<g><rect fill="none" height="24" width="24"/></g><g><path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"/></g>`,
    "link": `<g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,7h-3c-0.55,0-1,0.45-1,1s0.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3 c2.76,0,5-2.24,5-5S19.76,7,17,7z M8,12c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1s-0.45-1-1-1H9C8.45,11,8,11.45,8,12z M10,15H7 c-1.65,0-3-1.35-3-3s1.35-3,3-3h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H7c-2.76,0-5,2.24-5,5s2.24,5,5,5h3c0.55,0,1-0.45,1-1 C11,15.45,10.55,15,10,15z"/></g></g>`,
    "share": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>`,
    "light_mode": `<rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>`,
    "dark_mode": `<rect fill="none" height="24" width="24"/><path d="M11.01,3.05C6.51,3.54,3,7.36,3,12c0,4.97,4.03,9,9,9c4.63,0,8.45-3.5,8.95-8c0.09-0.79-0.78-1.42-1.54-0.95 c-0.84,0.54-1.84,0.85-2.91,0.85c-2.98,0-5.4-2.42-5.4-5.4c0-1.06,0.31-2.06,0.84-2.89C12.39,3.94,11.9,2.98,11.01,3.05z"/>`,
    "arrow_up": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"/>`,
    "arrow_down": `<path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>`,

    "signUp": `<path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/>`,
    "logIn": `<g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g>`,
    "logOut": `<path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>`,

    "privacyPolicy": `<rect fill="none" height="24" width="24"/><path d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"/>`,
    "contact": `<path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`,
    "faq": `<path d="M0 0h24v24H0z" fill="none"/><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>`,

    "error_circle": `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>`,
    "block_circle": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>`,
    "x": `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>`,

    ///// Social Media Colored/Original/Situationals
    // Facebook
    "facebook_original": `<defs><linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="-277.375" y1="406.6018" x2="-277.375" y2="407.5726" gradientTransform="matrix(24,0,0,-23.86668,6669.0006,9727.4004)"><stop offset="0" style="stop-color:rgb(0%,38.431373%,87.843137%);stop-opacity:1;"/><stop offset="1" style="stop-color:rgb(9.803922%,68.627451%,100%);stop-opacity:1;"/></linearGradient></defs><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:url(#linear0);" d="M 10.019531 23.878906 C 4.320312 22.859375 0 17.941406 0 12 C 0 5.398438 5.398438 0 12 0 C 18.601562 0 24 5.398438 24 12 C 24 17.941406 19.679688 22.859375 13.980469 23.878906 L 13.320312 23.339844 L 10.679688 23.339844 Z M 10.019531 23.878906 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.679688 15.359375 L 17.21875 12 L 14.039062 12 L 14.039062 9.660156 C 14.039062 8.699219 14.398438 7.980469 15.839844 7.980469 L 17.398438 7.980469 L 17.398438 4.921875 C 16.558594 4.800781 15.601562 4.679688 14.761719 4.679688 C 12 4.679688 10.078125 6.359375 10.078125 9.359375 L 10.078125 12 L 7.078125 12 L 7.078125 15.359375 L 10.078125 15.359375 L 10.078125 23.820312 C 10.738281 23.941406 11.398438 24 12.058594 24 C 12.71875 24 13.378906 23.941406 14.039062 23.820312 L 14.039062 15.359375 Z M 16.679688 15.359375 "/></g>`,

    // Instagram Original
    "instagram_original": `<defs><radialGradient id="radial0" gradientUnits="userSpaceOnUse" cx="158.429" cy="578.088" fx="158.429" fy="578.088" r="65" gradientTransform="matrix(0,-0.36036,0.335255,0,-187.345091,82.728)"><stop offset="0" style="stop-color:rgb(100%,86.666667%,33.333333%);stop-opacity:1;"/><stop offset="0.1" style="stop-color:rgb(100%,86.666667%,33.333333%);stop-opacity:1;"/><stop offset="0.5" style="stop-color:rgb(100%,32.941176%,24.313725%);stop-opacity:1;"/><stop offset="1" style="stop-color:rgb(78.431373%,21.568627%,67.058824%);stop-opacity:1;"/></radialGradient><radialGradient id="radial1" gradientUnits="userSpaceOnUse" cx="147.694" cy="473.455" fx="147.694" fy="473.455" r="65" gradientTransform="matrix(0.0316255,0.157949,-0.651236,0.130396,299.882182,-83.180545)"><stop offset="0" style="stop-color:rgb(21.568627%,44.313725%,78.431373%);stop-opacity:1;"/><stop offset="0.128" style="stop-color:rgb(21.568627%,44.313725%,78.431373%);stop-opacity:1;"/><stop offset="1" style="stop-color:rgb(40%,0%,100%);stop-opacity:0;"/></radialGradient></defs><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:url(#radial0);" d="M 12.007812 0.183594 C 7.070312 0.183594 5.628906 0.1875 5.347656 0.210938 C 4.335938 0.292969 3.703125 0.453125 3.019531 0.796875 C 2.488281 1.058594 2.070312 1.363281 1.660156 1.789062 C 0.910156 2.570312 0.457031 3.527344 0.289062 4.664062 C 0.210938 5.21875 0.1875 5.332031 0.183594 8.152344 C 0.179688 9.09375 0.183594 10.332031 0.183594 11.996094 C 0.183594 16.925781 0.1875 18.367188 0.210938 18.648438 C 0.292969 19.632812 0.449219 20.253906 0.777344 20.929688 C 1.402344 22.230469 2.59375 23.203125 4.003906 23.566406 C 4.488281 23.691406 5.027344 23.761719 5.71875 23.792969 C 6.011719 23.808594 8.996094 23.816406 11.980469 23.816406 C 14.964844 23.816406 17.953125 23.8125 18.238281 23.796875 C 19.039062 23.761719 19.5 23.699219 20.015625 23.566406 C 21.433594 23.199219 22.605469 22.238281 23.242188 20.921875 C 23.5625 20.261719 23.726562 19.617188 23.800781 18.683594 C 23.816406 18.480469 23.824219 15.234375 23.824219 11.992188 C 23.824219 8.75 23.816406 5.507812 23.800781 5.304688 C 23.726562 4.355469 23.5625 3.714844 23.230469 3.042969 C 22.960938 2.488281 22.65625 2.078125 22.21875 1.65625 C 21.4375 0.910156 20.480469 0.453125 19.339844 0.289062 C 18.789062 0.210938 18.679688 0.1875 15.851562 0.183594 Z M 12.007812 0.183594 "/><path style=" stroke:none;fill-rule:nonzero;fill:url(#radial1);" d="M 12.007812 0.183594 C 7.070312 0.183594 5.628906 0.1875 5.347656 0.210938 C 4.335938 0.292969 3.703125 0.453125 3.019531 0.796875 C 2.488281 1.058594 2.070312 1.363281 1.660156 1.789062 C 0.910156 2.570312 0.457031 3.527344 0.289062 4.664062 C 0.210938 5.21875 0.1875 5.332031 0.183594 8.152344 C 0.179688 9.09375 0.183594 10.332031 0.183594 11.996094 C 0.183594 16.925781 0.1875 18.367188 0.210938 18.648438 C 0.292969 19.632812 0.449219 20.253906 0.777344 20.929688 C 1.402344 22.230469 2.59375 23.203125 4.003906 23.566406 C 4.488281 23.691406 5.027344 23.761719 5.71875 23.792969 C 6.011719 23.808594 8.996094 23.816406 11.980469 23.816406 C 14.964844 23.816406 17.953125 23.8125 18.238281 23.796875 C 19.039062 23.761719 19.5 23.699219 20.015625 23.566406 C 21.433594 23.199219 22.605469 22.238281 23.242188 20.921875 C 23.5625 20.261719 23.726562 19.617188 23.800781 18.683594 C 23.816406 18.480469 23.824219 15.234375 23.824219 11.992188 C 23.824219 8.75 23.816406 5.507812 23.800781 5.304688 C 23.726562 4.355469 23.5625 3.714844 23.230469 3.042969 C 22.960938 2.488281 22.65625 2.078125 22.21875 1.65625 C 21.4375 0.910156 20.480469 0.453125 19.339844 0.289062 C 18.789062 0.210938 18.679688 0.1875 15.851562 0.183594 Z M 12.007812 0.183594 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12 3.273438 C 9.628906 3.273438 9.332031 3.28125 8.402344 3.324219 C 7.472656 3.367188 6.839844 3.515625 6.285156 3.730469 C 5.710938 3.953125 5.222656 4.253906 4.738281 4.738281 C 4.253906 5.222656 3.953125 5.710938 3.730469 6.28125 C 3.515625 6.839844 3.367188 7.472656 3.324219 8.402344 C 3.285156 9.332031 3.273438 9.628906 3.273438 12 C 3.273438 14.371094 3.285156 14.667969 3.324219 15.597656 C 3.367188 16.527344 3.515625 17.160156 3.730469 17.714844 C 3.953125 18.289062 4.253906 18.777344 4.738281 19.261719 C 5.222656 19.746094 5.710938 20.046875 6.28125 20.269531 C 6.839844 20.484375 7.472656 20.632812 8.402344 20.675781 C 9.332031 20.71875 9.628906 20.726562 12 20.726562 C 14.371094 20.726562 14.667969 20.71875 15.597656 20.675781 C 16.527344 20.632812 17.160156 20.484375 17.714844 20.269531 C 18.289062 20.046875 18.777344 19.746094 19.261719 19.261719 C 19.746094 18.777344 20.046875 18.289062 20.269531 17.714844 C 20.484375 17.160156 20.628906 16.527344 20.675781 15.597656 C 20.714844 14.667969 20.726562 14.371094 20.726562 12 C 20.726562 9.628906 20.714844 9.332031 20.675781 8.402344 C 20.628906 7.472656 20.484375 6.839844 20.269531 6.285156 C 20.046875 5.710938 19.746094 5.222656 19.261719 4.738281 C 18.777344 4.25 18.289062 3.953125 17.714844 3.730469 C 17.160156 3.515625 16.523438 3.367188 15.597656 3.324219 C 14.664062 3.28125 14.367188 3.273438 11.996094 3.273438 Z M 11.21875 4.84375 C 11.449219 4.84375 11.710938 4.84375 12 4.84375 C 14.332031 4.84375 14.605469 4.855469 15.527344 4.894531 C 16.378906 4.933594 16.839844 5.078125 17.148438 5.195312 C 17.554688 5.355469 17.84375 5.542969 18.152344 5.847656 C 18.457031 6.15625 18.644531 6.445312 18.804688 6.851562 C 18.921875 7.160156 19.066406 7.621094 19.105469 8.472656 C 19.144531 9.390625 19.15625 9.667969 19.15625 11.996094 C 19.15625 14.328125 19.144531 14.601562 19.105469 15.523438 C 19.066406 16.375 18.921875 16.835938 18.804688 17.144531 C 18.644531 17.550781 18.457031 17.839844 18.152344 18.144531 C 17.84375 18.453125 17.554688 18.640625 17.148438 18.796875 C 16.839844 18.917969 16.378906 19.058594 15.527344 19.097656 C 14.605469 19.140625 14.332031 19.148438 12 19.148438 C 9.671875 19.148438 9.394531 19.140625 8.472656 19.097656 C 7.625 19.058594 7.160156 18.917969 6.855469 18.796875 C 6.445312 18.640625 6.15625 18.453125 5.851562 18.144531 C 5.542969 17.839844 5.355469 17.550781 5.195312 17.144531 C 5.078125 16.835938 4.933594 16.375 4.894531 15.523438 C 4.855469 14.601562 4.847656 14.328125 4.847656 11.996094 C 4.847656 9.664062 4.855469 9.390625 4.894531 8.46875 C 4.933594 7.621094 5.078125 7.15625 5.195312 6.851562 C 5.355469 6.441406 5.542969 6.152344 5.851562 5.847656 C 6.15625 5.539062 6.445312 5.351562 6.855469 5.191406 C 7.160156 5.074219 7.625 4.929688 8.472656 4.890625 C 9.277344 4.855469 9.589844 4.84375 11.21875 4.84375 Z M 16.660156 6.292969 C 16.082031 6.292969 15.613281 6.761719 15.613281 7.339844 C 15.613281 7.917969 16.082031 8.390625 16.660156 8.390625 C 17.238281 8.390625 17.707031 7.917969 17.707031 7.339844 C 17.707031 6.761719 17.238281 6.292969 16.660156 6.292969 Z M 12 7.519531 C 9.527344 7.519531 7.519531 9.523438 7.519531 12 C 7.519531 14.476562 9.527344 16.480469 12 16.480469 C 14.476562 16.480469 16.480469 14.476562 16.480469 12 C 16.480469 9.523438 14.476562 7.519531 12 7.519531 Z M 12 9.089844 C 13.605469 9.089844 14.910156 10.394531 14.910156 12 C 14.910156 13.605469 13.605469 14.910156 12 14.910156 C 10.394531 14.910156 9.089844 13.605469 9.089844 12 C 9.089844 10.394531 10.394531 9.089844 12 9.089844 Z M 12 9.089844 "/></g>`,
    // Instagram Black And White
    "instagram_black_white": `<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 7.679688 1.441406 C 4.238281 1.441406 1.441406 4.238281 1.441406 7.679688 L 1.441406 16.320312 C 1.441406 19.761719 4.238281 22.558594 7.679688 22.558594 L 16.320312 22.558594 C 19.761719 22.558594 22.558594 19.761719 22.558594 16.320312 L 22.558594 7.679688 C 22.558594 4.238281 19.761719 1.441406 16.320312 1.441406 Z M 7.679688 2.398438 L 16.320312 2.398438 C 19.242188 2.398438 21.601562 4.757812 21.601562 7.679688 L 21.601562 16.320312 C 21.601562 19.242188 19.242188 21.601562 16.320312 21.601562 L 7.679688 21.601562 C 4.757812 21.601562 2.398438 19.242188 2.398438 16.320312 L 2.398438 7.679688 C 2.398438 4.757812 4.757812 2.398438 7.679688 2.398438 Z M 17.761719 5.28125 C 17.230469 5.28125 16.800781 5.710938 16.800781 6.238281 C 16.800781 6.769531 17.230469 7.199219 17.761719 7.199219 C 18.289062 7.199219 18.71875 6.769531 18.71875 6.238281 C 18.71875 5.710938 18.289062 5.28125 17.761719 5.28125 Z M 12 6.71875 C 9.089844 6.71875 6.71875 9.089844 6.71875 12 C 6.71875 14.910156 9.089844 17.28125 12 17.28125 C 14.910156 17.28125 17.28125 14.910156 17.28125 12 C 17.28125 9.089844 14.910156 6.71875 12 6.71875 Z M 12 7.679688 C 14.390625 7.679688 16.320312 9.609375 16.320312 12 C 16.320312 14.390625 14.390625 16.320312 12 16.320312 C 9.609375 16.320312 7.679688 14.390625 7.679688 12 C 7.679688 9.609375 9.609375 7.679688 12 7.679688 Z M 12 7.679688 "/></g>`,

    // Twitter
    "twitter_original": `<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(11.372549%,60.784314%,94.117647%);fill-opacity:1;" d="M 21.480469 5.027344 C 21.492188 5.242188 21.492188 5.453125 21.492188 5.667969 C 21.492188 12.210938 16.578125 19.757812 7.589844 19.757812 L 7.589844 19.753906 C 4.933594 19.757812 2.332031 18.984375 0.0976562 17.53125 C 0.484375 17.578125 0.871094 17.601562 1.261719 17.605469 C 3.460938 17.605469 5.597656 16.859375 7.328125 15.480469 C 5.238281 15.441406 3.40625 14.058594 2.765625 12.042969 C 3.496094 12.183594 4.25 12.15625 4.96875 11.957031 C 2.691406 11.488281 1.050781 9.460938 1.050781 7.105469 L 1.050781 7.042969 C 1.730469 7.425781 2.488281 7.636719 3.269531 7.660156 C 1.121094 6.207031 0.457031 3.3125 1.753906 1.050781 C 4.238281 4.144531 7.898438 6.023438 11.828125 6.222656 C 11.433594 4.503906 11.972656 2.699219 13.242188 1.492188 C 15.210938 -0.382812 18.304688 -0.285156 20.15625 1.707031 C 21.25 1.488281 22.300781 1.082031 23.257812 0.503906 C 22.894531 1.652344 22.132812 2.625 21.109375 3.242188 C 22.078125 3.128906 23.027344 2.863281 23.917969 2.464844 C 23.261719 3.460938 22.433594 4.328125 21.480469 5.027344 Z M 21.480469 5.027344 "/></g>`,

    // Linkedin
    "linkedin_original": `<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,40%,60%);fill-opacity:1;" d="M 0.132812 1.832031 C 0.132812 0.890625 0.917969 0.132812 1.882812 0.132812 L 22.089844 0.132812 C 23.058594 0.132812 23.839844 0.890625 23.839844 1.832031 L 23.839844 22.144531 C 23.839844 23.082031 23.058594 23.839844 22.089844 23.839844 L 1.882812 23.839844 C 0.917969 23.839844 0.132812 23.082031 0.132812 22.144531 Z M 0.132812 1.832031 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 5.527344 7.8125 C 6.777344 7.8125 7.554688 6.988281 7.554688 5.960938 C 7.53125 4.910156 6.777344 4.113281 5.550781 4.113281 C 4.328125 4.113281 3.527344 4.910156 3.527344 5.960938 C 3.527344 6.988281 4.304688 7.8125 5.503906 7.8125 Z M 5.527344 7.8125 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.320312 19.980469 L 7.320312 9.273438 L 3.738281 9.273438 L 3.738281 19.980469 Z M 7.320312 19.980469 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.300781 19.980469 L 12.882812 19.980469 L 12.882812 14 C 12.882812 13.679688 12.90625 13.359375 13 13.132812 C 13.257812 12.492188 13.847656 11.832031 14.835938 11.832031 C 16.132812 11.832031 16.652344 12.8125 16.652344 14.25 L 16.652344 19.980469 L 20.230469 19.980469 L 20.230469 13.839844 C 20.230469 10.550781 18.464844 9.023438 16.109375 9.023438 C 14.175781 9.023438 13.328125 10.09375 12.859375 10.824219 L 12.882812 10.824219 L 12.882812 9.273438 L 9.300781 9.273438 C 9.347656 10.277344 9.300781 19.980469 9.300781 19.980469 Z M 9.300781 19.980469 "/></g>`,

    // Telegram
    "telegram_original": `<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(16.078431%,71.372549%,96.470588%);fill-opacity:1;" d="M 12 2 C 6.476562 2 2 6.476562 2 12 C 2 17.523438 6.476562 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476562 17.523438 2 12 2 Z M 12 2 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.976562 7.5 L 15.101562 17.0625 C 15.101562 17.0625 15.023438 17.5 14.480469 17.5 C 14.191406 17.5 14.042969 17.363281 14.042969 17.363281 L 9.984375 13.996094 L 8 12.996094 L 5.453125 12.320312 C 5.453125 12.320312 5 12.1875 5 11.8125 C 5 11.5 5.464844 11.351562 5.464844 11.351562 L 16.125 7.117188 C 16.125 7.117188 16.449219 7 16.6875 7 C 16.832031 7 17 7.0625 17 7.25 C 17 7.375 16.976562 7.5 16.976562 7.5 Z M 16.976562 7.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(69.019608%,74.509804%,77.254902%);fill-opacity:1;" d="M 11.5 15.253906 L 9.785156 16.941406 C 9.785156 16.941406 9.710938 16.996094 9.613281 17 C 9.578125 17 9.542969 16.996094 9.503906 16.976562 L 9.984375 13.996094 Z M 11.5 15.253906 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(81.176471%,84.705882%,86.27451%);fill-opacity:1;" d="M 14.949219 9.097656 C 14.863281 8.988281 14.707031 8.96875 14.597656 9.050781 L 8 13 C 8 13 9.054688 15.945312 9.214844 16.457031 C 9.375 16.964844 9.503906 16.976562 9.503906 16.976562 L 9.984375 13.996094 L 14.902344 9.449219 C 15.011719 9.363281 15.03125 9.207031 14.949219 9.097656 Z M 14.949219 9.097656 "/></g>`,

    // Reddit
    "reddit_original": `<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,27.058824%,0%);fill-opacity:1;" d="M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 19.984375 12.113281 C 19.984375 11.140625 19.195312 10.367188 18.238281 10.367188 C 17.765625 10.367188 17.335938 10.554688 17.019531 10.855469 C 15.820312 9.996094 14.175781 9.4375 12.34375 9.367188 L 13.144531 5.621094 L 15.75 6.175781 C 15.777344 6.835938 16.320312 7.363281 16.992188 7.363281 C 17.679688 7.363281 18.238281 6.808594 18.238281 6.121094 C 18.238281 5.433594 17.679688 4.875 16.992188 4.875 C 16.507812 4.875 16.078125 5.160156 15.875 5.578125 L 12.972656 4.960938 C 12.886719 4.945312 12.800781 4.960938 12.742188 5.003906 C 12.671875 5.046875 12.628906 5.117188 12.617188 5.203125 L 11.726562 9.382812 C 9.867188 9.4375 8.195312 9.996094 6.980469 10.871094 C 6.664062 10.570312 6.234375 10.382812 5.761719 10.382812 C 4.789062 10.382812 4.015625 11.171875 4.015625 12.128906 C 4.015625 12.84375 4.445312 13.445312 5.046875 13.71875 C 5.019531 13.886719 5.003906 14.058594 5.003906 14.246094 C 5.003906 16.933594 8.136719 19.125 12 19.125 C 15.863281 19.125 18.996094 16.949219 18.996094 14.246094 C 18.996094 14.074219 18.980469 13.886719 18.953125 13.71875 C 19.554688 13.445312 19.984375 12.828125 19.984375 12.113281 Z M 7.996094 13.359375 C 7.996094 12.671875 8.550781 12.113281 9.238281 12.113281 C 9.925781 12.113281 10.484375 12.671875 10.484375 13.359375 C 10.484375 14.046875 9.925781 14.605469 9.238281 14.605469 C 8.550781 14.617188 7.996094 14.046875 7.996094 13.359375 Z M 14.960938 16.664062 C 14.101562 17.523438 12.472656 17.578125 12 17.578125 C 11.515625 17.578125 9.882812 17.507812 9.039062 16.664062 C 8.910156 16.535156 8.910156 16.335938 9.039062 16.207031 C 9.167969 16.078125 9.367188 16.078125 9.496094 16.207031 C 10.039062 16.75 11.183594 16.933594 12 16.933594 C 12.816406 16.933594 13.972656 16.75 14.503906 16.207031 C 14.632812 16.078125 14.832031 16.078125 14.960938 16.207031 C 15.074219 16.335938 15.074219 16.535156 14.960938 16.664062 Z M 14.730469 14.617188 C 14.046875 14.617188 13.488281 14.058594 13.488281 13.375 C 13.488281 12.6875 14.046875 12.128906 14.730469 12.128906 C 15.417969 12.128906 15.976562 12.6875 15.976562 13.375 C 15.976562 14.046875 15.417969 14.617188 14.730469 14.617188 Z M 14.730469 14.617188 "/></g>`,

  }

  static #open = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">`
  static #close = `</svg>`

  static use(name){
    // Keeps SVG Body
    let body = "";

    // Invalid Name Value
    if(!!name === false) body = SVG.#all["block_circle"];

    // If Exists
    if(name in SVG.#all) body = SVG.#all[name];

    // Fallback SVG
    else body = SVG.#all["block_circle"];

    // Build And Return
    return SVG.#open + body + SVG.#close;

  }

  static set(SVGs){
    if(!!SVGs === false) return;

    for(const svg in SVGs) SVG.#all[svg] = SVGs[svg];

  }

}

// Make SVG Usable W/O Importing It
window.SVG = SVG;
