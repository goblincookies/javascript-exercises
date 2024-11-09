
const findTheOldest = function( people ) {

    let oldest = {
        name:"",
        age:0,
      }

    let birth = 0;
    let death = 0;
    let age = 0;

    people.forEach( person => {
        death = 2024;
        birth = 0;

        if (Object.hasOwn( person, "yearOfDeath") ) death = person.yearOfDeath;
        if (Object.hasOwn( person, "yearOfBirth") ) birth = person.yearOfBirth;
        age = death - birth;

        if (age > oldest.age) {
            oldest.name = person.name;
            oldest.age = age;
        }

    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
