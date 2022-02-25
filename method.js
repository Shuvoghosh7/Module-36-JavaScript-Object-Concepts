const student ={
    name:'joy',
    Id:1610,
    money:5000,
    mejor:'CSE',
    subject:['math','English','programing'],
    bestFriend:{
        name:'rifat',
        subject:'cse',
    },
    takeExam:function(){
        console.log(this.name,'exam well be taken')
    },
    treatDey:function(expance,trips){
        this.money = this.money - expance-trips
        return this.money
    }
}
student.takeExam()
const remaingMoney1 =student.treatDey(900,50)
const remaingMoney2 =student.treatDey(1000,100)
console.log(remaingMoney1,remaingMoney2)
// console.log(student.bestFriend.name)