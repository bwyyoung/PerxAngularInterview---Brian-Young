import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    visible: boolean;

    constructor() {
        this.visible = false;
    }

    public setVisible(isvisible: boolean) {
        this.visible = isvisible;
    }
}
