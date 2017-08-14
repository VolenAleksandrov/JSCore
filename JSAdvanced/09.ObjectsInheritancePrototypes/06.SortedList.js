/**
 * Created by vo13n on 09-Jul-17.
 */
function getSortedList() {
    return{
        internalArray: [],
        size: 0,
        add: function (element) {
            this.internalArray.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if(index < this.internalArray.length && index >= 0){
                this.internalArray.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if(index < this.internalArray.length && index >= 0){
                return this.internalArray[index];
            }
        },
        toString: function () {
            return this.internalArray.join(' ');
        },
        sort: function () {
            this.internalArray = this.internalArray.sort((a, b) => a - b);
        }

    }

}
let sortedList = getSortedList();
console.log("Size: " + sortedList.size);
sortedList.add(2);
sortedList.add(-1);
sortedList.add(100);
sortedList.add(-54);
console.log(sortedList.toString());
sortedList.remove(2);
console.log(sortedList.toString());
sortedList.remove(0);
console.log(sortedList.toString());
console.log(sortedList.get(0));
console.log("Size: " + sortedList.size);