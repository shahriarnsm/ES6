const numbers = [12, 54, 65, 75, 35, 14, 95, 58];
const bignums = numbers.filter(number => number > 50);
const tiny = numbers.filter(number => number < 40);
const even = numbers.filter(number => number % 2 === 0);
// console.log(even);


const players = [
    {id: 1, name: 'Habibul Basar', run: 50},
    {id: 2, name: 'Sakib Al Hasan', run: 80},
    {id: 3, name: 'Musfikur Rahim', run: 70},
    {id: 4, name: 'Mahmudullah', run: 40}
];

const halfCenturies  = players.filter( player => player.run >= 50) ;
console.log(halfCenturies);