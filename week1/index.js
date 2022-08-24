// asynchronous nature of node

// Ways of declearing variables





setTimeout(()=> {

console.log('Statement Number One')} , 9000)
console.log('Statement Number two')
console.log('Statement Number three')


// Classes Objects and Arrays. Accessing Items (dot and bracket notation)


const animals = {
    name: 'dog',
    sound:'bark'
}

class Animals {

    constructor(name, sound){

        this.name = name;
        this.sound = sound;
    }

}


// const animalscollection = []

const animalcollection = ['dog','pig', 'peecock']
const newAnimal = new Animals('pig', 'grunt')
console.log(animals)
console.log(newAnimal)
