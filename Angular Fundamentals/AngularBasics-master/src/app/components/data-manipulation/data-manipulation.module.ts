import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataBindingComponent } from "./data-bindings/data-bindings.component";
import { DisplayingDataComponent } from "./displaying-data/displaying-data.component";
import { UserEventsComponent } from "./user-events/user-events.component";
import { CustomInputComponent } from "./data-bindings/custom-input/custom-input.comoponent";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DataBindingComponent,
        DisplayingDataComponent,
        UserEventsComponent,
        CustomInputComponent
    ],
    imports: [FormsModule, CommonModule],
    exports: [
        DataBindingComponent,
        DisplayingDataComponent,
        UserEventsComponent,
        CommonModule
    ]
})
export class DataManipulationModule {}
