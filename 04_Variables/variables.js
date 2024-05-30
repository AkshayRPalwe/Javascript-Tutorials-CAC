const accountId = 1223;
let accountEmail = "palweakshay20@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 2;
// console.log(accountId); // TypeError: Assignment to constant variable.

accountEmail = "ap@ap.com";
accountPassword = "4321124";
accountCity = "Shirur";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 1223        │
// │ 1       │ 'ap@ap.com' │
// │ 2       │ '4321124'   │
// │ 3       │ 'Shirur'    │
// │ 4       │ undefined   │
// └─────────┴─────────────┘

/*
    Prefer not to use var.
    Because of issue in block and function scope
*/
