import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, AfterViewInit, OnDestroy } from "@angular/core";

@Component({
    selector: "custom-input",
    templateUrl: "./custom-input.comoponent.html"
})
export class CustomInputComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    private afterInitCalls: number = 1;
    private onChangesCalls: number = 1;
    private onDestroyCalls: number = 1;

    private _inputValue: string;
    private onInitCalls: number = 1;

    @Output()
    public inputValueChange = new EventEmitter<string>();

    @Input()
    public set inputValue(value: string) {
        this._inputValue = value;
        this.inputValueChange.emit(this._inputValue);
    }

    public get inputValue(): string {
        return this._inputValue;
    }

    public ngOnInit(): void {
        console.log('In ngOnInit hook called in custom component: ' + this.onInitCalls++);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('In ngOnChanges hook called in custom component: ' + this.onChangesCalls++);
        let changeLog: string[] = [];

        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            
            changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }

        console.log('Changes made: ' + changeLog);
    }

    public ngAfterViewInit(): void {
        console.log('In ngAfterViewInit hook called in custom component: ' + this.afterInitCalls++);
    }

    public ngOnDestroy(): void {
        console.log('In ngOnDestroy hook called in custom component: ' + this.onDestroyCalls++);
    }
}
