import { Component } from "@angular/core";

@Component({
    templateUrl: "./directives-demo.component.html"
})
export class DirectivesDemoComponent {
    public tooltipText: string = 'Im the tooltip this text deserves';
    public position: string = 'left';
}
