const numbers = [1,2,3,5,7,6,8,9];
const output = [];
for (const number of numbers){
    const doubled = number *2;
    output.push(doubled);
}
// console.log(output);

function doubleit (num){
    return num * 2;
}

const doubleold = num => num * 2;

function getdoubled (){
    const output = [];
    for (const number of numbers){
        const doubled = doubleold(number);
        output.push(doubled);
    }
    return output;
}
// console.log(getdoubled(numbers));



const makedouble = numbers.map(num => num * 2);
// console.log(makedouble);

const fivetimes = [1,2,3,4,5].map(x => x * 5);
// console.log(fivetimes);


const nums = [12, 56, 96, 45, 62];
const half = nums.map(n => n/2);
// console.log(half);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brabdy', 'Tom Ali'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);

const nameLength = friends.map(f => f.length);
// console.log(nameLength);


const players = [
    {id: 1, name: 'Habibul Basar', run: 50},
    {id: 2, name: 'Sakib Al Hasan', run: 80},
    {id: 3, name: 'Musfikur Rahim', run: 70},
    {id: 4, name: 'Mahmudullah', run: 40}
];

const items = players.map(player => player.run);
console.log(items);
