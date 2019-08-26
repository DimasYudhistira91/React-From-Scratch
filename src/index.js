// // OBJECT

// const person = {
//   name: 'Dimas',
//   id: 12,
//   money: 100000,
//   walk() { console.log('Berjalan dengan 2 kaki') },
//   talk() { console.log('Talkless do more')}
// };

// person.talk();
// person.walk();

// const targetMember = 'money';
// person[targetMember] = '2000';


// console.log(`uang saya di saku tinggal ${person.money}`);


// // THIS

// const person = {
//   name: 'Dimas',
//   id: 12,
//   money: 100000,
//   walk() {
//     console.log('Berjalan dengan 2 kaki')
//   },
//   talk() {
//     console.log(this)
//   }
// };

// person.talk();
// const talk = person.talk.bind(person);
// talk();


// // ARROW FUNCTION

// function
// const square = function(number) {
//   return number * number;
// }

// // arrow function
// const square2 = number => number * number;
// console.log(square2(5));

// // contoh lain
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: false },
//   { id: 3, isActive: true },
// ];

// // function biasa
// // const activeJobs = jobs.filter( function(job) { return job.isActive } );

// // arrow function
// const activeJobs = jobs.filter( job => job.isActive );
// console.log(activeJobs);


// // ARROW FUNCTION AND THIS

// const person = {
//   talk() {
//     var self = this;
//     setTimeout( () => {
//       console.log('this', this);
//     }, 2000);
//   }
// };

// person.talk();

// // Arrow function tidak bisa digunakan untuk binding THIS


// // Array.map Method

// const colors = ['red', 'green', 'blue'];

// // colors.map(function(color) {
// //   return '<li>' + color + '</li>';
// // })

// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);


// // OBJECT DESTRUCTURING

// const address = {
//   street: 'jl. kancil',
//   city: 'cilacap',
//   country: 'zimbabwe'
// };

// // // cara ribet:
// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// // cara simple:
// const { street, city, country } = address;

// console.log(street);


// // SPREAD OPERATOR

// const first = [1 ,2 ,3];
// const second = [4, 5 ,6];

// // const combined = first.concat(second);

// // const combined = [...first, 'a', ...second, 'b'];
// // console.log(combined);

// // Clone:
// const clone = [...first];
// console.log(first);
// console.log(clone);

// // Contoh kompleks:
// const first = { name: 'dimas' };
// const second = { job: 'Instructor' };

// const combined = { ...first, ...second, location: 'Indonesia' };
// console.log(combined);

// // clone:
// const clone = { ...first};
// console.log(first);
// console.log(clone);


// CLASSES

// // variabel biasa:
// const person = {
//   name: 'Dimas',
//   walk() {
//   console.log('walk');
//   }
// };

// // class:
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log('walk');
//   }
// }

// // const person = new Person('Dimas');


// // INHERITANCE

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log('teach');
//   }
// }

// const teacher = new Teacher('Yudhist', 'S1');


// MODULES

import Teacher, {promote} from './teacher';
// import React, { Component } from 'react';

// default -> import ... from '...';
// named -> import ... from "...";

const teacher = new Teacher('Yudhis', 's1');
teacher.teach();