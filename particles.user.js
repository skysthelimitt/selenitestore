// ==UserScript==
// @name         anti-particlesjs
// @namespace    http://skysthelimit.dev/
// @version      2024-10-10
// @description  no more particles js!!
// @match        *://*/*
// @icon         https://js-tutorial.com/upload/images/orther/particles/particles.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("particles-js").style.display = "none";
})();
