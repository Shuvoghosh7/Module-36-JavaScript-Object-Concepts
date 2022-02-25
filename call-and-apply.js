const kibriya ={
    Id:1610,
    name:'kibriya',
    money:5000,
    mejor:'CSE',
    treatDey:function(expance,trips,tex){
        this.money = this.money - expance-trips-tex
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
/* kibriya.treatDey.call(heroBalam,500,50,20) */
kibriya.treatDey.apply(heroBalam,[500,50,30])