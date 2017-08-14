/**
 * Created by vo13n on 23-Jul-17.
 */
class Task {
    constructor(title, deadline){
        this.title = title;
        //if(deadline < Date.now()){
        //    throw new Error("Invalid date!");
        //}
        this.deadline = deadline;
        this.status = "Open";
    }
    isOverdue(){
        if(this.deadline < Date.now() || this.status !== 'Complete'){
            return true;
        }
        return false;
    }
    comparator(otherTask){
        //if()
    }
    toString(){
        let deadline = {
            deadline: this.deadline,
            overdue: this.isOverdue()
        };
        let icon;
        switch (this.status){
            case "Open":
                icon = '\u2731';
                break;
            case "In Progress":
                icon = '\u219D';
                break;
            case "Complete":
                icon = '\u2714';
                break;
            default://
                icon = '\u26A0';
        }
        let result = '';
        if(deadline.overdue === true){
            result += `[${icon}] ${this.title} (deadline: (overdue))`
        }
        if(this.status === "Complete"){
            result += `[${icon}] ${this.title}`;
        }
        return result;
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
task1.deadline = new Date(2005, '4', '20');
