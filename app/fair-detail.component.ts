import {Component, OnInit}  from 'angular2/core';
import {Fair, FairService} from './fairs.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
    templateUrl : 'app/fair-detail.component.html',
    providers: [FairService]
})
export class FairDetailComponent implements OnInit {
    fair: Fair;
    
    constructor(private router: Router,
        private routeParams: RouteParams, private fairService: FairService) {}

    ngOnInit() {
        let id = this.routeParams.get('id');
        this.fairService.getFair(id).then(fair => this.fair = fair);
    }        
    
    gotoFairs() {
        this.router.navigate(['Fairs']);
        // window.history.back();
    }
}