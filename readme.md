# Webpack 3 ES6 React and Sass Boilerplate

Simple ES6 React with Sass boilerplate under Webpack 3. Based loosely on [Kliment Petrov boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate).

- [x] [React](https://facebook.github.io/react/) 15.6.x
- [x] [React Router](https://reacttraining.com/react-router/) 4.1.x
- [x] [Webpack](https://webpack.github.io/) 3.0.x with [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) 2.5.x
- [x] [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) included if prefered.
- [x] ECMAScript 6 support through [Babel](https://babeljs.io/).
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] Local .env config
- [x] Production config with separate CSS generation with [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## Dev server

Ensure you have Node installed, then;

	git clone https://github.com/thekeogh/webpack-react .
	
Install node modules

	npm install
	
Copy the `.env.example`

	cp .env.example .env
	
Start the server

	npm start
	// Or for Webpack Dashboard
	npm run dev
	
A new browser window should open at `http://localhost:8111`. You can change the hostname and port by editing the values in the `.env` you created above.

## Production build

To build production ready assets, simply run:

	npm run build
	
This will build a uglified `app-[hash].js` and a minified `app-[hash].css` and automatically create a `index.html` linking these files for you in a `dist/` directory.

The `dist/` directory is `.gitignore`'d by default, and purged before every build.

