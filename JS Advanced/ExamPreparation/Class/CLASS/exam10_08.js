class Triathlon {
    constructor(name) {
    this.competitionName = name;
    this.participants = {};
    this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender) {
       if(this.participants.hasOwnProperty(participantName)) {
          return `${participantName} has already been added to the list`;
       } else {
          this.participants[participantName] = participantGender; 
        
        return `A new participant has been added - ${participantName}`;
       }
    }

    completeness (participantName, condition) {
        if(!this.participants.hasOwnProperty(participantName)) {
          return `${participantName} is not in the current participants list`;
        }

        if(condition < 30) {
        throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        let completedCount = Math.floor(condition / 30);
        if(completedCount == 1 || completedCount == 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;

        } else {
          let sex = this.participants[participantName];
            let obj = {
               participantName,
               participantGender: sex
            }
            this.listOfFinalists.push(obj);

            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding (participantName) {
     if(!this.listOfFinalists.some(x => x.participantName == participantName)) {
         return `${participantName} is not in the current finalists list`;

     } else {
         return `${participantName} was rewarded with a trophy for his performance`;

     }
    }

    showRecord (criteria) {
        //let [participantName, participantGender] = Object.values(this.listOfFinalists);
       if(this.listOfFinalists.length === 0) {
           return `There are no finalists in this competition`;
        }
        
        let result;
          for(let el of this.listOfFinalists) {
            [participantName, participantGender] = Object.values(el);
            result = `List of all ${competitionName} finalists:\n`;
            result += `${participantName}\n`;
            return result;
          }
           

        if(participantGender !== criteria) {
            return `There are no ${participantGender}'s that finished the competition`;
        } else {
            return `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;

        }
    }
}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));


const contest = new Triathlon("Dynamos");
console.log(contest.showRecord("all"));

