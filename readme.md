# Webpack 3 ES6 React and Sass Boilerplate

Simple ES6 React with Sass boilerplate under Webpack 3. Based loosely on [Kliment Petrov boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate).

- [x] [React](https://facebook.github.io/react/) 15.6.x
- [x] [React Router](https://reacttraining.com/react-router/) 4.1.x
- [x] [Webpack](https://webpack.github.io/) 3.0.x with [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) 2.5.x
- [x] [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) included if prefered
- [x] Sass support utilising [CSS modules](https://css-modules.github.io/webpack-demo/)
- [x] ECMAScript 6 support through [Babel](https://babeljs.io/)
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] Development and production .env config
- [x] Production config with separate CSS generation with [Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

## Dev server

Ensure you have Node installed, then;

	git clone https://github.com/thekeogh/webpack-react .
	
Install node modules

	npm install
	
Copy the `.env.example` for your `development` and `production` variables.

	cp .env.example .env
	cp .env.example .env.production
	
Start the server

	npm start
	// Or for Webpack Dashboard
	npm run dev
	
Open your browser to `http://localhost:8111`. You can change the hostname and port by editing the values in the `.env` you created above.

[dotenv-safe](https://www.npmjs.com/package/dotenv-safe) is used for the `.env` variables, therefore all `.env` vars must be declared in the `.env.example` file for them to be usable in the app.

## Production build

To build production ready assets, simply run:

	npm run build
	
This will build a uglified `app-[hash].js` and a minified `app-[hash].css` and automatically create a `index.html` linking these files for you in a `dist/` directory.

The `build/` directory is `.gitignore`'d by default, and purged before every build.

## Deployment

We can deploy to [now](https://github.com/zeit/now-cli) ([zeit](https://zeit.co/)) right out the box. Ensure you have the [now-cli](https://www.npmjs.com/package/now) installed globally with npm first.

Edit the `now.json` in the root, change this to the name of your app, then run:

	npm run deploy
	
This will build the production assets and deploy to now. 

To alias your deployment (e.g. `my-app.example.com` or `my-app.now.sh`) supply your `alias` in the `now.json` and run:

	npm run deploy
	
Your deployment should now be aliased.

