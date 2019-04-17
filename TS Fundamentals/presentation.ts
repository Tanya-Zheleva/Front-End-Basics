import { Homework } from "./homework";

export class Presentation {
    private _title: string;
    private _homework: Homework;

    constructor(title: string, homework: Homework) {
        this.title = title;
        this._homework = homework;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        if (!/^(\w\s?){1,}$/g.test(value)) {
            throw 'Invlid presentation title';
        }

        this._title = value;
    }

    public get homework(): Homework {
        return this._homework;
    }
}