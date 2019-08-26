import { Person } from './person';

// Named Export:
export function promote() {}

// Default Export:
export default class Teacher extends Person { //default = tanpa {}
    constructor(name, degree) {
      super(name);
      this.degree = degree;
    }
  
    teach() {
      console.log('teach');
    }
  }