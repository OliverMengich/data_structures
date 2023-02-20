enum Category {
    fruits=0,
    vegetables=1,
    dairy=2,
    meat=3
}
// interface Category {
//     fruits,
//     vegetables,
//     dairy,
//     meat
// }
interface Group {
    name: string;
    category: Category;
    quantity: number;
} 
const inventory: Group[] = [
    {name: 'apple', category: Category.fruits, quantity: 10 },
    {name: 'banana', category: Category.fruits, quantity: 20 },
    {name: 'pork', category: Category.meat, quantity: 90},
    {name: "potato", category: Category.vegetables, quantity: 40},
    {name: "milk", category: Category.dairy, quantity: 50},
    {name: "cheese", category: Category.dairy, quantity: 30},
];
// 1. Create a function that returns all the items in a given category
function getItemsByCategory(category: Category): Group[] {
    return inventory.filter((item) => item.category === category);
}

// console.log(getItemsByCategory(Category.fruits));
//loop through enum
let newInventory: {[key: string]: Group[]} = {};
// console.log(Object.keys(Category));

for (const category in Category) {
    // console.log(category);
    // console.log(Category[category as keyof typeof Category]);
    Object.assign(newInventory, {
        [category]: getItemsByCategory(Category[category as keyof typeof Category])
    });
}
//loop through object
console.log(newInventory);

