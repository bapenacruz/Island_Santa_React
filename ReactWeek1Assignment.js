class Student {
    constructor(name,email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
    }
}

class Bootcamp {
    constructor(name,level, students=[]) {
    this.name = name;
    this.level = level;
    this.students = students;
    }
    registerStudent(studentToRegister){
        if(this.students.filter(s => s === studentToRegister.email).length){
            console.log(`This ${studentToRegister.name} has already been registered to the bootcamp Web Dev Fundamentals.`);
        }
        else{
            this.students.push(studentToRegister.email);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        }
        return 
    }
}

/* class Bootcamp {
    constructor(name,level, students=[]) {
    this.name = name;
    this.level = level;
    this.students = students;
    }
    registerStudent(studentToRegister){
        if(this.students.indexOf(studentToRegister.email)>-1){
            console.log(`This ${studentToRegister.name} has already been registered to the bootcamp Web Dev Fundamentals.`);
        }
        else{
            this.students.push(studentToRegister.email);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        }
        return 
    }
} */