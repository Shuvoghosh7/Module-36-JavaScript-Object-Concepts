const bottle={
    color:'yellow',
    hold:'water',
    price:50
};
for(const prop in bottle){
    // console.log(bottle[prop])
}
//another way
const keys = Object.keys(bottle)
for(const prop of keys){
    // console.log(prop,bottle[prop])
}
// using entries loop through object
for(const [keyOfObject,valueOfObject] of Object.entries(bottle)){
    console.log(keyOfObject,valueOfObject)
}