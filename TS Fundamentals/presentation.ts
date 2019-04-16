import { Homework } from "./homework";

export class Presentation {
    private _title: string;
    private _homework: Homework;

    constructor(title: string, homework: Homework) {
        this.title = title;
        this._homework = homework;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (!/^(\w\s?){1,}$/g.test(value)) {
            throw 'Invlid presentation title';
        }

        this._title = value;
    }

    get homework(): Homework {
        return this._homework;
    }
}