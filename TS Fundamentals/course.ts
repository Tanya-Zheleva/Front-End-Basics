import { Presentation } from "./presentation";
import { Student } from "./student";

export class Course {
    private _title: string;
    private _presentations: Presentation[];
    private _students: Student[];

    constructor() {
        this._presentations = new Array();
        this._students = new Array();
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        if (!/^(\w\s?){1,}$/g.test(value)) {
            throw 'Invlid course title';
        }

        this._title = value;
    }

    public get presentations(): Presentation[] {
        return this._presentations;
    }

    public get students(): Student[] {
        return this._students;
    }

    public init(title: string, presentations: Presentation[]): void { 
        this.title = title;
        this._presentations = presentations;
    }

    public addStudent(fullName: string): number {
        let [firstName, lastName] = fullName.split(/\s+/g);
        let student: Student = new Student(firstName, lastName);
        this._students.push(student);

        return student.id;
    }

    public getAllStudents(): string[] {
        return this._students.map(x => x.toString());
    }

    public submitHomework(studentID: number, homeworkID: number): void {
        if (!this._students.some(x => x.id === studentID)) {
            throw `No student with id ${studentID} found`;
        }

        if (!this._presentations.some(x => x.homework.id === homeworkID)) {
            throw `No homework with id ${homeworkID} found`;
        }

        let student: Student = this._students.filter(x => x.id === studentID)[0];
        student.submitHomework();
    }

    public pushExamResults(results: object[]): void {
        let allKeys: string[] = results.map(x => Object.keys(x)[0]);
        let uniqueKeys: string[] = this.extractUnique(allKeys);

        if (allKeys.length !== uniqueKeys.length) {
            throw 'Each student id must be used only once';
        }

        results.forEach((item, index) => {
            let key: string = allKeys[index];

            if (!this._students.some(x => `${x.id}` === key)) {
                throw `No student with id ${key} found`;
            }

            if (typeof item[key] !== 'number') {
                throw 'Exam scores must be numbers';
            }
        });

        for (let i = 0; i < results.length; i++) {
            const current: object = results[i];
            const key: string = allKeys[i];

            let student: Student = this._students.filter(x => `${x.id}` === key)[0];
            student.addScore(current[key]);
        }
    }

    public getTopStudents(): string[] {
        const studentsToBeListed: number = 10;
        const examPercent: number = 0.75;

        let homeworks: number = this._presentations.length;
        let studentsToShow: number = this._students.length <= studentsToBeListed ?
            this._students.length :
            studentsToBeListed;

        let sorted = this._students
            .sort((a, b) => {
                let firstScore: number = Math.floor((a.score * examPercent) + (a.submittedHomeworks / homeworks));
                let secondScore: number = Math.floor((b.score * examPercent) + (b.submittedHomeworks / homeworks));

                return secondScore - firstScore;
            })
            .map(x => `${x.firstName} ${x.lastName}, exam score: ${Math.floor((x.score * examPercent) + (x.submittedHomeworks / homeworks))}`)
            .slice(0, studentsToShow);

        return sorted;
    }

    private extractUnique(keys: string[]): string[] {
        let unique: string[] = new Array();

        for (let i = 0; i < keys.length; i++) {
            if (!unique.some(x => x === keys[i])) {
                unique.push(keys[i]);
            }
        }

        return unique;
    }
}