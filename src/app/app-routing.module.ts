import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {DirectiveComponent} from './pages/directive/directive.component';
import {ExamplejsonComponent} from './pages/examplejson/examplejson.component';


const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'examplejson', component: ExamplejsonComponent},
    {path: 'directive', component: DirectiveComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
