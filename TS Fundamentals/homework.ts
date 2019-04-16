export class Homework {
    private _content: string;

    constructor(content: string) {
        this.content = content;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get id(): number {
        return this._content.length % 7;
    }
}