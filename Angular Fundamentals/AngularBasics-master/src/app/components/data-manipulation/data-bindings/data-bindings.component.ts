import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewInit } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./data-bindings.component.html"
})
export class DataBindingComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private onInitCalls: number = 1;
    private afterInitCalls: number = 1;
    private onChangesCalls: number = 1;
    private onDestroyCalls: number = 1;

    public firstNumber: number = 0;
    public secondNumber: number = 0;
    public operator: string = '+';

    public ngOnInit(): void {
        console.log('In ngOnInit hook called in main component: ' + this.onInitCalls++);    
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('In ngOnChanges hook called in main component: ' + this.onChangesCalls++);  
        let  changeLog: string[] = [];

        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
          }

          console.log('Changes made: ' + changeLog);
    }

    public ngAfterViewInit(): void {
        console.log('In ngAfterViewInit hook called in main component: ' + this.afterInitCalls++); ;
    }

    public ngOnDestroy(): void {
        console.log('In ngOnDestroy hook called in main component: ' + this.onDestroyCalls++);
    }

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
