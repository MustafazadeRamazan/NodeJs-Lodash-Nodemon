const  _= require('lodash')

////////  chunk

const array = [ 1, 2, 3, 4, 5, 6 ]
console.log(_.chunk(array, 2))

//////  FindIndex

var users = [
    { 'user': 'Ramazan', 'Male': true },
    { 'user': 'Pervin', 'Male': true },
    { 'user': 'Aysel', 'Male': false }
]

console.log(_.findIndex(users, function(e) { return e.user == 'Aysel' }))