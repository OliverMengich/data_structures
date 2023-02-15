type Animal={
    type: string
    mammal: boolean
}
let animals: Animal[] = [
    {
        type:"Dog",
        mammal: true
    },
    {
        type: "Snake",
        mammal: false,
    },
    {
        type: "Cheetah",
        mammal:true
    }
];
let mammals = animals.filter(animal=>animal.mammal===true);
console.log(mammals);
