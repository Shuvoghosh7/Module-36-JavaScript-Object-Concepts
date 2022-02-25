//1. using object Literal
const student={name:'shuvo',ID:1610,Address:'uttara'}
//2. Using Constrouctor
const parson = new Object()
// console.log(parson)
//3
const human = Object.create(student)//inside the () hear pass another object by inheritance or if not pass another boject write (null)
// console.log(human.name)

//4 Create object from class
class Pepole{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
const prpo = new Pepole('shuvo',25)
console.log(prpo)
// 5 using function create object
function Manus(name){
    this.name=name
}
const man = new Manus('janoyar')
console.log(man)