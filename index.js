class SortedList {
      // The constructor initializes the properties "items" and "length".
  constructor() {
    this.length = 0;
    this.items = [];
    
  }
  add(item) {
// Find the correct position to insert the new item in the list.
    let i = 0;
    while (i < this.length && this.items[i] < item) {
      i++;
    }
    // we add the new item to the list at the position found
    this.items.splice(i, 0, item);
    // Update the property  "length"
    this.length++;
}


  get(pos) {
  
    if (!this.items.includes(pos)) {
      return OutOfBounds;// Returns a specific value if the position is not valid
    }
    return this.items[pos];//Returns the element at the indicated position
  }


  max() {
    if (this.items.length == 0) {
      return EmptySortedList;
    } 
      return Math.max(...this.items);
    }
  

  min() {
    if (this.items.length == 0) {
      return EmptySortedList;
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((x, y) => x + y, 0); // We calculate the sum of all the elements in the list and return the result.
  }

  avg() {
    //Check if the list is empty
    if (this.items.length == 0) { //If the list is empty, return an "EmptySortedList"
      return EmptySortedList;
    }
    let sum = 0;
    this.items.forEach((num) => { sum += num });
      return this.sum() / this.length
  }
}
module.exports = SortedList;


  