import {Component, OnInit, ViewChildren} from '@angular/core';
import {NavbarService} from '../../service/navbar.service';
import {ChangetextDirective} from '../../directive/changetext.directive';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
    @ViewChildren(ChangetextDirective) directives;
    defaulttext: string;

    constructor(public nav: NavbarService) {
        this.nav.setVisible(true);
    }

    ngOnInit() {
        this.defaulttext = 'default text';
    }

    onClick() {
        this.directives.first.clicked();
    }
}
