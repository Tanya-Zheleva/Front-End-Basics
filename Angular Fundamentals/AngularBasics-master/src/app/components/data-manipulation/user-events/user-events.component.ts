import { Component, HostListener } from "@angular/core";

@Component({
    selector: "user-events",
    templateUrl: "./user-events.component.html",
    styleUrls: ["./user-events.component.scss"]
})
export class UserEventsComponent {
    public lastPressedKey: string = '';
    public isRedSquareHovered: boolean = false;

    public onClick(): void {
        alert("You clicked the wrong button! :)");
    }

    @HostListener('window: keydown', ['$event'])
    public keyEvent(event: KeyboardEvent): void {
        this.lastPressedKey = event.keyCode.toString();
    }
    
    public onMouseHover(): void {
        this.isRedSquareHovered = true;
    }

    public onMouseLeave(): void {
        this.isRedSquareHovered = false;
    }
}