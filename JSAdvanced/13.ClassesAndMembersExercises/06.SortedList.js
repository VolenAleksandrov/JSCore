/**
 * Created by vo13n on 13-Jul-17.
 */
class List{
    constructor(){
        this.nums = [];
        this.size = 0;
    }
    add(element){
        this.nums.push(element);
        this.size++;
        this.nums.sort((a, b) => a - b);
        return this.nums;
    }
    remove(index){
        if(index < this.nums.length && index >= 0){
            this.nums.splice(index, 1);
            this.size--;
            return this.nums;
        }
    }
    get(index){
        if(index < this.nums.length && index >= 0){
            return this.nums[index];
        }
    }
}