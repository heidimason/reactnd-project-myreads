# MyReads Project

Initially the starter template for the final assessment project for Udacity's React Fundamentals course, the goal of the template was to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code needed to complete the project. My job was to add interactivity to the app by refactoring the static code in the template.

##

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

##

To use:

* This is a basic books app.  The home page displays 3 shelves: Currently Reading, Want to Read, and Read. You can move a book to another shelf by clicking on the green button with the down arrow and selecting the shelf name.

* To search for more books to add to the shelves, go to the bottom right of the page and click on the green add button. Type in a search term (e.g. title, author, subject).

### Important Note: ###
The search from BooksAPI is limited to a particular set of search terms.
You can find these search terms here:
https://github.com/heidimason/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

However, remember that the BooksAPI.search method DOES search by title or author.
So, don't worry if you don't find a specific author or title. Every search is limited by search terms.

## Project Structure
```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
    ├── App.css
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # This is used for DOM rendering only.
```

## Backend Server

To simplify the development process, Udacity provided a backend server for me to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results!

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
