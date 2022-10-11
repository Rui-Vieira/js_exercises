//* New exercises date: 2021-03-10

const {
  resolveTypeReferenceDirective,
  isConstructorTypeNode,
} = require("typescript");

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
class Group {
  construtoctor() {
    this.members = [];
  }

  add(element) {
    //!this.members.includes(element && this.members.push(element));

    
        if(!this.has(element)) {
            this.members.push(element);
        }
  }

  delete(element) {
    this.members = this.members.filter((e) => e !== element);
  }

  has(element) {
    return this.members.includes(element);
  }

  static from(collection) {
    let group = new Group();

    //collection.forEach(group.add);

    for (const element of collection) {
      group.add(element);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

}


class GroupIterator {
    constructor(group) {
        this.currentIndex = 0;
        this.group = group;
    }

    next() {
        if(this.currentIndex >= this.group.members.length) {
            return {done: true};
        }

    this.currentIndex++;

    return {
        value: this.group.members[this.currentIndex], 
        done: false};

    }
}

const group = Group.from([10, 20]);
console.log(value)
