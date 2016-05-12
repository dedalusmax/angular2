import {Component} from 'angular2/core';
import {ToysComponent} from './toys.component';
import {FairsComponent} from './fairs.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Domaća radinost Kiki Art</h1>
        <toys></toys>
        <fairs></fairs>
    `,
    directives: [ToysComponent, FairsComponent]
})
export class AppComponent { }