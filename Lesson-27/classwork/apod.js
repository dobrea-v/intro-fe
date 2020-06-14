import { dateFormatter, renderApp, addElement } from './utils.js';

export function Apod(id){
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);
    this.dateFormatter = dateFormatter;
    this.renderApp = renderApp;
    this.addElement = addElement;
    this.addElement();
    body.append(this.container);
}
