import LinkedLists from "./linkedLists.js";

const list = new LinkedLists();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
