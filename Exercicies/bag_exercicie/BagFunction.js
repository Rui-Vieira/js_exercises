/**
 *  Write a constructor function for a bag, a bag has a maximum capacity and can contain other bags inside. 
Provide methods to add and remove items from them bag. 
If the bag is full you should recursively check if the bag contains other bags where the item can be stored.
*/

//how to know the name of a object?
// know the name of a object






function Bag() {
    this.maxCapacity = 5;
    this.items = [];
};


Bag.prototype.add = function (item) {

    if (this.items.length < this.maxCapacity) {
        this.items.push(item);
        console.log(`Item ${item} added ${this.items.length} to bag`);

    } else if(this.items.length === this.maxCapacity) {

            console.log(`Bag is full, checking if we can add to a sub bag`);
            this.items.forEach((bag) => {
            if (bag instanceof Bag) {
                bag.length < this.maxCapacity ? bag.add(item) : console.log(`Bag is full`);
            }
        })

    } else { 
        console.log(`Bag is full, item ${item} not added`);
    }
};       


Bag.prototype.remove = function (item) {
    if (this.items.includes(item)) {
        this.items.splice(this.items.indexOf(item), 1);
        console.log(`Item ${item} removed from bag`);
    } else {
        this.items.forEach((bag) => {
            
            if (bag instanceof Bag) {
                bag.remove(item);
            }
            console.log(`Item ${item} removed from other bag`);
        });
    }
};

const pandoraBox = new Bag(2);
const storageBag = new Bag(5);

pandoraBox.add('Sword');
pandoraBox.remove("sword")
pandoraBox.add(storageBag);
pandoraBox.add('Shield');

pandoraBox.add('Potion');
pandoraBox.add('Potion');
pandoraBox.add('Elixir')


