class SortedList {
      // The constructor initializes the properties "items" and "length".
  constructor() {
    this.items = [];
    this.length = 0;
  }
  //we add a new element to the list and keep it sorted in ascending order
  add(item) {
// Find the correct position to insert the new item in the list.
    let i = 0;
    while (i < this.length && this.items[i] < item) {
      i++;
    }
    // we add the new item to the list at the position found
    this.items.splice(i, 0, item);
    // Actualiza la propiedad "length"
    this.length++;
}


  get(pos) {
      // Verifica si la posición es válida
    if (!this.items.includes(pos)) {
      return OutOfBounds;// Returns a specific value if the position is not valid
    }
    return this.items[pos];//Returns the element at the indicated position
  }


  max() {
    if (this.items.length == 0) {
      return EmptySortedList;
    } else {
      return Math.max(...this.items);
    }
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
let average = undefined;
    this.items.forEach((num) => { sum += num });
      return average = sum / this.items.length; 
  }
}
module.exports = SortedList;


  