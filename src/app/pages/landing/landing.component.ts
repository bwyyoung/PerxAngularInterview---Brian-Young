import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../service/navbar.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor(public nav: NavbarService) {
    }

    ngOnInit() {
        this.nav.setVisible(false);
    }

    onClickProceed() {
    }
}
