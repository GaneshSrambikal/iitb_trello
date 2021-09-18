# Trello_MockUp

A Simple Todo Web App with task tracking.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [bootstrap](https://getbootstrap.com/). 
No other additional libraries are used.

In this documetation includes:
* Introduction
* Overview
* Executive Summary
* System Overview

## 1. Introduction

### Goals
- Implementing a simple web page which has 3 column lists using simple bootstrap 
- Each column will contain multiple cards.
- The order of the cards should be maintained.
- The card should show a title and a description.
- The state should be maintained after refresh.
- There should be a button at the top to add a new card.
- ***(Bonus Point)*** User should be able to move a card from one column to another by drag and drop.
- UI Goals
    - #### Add Card
        - On clicking the add card button, a modal popup should be shown with a form. 
        - The form should contain title, description and column selection dropdown.
        - Title should be validated and should only contain alphabets.
        - Description should be validated and should be minimum 25 characters.
        - On submit, the card should be added to the end of the selected column.
    - #### Edit Card
        - On clicking a card, the add card modal popup should be shown with the add card form with the prefilled data.
        - If the user changes the column then, the card should be added to the end of the selected column.
        - There should be a button to delete the card in the popup.
### References
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Learn [Bootstrap 5](https://getbootstrap.com/) now.

[Drag And Drop API ](https://developer.mozilla.org/.en-US/docs/Web/API/HTML_Drag_and_Drop_API).

[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html).

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Overview

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
