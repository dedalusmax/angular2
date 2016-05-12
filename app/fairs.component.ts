import {Component, OnInit} from 'angular2/core';
import {Fair, FairService} from './fairs.service';
 
@Component({
    selector: 'fairs',
    template: `
    <h2>Sajmovi</h2>
    {{ title }}
    <ul>
        <li *ngFor="#fair of fairs">
        {{ fair.name }} {{ fair.location }}
        </li>
    </ul>
    `,
    providers: [FairService]
})
export class FairsComponent implements OnInit {
    fairs: Fair[];
    
    constructor(private fairService: FairService) {}
    
    ngOnInit() {
        this.fairService.getFairs().then(fairs => this.fairs = fairs);
    }
}