const users = [
    {id:1 ,
    name: 'Shahriar',
    job: 'CS Engineer'}
]
// console.log(users[0].job);
/* in the example users is an array and in this array there ia an
object. So to access the properties of a n object which is contain in
an array we need access the array's ndex first then we can normally 
access the properties of the object*/

const data ={
    count : 5000,
    employees: [
        {id: 1, name: 'Shahriar', job: 'Data Engineer'},
        {id: 2, name: 'Siddik', job: 'DevOps'},
        {id: 3, name: 'Ricky', job: 'Backend'},
    ]
}
// console.log(data.employees[0].name);


const user = {
    id : 5001,
    name: 'Shahriar',
    address: {
        street:{
            road: '35/A Kochukhet Bazar',
            floor: 'Third floor',
            side: 'Right'
        },
        postOffice: 'Cantonmet',
        city: 'Dhaka',
        zipCode: '1206'
    }
}

const userFloor = (user.address.street.side);
console.log(userFloor);