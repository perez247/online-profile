# MyNiche

This is a project for showing your personal information, even when your C.V. is obselete this can be a place to have all recent changes.

## Getting Started

After downloading, run `npm install` to get dependencies.

### Firebase setting

Create/Add a [firebase base](https://console.firebase.google.com/u/1/) project/database. Add the configuration details to your application environment (both test and production). kindly follow the same format.

`
production: false/true, // exclude this, it is just to show you where the keys should be in the angular app:

firebase : {

    apiKey: "xxxx",

    authDomain: "xxxx",

    databaseURL: "xxxx",

    projectId: "xxxx",

    storageBucket: "xxxx",

    messagingSenderId: "xxxx"

  },

  guest: {

    email : 'guest-email-address',

    password : 'guest-password'

  },

  maxUsers: 2
`

Enable the authenticate by username and password in firebase, in the authentication tab.

Next uncomment the register form from login.components.html, the register method from login.components.ts and the register method from auth.service.ts. Then register two users, 1 for admin and the next for guest. (you are only allowed to register only two which can be configured from the environments file), the guest is for viewing the functionality of the admin section but cannot write. 

Store the user credential you consider as guest on the environment file.

The other user credential which is considered as the admin, copy the Uid column as save it as follows: 

` 
{

  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */

  "rules": {

    ".read": true,

    ".write": "auth.uid == 'The-desired-user-Id'",

    "users": {

        ".write": "auth.uid == 'The-desired-user-Id'",

        ".read": "auth.uid == 'The-desired-user-Id'",

    }

}

`
This is the first I have done so please do not hesitate to contact me for enquiries
## Thank you very much

[My Personal Site](https://ape-niche.firebaseapp.com/)
