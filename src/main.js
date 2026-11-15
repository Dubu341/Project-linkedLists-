import LinkedLists from "./linkedLists.js";

const list = new LinkedLists();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("List: " + list.toString());
console.log("List size: " + list.size());
console.log("First node: " + list.headValue());
console.log("Node at index 3: " + list.at(3));

console.log("Remove head : " + list.pop());
list.insertAt(4, "hello", "hi", "BIG HELLO IT WORKS");
console.log("List: " + list.toString());
console.log("List size: " + list.size());
console.log("First node: " + list.headValue());
console.log("Last node: " + list.tail());
console.log("Node at index 3: " + list.at(3));
console.log("Node at index 10: " + list.at(10));

console.log("Contains snake: " + list.contains("snake"));
console.log("Contains rabbit: " + list.contains("rabbit"));
console.log("Turtle at index: " + list.findIndex("turtle"));
