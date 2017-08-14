/**
 * Created by vo13n on 14-Jul-17.
 */
function personAndTeacher() {
    class Person{
        constructor(name, email){
            this.email = email;
            this.name = name;
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}
