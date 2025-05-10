# Triple Frontend

Triple Technologies is a one-stop tech solutions provider offering software development, IT training, digital marketing, maintenance, and networking services—driven by innovation, speed, and expert support.

## Recommended development setup

The best way to start contributing to the Nexus project is by using the **Dev Bootstrap** project to
get a working devcontainer to work with. The following procedure is recommended:

1. insure git is installed if not install git
   ```bash
   git
   ```
2. Clone the remote repository using
   ```bash
   git clone https://github.com/getachewzemene/triple_tech.git
   ```

### Running a debug session


1. From the terminal **or** using VSCode npm scripts GUI, start a development server

```bash
  npm start
```


## npm commands

### `npm install`

Installs all packages used in package.json file. This has already been done automatically if using
the provided devcontainer.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm analyze`

Analyze the bundle size and see which component holds most of the bundle size. Used for improving
the performance by analyzing and reducing the bundle size of the application

### eslint .

runs linter and show possible erorrs and warnings under allowed files

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn't feel obligated to use this feature. However we understand that this
tool wouldn't be useful if you couldn't customize it when you are ready for it.

