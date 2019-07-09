import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "custom-input",
    templateUrl: "./custom-input.comoponent.html"
})
export class CustomInputComponent {
     @Input()
     public set inputValue(value: string) {
         this._inputValue = value;
         this.inputValueChange.emit(this._inputValue);
     }

     public get inputValue(): string {
         return this._inputValue;
     }

    @Output()
    public inputValueChange = new EventEmitter<string>();   

    private _inputValue: string;
}
