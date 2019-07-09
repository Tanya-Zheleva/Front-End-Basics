import { Component } from "@angular/core";
import { RouterLinksEnum } from "./enums";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public routerLinks = RouterLinksEnum;
}
