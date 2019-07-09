import { Component } from "@angular/core";

@Component({
    templateUrl: "./pipes-demo.component.html"
})
export class PipesDemoComponent {
    public textToCapitalize: string = "iM a RealLy Weird TexT anD i neEd CapItaliZATion";
    public date = Date.now();
}
