import {Component, OnInit} from 'angular2/core';
import {Fair, FairService} from './fairs.service';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
 
@Component({
    selector: 'fairs',
    template: `
    <h2>Sajmovi</h2>
    {{ title }}
    <ul>
        <li *ngFor="#fair of fairs" (click)="onSelect(fair)">
        {{ fair.name }} {{ fair.location }}
        </li>
    </ul>
    `,
    providers: [FairService]
})
export class FairsComponent implements OnInit {
    fairs: Fair[];
    
    constructor(private fairService: FairService, private router: Router) {}
    
    ngOnInit() {
        this.fairService.getFairs().then(fairs => this.fairs = fairs);
    }
    
    onSelect(fair) {
        this.router.navigate(['FairDetail', { id: fair.id }]);
    }
}