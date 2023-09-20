const numbers = [12, 54, 65, 75, 35, 14, 95, 58];
const five = numbers.find(num => num % 5 === 0);
console.log(five);

const players = [
    {id: 1, name: 'Habibul Basar', run: 50},
    {id: 2, name: 'Sakib Al Hasan', run: 80},
    {id: 3, name: 'Musfikur Rahim', run: 70},
    {id: 4, name: 'Mahmudullah', run: 40}
];
const halfCenturies  = players.find( player => player.run >= 50) ;
console.log(halfCenturies);