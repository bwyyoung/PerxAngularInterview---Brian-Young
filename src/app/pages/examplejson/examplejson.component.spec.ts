import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExamplejsonComponent} from './examplejson.component';

describe('ExamplejsonComponent', () => {
    let component: ExamplejsonComponent;
    let fixture: ComponentFixture<ExamplejsonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExamplejsonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExamplejsonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
