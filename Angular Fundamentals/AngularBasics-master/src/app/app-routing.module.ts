import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataManipulationComponent } from "./components/pages/data-manipulation/data-manipulation.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { RouterLinksEnum } from "./enums";
import { AnimalsComponent } from "./components/pages/animals/animals.component";
import { DirectivesDemoComponent } from "./components/pages/directives-demo/directives-demo.component";
import { PipesDemoComponent } from "./components/pages/pipes-demo/pipes-demo.component";
import { WeatherComponent } from './components/pages/weather/weather.component';
import { FormPageComponent } from './components/pages/form-page/form-page.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: RouterLinksEnum.home,
        pathMatch: "full"
    },
    {
        path: RouterLinksEnum.home,
        component: HomeComponent
    },
    {
        path: RouterLinksEnum.animals,
        component: AnimalsComponent
    },
    {
        path: RouterLinksEnum.datamanipulation,
        component: DataManipulationComponent
    },
    {
        path: RouterLinksEnum.directives,
        component: DirectivesDemoComponent
    },
    {
        path: RouterLinksEnum.pipes,
        component: PipesDemoComponent
    },
    {
        path: RouterLinksEnum.weather,
        component: WeatherComponent
    },
    {
        path: RouterLinksEnum.form,
        component: FormPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
