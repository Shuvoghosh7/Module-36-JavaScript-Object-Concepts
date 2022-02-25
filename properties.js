const bottle={color:'yellow',hold:'water',price:50}
const keysName=Object.keys(bottle)
/* console.log(keysName) */
//get all values
const values = Object.values(bottle)
/* console.log(values) */
//together find  Keys & values 
const entries = Object.entries(bottle)
// console.log(entries)

// Object.seal(bottle)
Object.freeze(bottle)
delete bottle.price
bottle.color='green'
console.log(bottle)