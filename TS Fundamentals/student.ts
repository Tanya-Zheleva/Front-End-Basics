export class Student {
    private _firstName: string;
    private _lastName: string;
    private _id: number;
    private _submittedHomeworks: number;
    private _score: number;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._id = this._firstName.length % 9;
        this._submittedHomeworks = 0;
        this._score = 0;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (!/^[A-Z][a-z]*$/g.test(value)) {
            throw 'Invalid student first name';
        }

        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        if (!/^[A-Z][a-z]*$/g.test(value)) {
            throw 'Invalid studnet last name';
        }

        this._lastName = value;
    }

    get id(): number {
        return this._id;
    }

    get submittedHomeworks(): number {
        return this._submittedHomeworks;
    }

    get score(): number {
        return this._score;
    }

    addScore(score: number): void {
        this._score += score;
    }

    submitHomework(): void {
        this._submittedHomeworks++;
    }

    toString(): string {
        return `{firstName: ${this.firstName}, lastName: ${this.lastName}, id: ${this.id}},  hws: ${this.submittedHomeworks}, score: ${this.score}`;
    }
}