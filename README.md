**Client Side NG1 Todo List Application**
------------------------

A simple single page Todo list application using Angular 1, JSPM, ES6, SCSS and gulp.

>Tooling is based on https://github.com/AngularClass/NG6-starter with some small modifications to support SCSS and updated angular libs


## Testing Setup
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* JSPM + Babel
* Mocha
* Chai

To run test just `npm test` or `karma start`. Read more about testing [below](#testing)


# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
Once you have those, you should install these globals with `npm i -g`:
* `jspm`
* `gulp`
* `karma`
* `karma-cli`

## Installing
* `fork` me
* `clone` your fork
* `git checkout jspm`
* `npm i` to install all dependencies
* (with JSPM there's usually a `jspm install` step too, but that is added to npm's `postinstall` for convenience)

#### Failing `npm install`
If this is your first time running JSPM, you'll probably run into a `warn Error - GitHub rate limit reached`

Fix this by adding your GitHub credentials to JSPM with: `jspm registry config github`.

## Running the app
NG6 uses Gulp to build and start the dev environment. After you have installed all dependencies you can now run the app.
Run `gulp` to start a dev server and watch all files. The port will displayed to you.

### Gulp tasks
Without Webpack's required build step, serving is easy and you choose when you are ready to build now

Here's a list of possible Gulp task to run:
* `serve` (also default `gulp`)
  * starts a dev server with `browser-sync` serving the client folder and listens for changes
* `build`
  * bundles our app into a single file with all included dependencies into `dist/`. both minified and unminified included
* `sass`
  * compiless or sass files into css
* `component`
  * builds out boilerplate for a new angular component, [read below](#generating-components) to see how to use this in more detail