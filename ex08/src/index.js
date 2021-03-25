// Lodash
const _ = require('lodash');

// Only change code below this line
// users nested array with four objects starts here
const users = [{
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
        console.log(users[i]);
        return output;
    }


    // getUsers function - list od users ends here
}
// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        var user = _.find(users, { lastName, gender }); // add appropriate code here
        console.log(users);
        var iFindUser = (`$(username) $(lastname)`, `${iFindUser}`);

        return iFindUser;

    } catch (error) {
        return "Cannot read property 'firstName of undefined";
        console.log("Cannot read property 'firstName' of undefined");
        // Change this line

    }
}

// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser("Doe", "male");
findUser("Doe", "female");
findUser("Carrey", "male");
findUser("Winslet", "male"); // Change this line

module.exports = findUser;