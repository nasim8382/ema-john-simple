/* 
* 1. create a new firebase project in firebase.console.google.com
* 2. npm install firebase
* 3. create firebase.init.js and import getAuth to export app
* 4. Firebase settings > Authentication > enable Email and password auth
* 5. Create login, Signup component, setup route
* 6. attach form field handler and form submit handler
* 7. npm install --save react-firebase-hooks
* 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
* 9. if user is created redirect to the expected page
* 10. seSignInWithEmailAndPassword for log in
* 11. Create RequireAuth component ==> check user exists also track user location
* 12. In route wrap protected component by using Require auth component
*/


/* 
* Firebase hoisting steps
* 1. npm install -g firebase-tools (one time for your computer)
* 2. firebase login (one time for your computer)
* 3. firebase init (one time for each project )
* 4. npm run build (every time you want to deploy)
* 5. firebase deploy
*/