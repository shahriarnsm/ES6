// in es6 it called syntactic suger
class instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Create Quize for the last module ${module}`);
    }
}

const shahriar = new instructor('Shahriar', 'Dhaka');
console.log(shahriar);
shahriar.startSupportSession('10:00 pm');
shahriar.createQuiz(12);


const shahnaz = new instructor('Shahnaz', 'Cantonment');
console.log(shahnaz);
shahnaz.startSupportSession('5:00 pm');
shahnaz.createQuiz(35);

