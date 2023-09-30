
let obj1 = {name:"person",age:5}
let obj2 = {age:5,name:"person1"}
let key1 = Object.keys(obj1).sort();
let key2 = Object.keys(obj1).sort();
console.log(key1)
console.log(key1)
if(JSON.stringify(key1) ===JSON.stringify(key2)){
  console.log("EQUAL")
}else{
  console.log("NOT EQUAL")

}
