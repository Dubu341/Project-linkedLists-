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

  prepend(value) {
    let newNode = new Node(value);

    newNode.value = value;

    newNode.next = this.head;

    this.head = newNode;
  }

  size() {
    let size = 0;

    let temp = this.head;

    while (temp != null) {
      size += 1;
      temp = temp.next;
    }

    return size;
  }

  headValue() {
    if (this.head === null) return;
    else {
      return this.head.value;
    }
  }

  tail() {
    let temp = this.head;

    if (temp === null) return;
    else {
      while (temp.next) {
        temp = temp.next;
      }
    }

    return temp.value;
  }

  at(index) {
    if (index > this.size()) return;
    let temp = this.head;

    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }

    return temp.value;
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
