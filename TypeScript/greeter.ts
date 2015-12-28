/**
 * Created by unnKoel on 2015/12/28.
 */

interface Person {
    firstname:string;
    lastname:string;
}

function greeter(person:Person) {
    return "Hello," + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: 'user'};

document.body.innerHTML = greeter(user);