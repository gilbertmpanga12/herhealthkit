const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// set account type
exports.registeraccount = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
    const email = request.body['email'];
    const accountType = request.body['accountType'];
    const customClaims = {
        accountType: accountType,
        created_at: new Date().getTime(),
        email: email
      };
      admin.auth().getUserByEmail(email).then(user => {
        admin.auth().setCustomUserClaims(user.uid, customClaims)
        .then((res) => {
          response.send({message: "User registerd"});
          return res;
        })
        .catch((error) => {
          response.status(500).send({message: "error"});
          console.log(error);
          return error;
        });
        return user;
      }).catch((err) => {
        response.status(500).send({message: "error"});
        return err;
      });

    });
});
