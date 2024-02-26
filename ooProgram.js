// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    
    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10) {
        super();
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object
function intern() {
    const intern = new Worker();
    intern.name = "Bob";
    intern.age = 21;
    intern.energy = 110;
    intern.xp = 0;
    intern.hourlyWage = 10;

    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object
function manager() {
    const manager = new Worker();
    manager.name = "Alice";
    manager.age = 30;
    manager.energy = 120;
    manager.xp = 100;
    manager.hourlyWage = 30;

    manager.doSomethingFun();
    return manager;
}