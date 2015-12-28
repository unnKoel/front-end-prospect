/**
 * Created by unnKoel on 2015/12/28.
 */
function greeter(person) {
    return "Hello," + person.firstname + " " + person.lastname;
}
var user = { firstname: "Jane", lastname: 'user' };
document.body.innerHTML = greeter(user);
