import LinkedLists from "./linkedLists.js";

const list = new LinkedLists();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());
console.log(list.headValue());
console.log(list.tail());
console.log(list.at(3));
console.log(list.at(10));
