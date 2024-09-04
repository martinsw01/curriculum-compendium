/**
 * TikZJax uses the inner html of a script tap of type "text/tikz" to render a tikz image.
 * However, inside closed admonitions, the inner html of the script tags get altered
 * after processed by the Markdown parser.
 * To solve this, the tikz code is written inside a div tag with class "cc-tikzjax" and
 * script tags replace them later on the client side by this script.
 */


"use strict"

/**
 * Double back-ticks marking a new line in TikZ code are converted to a single back-tick
 * for the case of a closed admonition, and is converted to a single back-tick followed by
 * a new line (\n) for the case of an open admonition.
 */
function formatTikzCode(tikzCode) {
    return tikzCode
        .replaceAll(" \\ " , " \\\\ ")
        .replaceAll(" \\\n", " \\\\ ");
}

/**
 * Creates a script element with type "text/tikz" and inner html set to the tikz code
 * inside the tikzElement.
 */
function createTikzjaxScriptElement(tikzElement) {
    let tikzCode = formatTikzCode(tikzElement.innerText)
    let scriptElement = document.createElement("script");
    scriptElement.type = "text/tikz";
    scriptElement.innerHTML = tikzCode
    console.log(tikzCode)
    return scriptElement;
}

function replaceTikzjaxElement(tikzjaxElement, scriptElement) {
    tikzjaxElement.parentNode.replaceChild(scriptElement, tikzjaxElement);
}

function replaceAllTikzjaxElements(tikzjaxElements) {
    Array.from(tikzjaxElements).forEach((tikzjaxElement) => {
        let scriptElement = createTikzjaxScriptElement(tikzjaxElement);
        replaceTikzjaxElement(tikzjaxElement, scriptElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let tikzjaxElements = document.getElementsByClassName("cc-tikzjax");
    replaceAllTikzjaxElements(tikzjaxElements)
});
