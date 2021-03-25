// Lodash
const _ = require('lodas');

// Only change code below this line
// users nested array with four objects starts here
const user = [{
        "firstName": "John",
        "lastName": "Doe",
        "age": 24,
        "gender": "male"
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 5,
        "gender": "female"
    },
    {
        "firstName": "Jim",
        "lastName": "Carrey",
        "age": 54,
        "gender": "male"
    },
    {
        "firstName": "Kate",
        "lastName": "Winslet",
        "age": 40,
        "gender": "female"
    }
];
// users nested array with four objects ends here 
// getUsers function - list of users starts here
function getUsers() {
    var output = " ";
    for (var i = 0; i < users.length; i++) {
        console.log(users);
        return output;

        // console.log(getUsers("John Doe is 24, male"));
        // console.log(getUsers("Jane Doe is 5, female"));
        // console.log(getUsers("Jim Carrey is 54, male"));
        // console.log(getUsers("Kate Winslet is 40, female"));

    }

    // getUsers function - list od users ends here

    // findUser(lastName, gender) function starts here
    function findUser(lastName, gender) {
        try {
            var user = _.user(users, { lastName, gender }); // add appropriate code here
            console.log(users);
            var iFindUser = ('{firstName} + {lastName} + "is + {age} + ","  + {gender}');
            // console.log(user);
            return iFindUser;

        } catch (error) {
            console.log("Cannot read property 'firstName' of undefined");
            return "Cannot read property 'firstName of undefined"; // Change this line
            console.log("Cannot read property 'firstName of undefined"); // Change this line
        }
    }
    // findUser(lastName, gender) function ends here
    // Only change code above this line
    getUsers();
    findUser(Doe, male);
    findUser(Doe, female);
    findUser(Carrey, male);
    findUser(winslet, male); // Change this line

    module.exports = findUser;
}