import {Component} from 'angular2/core';
import {ToysComponent} from './toys.component';
import {FairsComponent} from './fairs.component';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/toys', name: 'Toys', component: ToysComponent },
    { path: '/fairs', name: 'Fairs', component: FairsComponent }
])
export class AppComponent {
    
    constructor(private router: Router) {}
    
    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
 }