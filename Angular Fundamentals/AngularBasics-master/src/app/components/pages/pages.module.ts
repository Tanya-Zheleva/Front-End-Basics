import { NgModule } from "@angular/core";
import { DataManipulationComponent } from "./data-manipulation/data-manipulation.component";
import { HomeComponent } from "./home/home.component";
import { AnimalsComponent } from "./animals/animals.component";
import { DataManipulationModule } from "../data-manipulation/data-manipulation.module";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";
import { WeatherComponent } from './weather/weather.component';
import { AnimalsModule } from '../animals/animals.module';
import { ClickDirective } from './directives-demo/click.directive';
import { TooltipDirective } from './directives-demo/tooltip.directive';
import { FormPageComponent } from './form-page/form-page.component';
import { FormDemoModule } from '../form/form-demo.module';

@NgModule({
    declarations: [
        DataManipulationComponent,
        HomeComponent,
        AnimalsComponent,
        DirectivesDemoComponent,
        PipesDemoComponent,
        WeatherComponent,
        ClickDirective,
        TooltipDirective,
        FormPageComponent
    ],
    imports: [ DataManipulationModule, AnimalsModule, FormDemoModule ],
    exports: []
})
export class PagesModule { }