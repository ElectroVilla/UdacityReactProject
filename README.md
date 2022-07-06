# Udacity React Project: MyReads App

## About the Project

This was a pretty interesting project, I enjoyed it a lot, I had some issues with <select> I did a lot of searches about it and I didn't remove my comments regarding this point.

In the course we studied only two hooks but at the end of that chapter we got a list of many other hooks from react, I decided to implement the "useContext" hook as proof of studying it rather than prop drilling.

## Pages / Components Structure

```bash
├── App component # Parent of all the webapp and have the router cpmponent
    └── Books Page # Contains the Title, Shelves and Books
    |   └── Shelf Component
    |       └── Book Component
    └── Search Page        
```
## Book Components

The book component was heavily used and reused; it has two props:
1) book: This is the book object to be processed 
2) mode: This is a string to identify the calling parent and subsequently helps build the proper options.

The "book" object is carefully processed with an alternative default value of any missing value to ensure faultless behavior.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
