export class Homework {
    private _content: string;

    constructor(content: string) {
        this.content = content;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }

    public get id(): number {
        return this._content.length % 7;
    }
}