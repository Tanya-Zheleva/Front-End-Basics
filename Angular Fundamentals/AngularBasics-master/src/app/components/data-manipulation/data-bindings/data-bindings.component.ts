import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./data-bindings.component.html"
})
export class DataBindingComponent {
    public firstNumber: number = 0;
    public secondNumber: number = 0;
    public operator: string = '+';

    public getResult(): number {
        switch (this.operator) {
            case '+':
                return +this.firstNumber + +this.secondNumber;
            case '-':
                return +this.firstNumber - +this.secondNumber;
            case '*':
                return +this.firstNumber + +this.secondNumber;
            case '/':
                return +this.firstNumber / +this.secondNumber;
            default:
                return 0;
        }
    }
}
