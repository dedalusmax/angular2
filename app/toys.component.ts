import {Component} from 'angular2/core';

@Component({
    selector: 'toys',
    template: `
        <h2>Igračke</h2>
        {{title}}
        <ul><li *ngFor="#toy of toys">{{toy}}</li></ul>
    `
})
export class ToysComponent {
    title = 'Ovo su igračke koje izrađujem:';
    toys = ["Krpena lutka", "Ginjol lutka", "Konjić na štapu"];        
}