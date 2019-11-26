import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ExamplejsonComponent} from './pages/examplejson/examplejson.component';
import {DirectiveComponent} from './pages/directive/directive.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSelectModule, MatSortModule,
    MatListModule, MatTableModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {NavbarComponent} from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {ChangetextDirective} from './directive/changetext.directive';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        ExamplejsonComponent,
        DirectiveComponent,
        NavbarComponent,
        ChangetextDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        HttpClientModule,
        MatSortModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
