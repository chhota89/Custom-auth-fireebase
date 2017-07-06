var admin = require("firebase-admin");

var serviceAccount = require("./privateKey/project-6078671265756211683-firebase-adminsdk-lgj2x-8b8e580ba0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-6078671265756211683.firebaseio.com"
});

var uid = "mohmad-uid";

admin.auth().createCustomToken(uid)
  .then(function(customToken) {
    // Send token back to client
    console.log("custom token ",customToken);
  })
  .catch(function(error) {
    console.log("Error creating custom token:", error);
  });
