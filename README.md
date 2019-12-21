## How to run the project

1. Install dependencies

   `npm install`

2. Run the project

   `npm start`

   after running this command, you can access the app by visiting http://localhost:3000

3. You can also run the tests

   `npm run test`

## Notes

- The project includes linting. This linting setup uses ESLint and Prettier
- Unit tests are writted using Jest and react-testing-library
- Currently logos are displayed only for Amex, VISA and MasterCard credit cards. This setup can easily be scaled to add other card types as well.
- The project uses Redux as well. For demonstration purposes, once the submit button is clicked an action is dispatched and card details are stored in a reducer.
