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

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        if (!/^[A-Z][a-z]*$/g.test(value)) {
            throw 'Invalid student first name';
        }

        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        if (!/^[A-Z][a-z]*$/g.test(value)) {
            throw 'Invalid studnet last name';
        }

        this._lastName = value;
    }

    public get id(): number {
        return this._id;
    }

    public get submittedHomeworks(): number {
        return this._submittedHomeworks;
    }

    public get score(): number {
        return this._score;
    }

    public addScore(score: number): void {
        this._score += score;
    }

    public submitHomework(): void {
        this._submittedHomeworks++;
    }

    public toString(): string {
        return `{firstName: ${this.firstName}, lastName: ${this.lastName}, id: ${this.id}},  hws: ${this.submittedHomeworks}, score: ${this.score}`;
    }
}