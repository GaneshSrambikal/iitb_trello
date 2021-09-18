# Trello_MockUp

A Simple Todo Web App with task tracking.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [bootstrap](https://getbootstrap.com/). 
No other additional libraries are used.

In this documetation includes:
* Introduction
* System Overview
* Reference

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

### 2. System Overview
The App let's you create task and have a track using different status (i.e Doing, Done).

- #### Features
    - Add Card
    - Edit Card
    - Delete Card
    - Drag and Drop cards to different columns
- #### User Activities
    - User can create a task with title, description and a set status (todo,doing,done).
    - User can edit a task's title,description and status 
    - User can delete an individual task
    - User can drag and drop task to desired column and the task gets added to the bottom of the selected column
- #### Functionality
    - ##### Add Card
        - On clicking the add card button, a modal popup should be shown with a form.
        - The form will contain title, description and column selection dropdown.
        - Title will be validated and should only contain alphabets.
        - Description will be validated and should be atleast 25 characters or more.
        - On submit, the card will add to the end of the selected column.
    - #### Edit Card
        - On clicking a card, the add card modal popup should be shown with the add card form with the prefilled data.
        - If the user changes the column then, the card shouldbe added to the end of the selected column.
        - There should be a button to delete the card in the popup.
    - #### Delete Card
        - There will be a button to delete the card in the popup.
        - There will be a button on the card to delete the card.
    - #### Drag and Drop
        - User can move a card from one column to another by drag and drop.
        - it sets the card's status to selected column and adds to the bottom of the column.
- #### UI Components
    - #### Modals
        - Uses bootstrap's [Modal](https://getbootstrap.com/docs/5.1/components/modal/) to
            - show Add Popup
            - show Edit Popup
    - #### Cards
        - Uses bootstrap's [Card](https://getbootstrap.com/docs/5.1/components/card/) to
            - show individual task's with title and descriptions and status.
    - #### Collapse
        - Uses bootstrap's [Collapse](https://getbootstrap.com/docs/5.1/components/collapse/) to
            - show each columns with cards
    - #### Placeholder
        - Uses boostrap's [Placeholder](https://getbootstrap.com/docs/5.1/components/placeholders/) to 
            - show loading state of the cards
    - #### Buttons
        - Uses bootstrap's [Button](https://getbootstrap.com/docs/5.1/components/buttons/) to
            - show buttons on cards and modals
    - #### Badges
        - Uses bootstrap's [Badge](https://getbootstrap.com/docs/5.1/components/badge/) to
            - show the count of cards in the columns


### Screens
    - Main Page
        - ![alt text](https://github.com/GaneshSrambikal/iitb_trello/blob/master/public/assets/optimistic-bardee.png?raw=true)

### References
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Learn [Bootstrap 5](https://getbootstrap.com/) now.

[Drag And Drop API ](https://developer.mozilla.org/.en-US/docs/Web/API/HTML_Drag_and_Drop_API).

[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html).

[React Hooks](https://reactjs.org/docs/hooks-intro.html).

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


