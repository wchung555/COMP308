/// <reference path='_reference.ts' />

import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started..");

var person:Person = new Person("Bob");
person.speaks();

var student:Student = new Student("Bob1", 123456);
student.studies();
student.speaks();