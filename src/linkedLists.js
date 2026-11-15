import Node from "./node.js";

class LinkedLists {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);

    newNode.value = value;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }

    return result + "null";
  }
}

export default LinkedLists;
