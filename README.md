# MyReads

> Basic books app

## Quickstart

```bash
# install all project dependencies
npm i

# start the development server with hot reload at localhost:3000
npm start

```

## To use

* The home page displays 3 shelves: Currently Reading, Want to Read, and Read. You can move a book to another shelf by clicking on the button with the down arrow and selecting the shelf name.

* To search for more books to add to the shelves, go to the bottom right of the page and click on the add button. Type in a search term (e.g. title, author, subject).

## Project Structure
```bash
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
	├── components
	│   └── Mui/Progress
	│   	└── circular.js
	│   └── __snapshots__
	│   		└── ListBooks.test.js.snap
	│   		└── ListShelves.test.js.snap
	│   		└── SearchBooks.test.js.snap
	│   ├── App.js # Root of the app.
	│   ├── App.test.js # Used for testing. Provided with Create React App.
	│   ├── ListBooks.js
	│   ├── ListBooks.test.js # Used for testing.
	│   ├── ListShelves.js
	│   ├── ListShelves.test.js # Used for testing.
	│   ├── PageNotFound.js
	│   ├── SearchBooks.js
	│   ├── SearchBooks.test.js # Used for testing.
	│   └── ShelfChanger.js
	├── css
	│   ├── App.css # Page and component styles.
	│   └── index.css # Global styles.
	├── icons
	│   ├── add.svg
	│   ├── arrow-back.svg
	│   └── arrow-drop-down.svg
	├── utils
	│   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
	│   └── helpers.js
	├── index.js # Used for DOM rendering only.
	└── setupTests.js # Used for testing.
├── .gitignore
├── .htaccess # Used for the deployment server
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package-lock.json # npm package manager file.
└── package.json # npm package manager file.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

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
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results, or if you don't find a specific author or title!
