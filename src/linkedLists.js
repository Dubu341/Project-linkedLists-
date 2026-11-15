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

    let current = this.head;

    while (current != null) {
      size += 1;
      current = current.next;
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
    let current = this.head;

    if (current === null) return;
    else {
      while (current.next) {
        current = current.next;
      }
    }

    return current.value;
  }

  at(index) {
    if (index > this.size()) return;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.value;
  }

  pop() {
    if (this.head === null) return;

    const first = this.head;

    this.head = this.head.next;

    return first.value;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  findIndex(value) {
    let index = 0;

    let current = this.head;

    while (current) {
      if (current.value === value) return index;

      index++;

      current = current.next;
    }

    return -1;
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
