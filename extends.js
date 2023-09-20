class TeamMember{
    name;
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}



class instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'

    constructor(name, location){
        super(name, location);
    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Create Quize for the last module ${module}`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;

    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }

    developFeature(feature){
        console.log(`Please develop the feature ${feature}`);
    }
    release(version){
        console.log(`Please release the version ${version}`);
    }
}



class JobPlacement extends TeamMember {
    designation = 'Job Placements comandos'
    team = 'Job Placements Team'
    region;

    constructor(name, location, region){
        super (name, location)
        this.region = region;
    }

    provideResume(candidateName){
        console.log(`Please send the resume of the ${candidateName}`);
    }
    batch(passingBatch){
        console.log(`The Candidate was from batch ${passingBatch}`);
    }
}

const nafisa = new JobPlacement('Nafisa', 'Dhaka', 'Bangladesh');
console.log(nafisa);
nafisa.provideResume('Razzak Malik');