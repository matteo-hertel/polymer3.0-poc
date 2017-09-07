// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement }
    from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the HTMLConsole symbol from the module
export class HTMLConsole extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `<pre>[[fullName]]</pre>`
    }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }

    //properties, observers, etc. are identical to 2.x
    static get properties() {
        return {
            first: {
                type: String,
                value: "Jon"
            },

            last: {
                type: String,
                value: "Snow"
            },

            fullName: {
                type: String,
                // when `first` or `last` changes `computeFullName` is called once
                // and the value it returns is stored as `fullName`
                computed: 'computeFullName(first, last)'
            }
        }
    }

    computeFullName(first, last) {
        return first + ' ' + last;
    }

}

customElements.define('html-console', HTMLConsole);