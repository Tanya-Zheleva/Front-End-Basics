import { Presentation } from './presentation';
import { Homework } from './homework';
import { Course } from './course';

try {
    let homeworks: Homework[] = new Array();

    homeworks.push(new Homework('H1'));
    homeworks.push(new Homework('H662'));
    homeworks.push(new Homework('H11'));
    homeworks.push(new Homework('H'));

    let presentations: Presentation[] = new Array();

    for (let i = 0; i < 4; i++) {
        presentations.push(new Presentation('T' + i + 1, homeworks[i]));     
    }

    let course: Course = new Course();
    course.init('test', presentations);
    let students = ['Petar Mihailov', 'Ivan Kostadinov', 'Mihaela Ivanova', 'Ina Georgieva'];

    students.forEach(x => course.addStudent(x));
    course.submitHomework(5, 2);
    course.submitHomework(3, 1);

    let examResults = [
        { 3: 21 },
        { 5: 15 },
        { 7: 20 },
        { 4: 10 },
    ];
    
    course.pushExamResults(examResults);
    
    console.log(course.getAllStudents());
    console.log(course.getTopStudents());
} catch (error) {
    console.log(error);
}