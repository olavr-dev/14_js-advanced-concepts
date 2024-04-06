// Create an object and store it in a custom variable. This is a object literal.
const job = { title: 'Developer', location: 'New York', salary: 50000 };

// Create a build in object with the new keyword. Date() is a blueprint.
new Date().toISOString();

console.log(new Date().toISOString());

// Creating your own blueprint
class Job {
  constructor(title, location, salary) {
    // this refers to the object that will be created
    this.title = title;
    this.location = location;
    this.salary = salary;
  }
}

// You can use this blueprint to create new instances with the new keyword
const developer = new Job('Web Developer', 'Sandnes', 750000);
const cook = new Job('Cook', 'Stavanger', 450000);
console.log(developer);
console.log(cook);
