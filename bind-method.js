const kibriya ={
    Id:1610,
    name:'kibriya',
    money:5000,
    mejor:'CSE',
    treatDey:function(expance){
        this.money = this.money - expance
        console.log(this)
        return this.money
    }
}
const heroBalam={
    Id:1620,
    name:'balam',
    money:6000,
    mejor:'CSE',
}
const heroKalam={
    Id:1620,
    name:'kalam',
    money:8000,
    mejor:'CSE',
}
 kibriya.treatDey(100)
 const heroTreatDay = kibriya.treatDey.bind(heroBalam)
 heroTreatDay(500)
 const kalamTreatDay =kibriya.treatDey.bind(heroKalam)
 kalamTreatDay(2000)
