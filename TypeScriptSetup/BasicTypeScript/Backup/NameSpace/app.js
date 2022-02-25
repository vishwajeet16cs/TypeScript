"use strict";
/*
  namespace in typeScript
  what is name space
  how to use it
  example for namespace
*/
// note check o/p in out.js
// tsc app.ts --outfile out.js
///<reference path="./utils.ts"/>
var UsersUtils;
(function (UsersUtils) {
    class Users extends UsersUtils.Parent {
        getName() {
            return this.name;
        }
    }
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
let u1 = new UsersUtils.Users();
u1.setName("amarjeet ");
console.log(u1.getName());
// console.log(u1.getName1()) -->Class 'Users' incorrectly implements interface 'usersType'.
// Property 'getName' is missing in type 'Users' but required in type 'usersType'.
