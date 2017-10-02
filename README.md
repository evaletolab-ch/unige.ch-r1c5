# R1C5 application 
* online examples https://evaletolab-ch.github.io/unige.ch-r1c5/

## Current implemented directives 
* all directives are implemented in the [followig directory](app/js/directives/)
* **unige-seo** inject (afer a `timeout`) HTML content loaded from server file `json` 
* **unige-version** inject current R1C5 version
```html
  <unige-seo timeout="100"  json="seo-a.json"></unige-seo>
  <unige-version></unige-version>
```

## hosting @unige
* http://cms.unige.ch/gsem/r1c5/data
 * data (allProf.json, cv_<id>.json, cv_<id>_<en|fr>.pdf)
 * app (vendor.js, app.js, app.css)
 * (`WARNING`) take care about crossdomain issue by using a `jsonp` loader


## quick help
* git clone https://github.com/evaletolab-ch/unige.ch-r1c5
* npm install
* brunch w -s
* brunch build --production

### Running the app during development

* `brunch w -s` to serve using **Brunch**

Then navigate your browser to [http://localhost:3000](http://localhost:3000)


### Running the app in production

* `brunch build --production` to minify javascript and css files for production deployment

Please be aware of the caveats regarding Angular JS and minification, take a look at [Dependency Injection](http://docs.angularjs.org/guide/di) for information.

### Running unit tests

* `npm test` to run unit tests with [karma](http://karma-runner.github.io)
* Open the browser you would like to test to [http://localhost:3334](http://localhost:3334)

Notes:

- Karma will run tests on save. To insure that changes are saved be sure to have `npm start` or `npm run dev` running in the console
- You can set the browsers that you would like to target in the `/test/karma.conf.js` file E.g. `browser = ["ChromeCanary", "Firefox"]`

### End to end testing

* Run the app in development mode as described above using a separate terminal
* `npm run test-e2e` to run e2e tests with [karma](http://karma-runner.github.io) using protractor
* Be aware that changing the SCSS files will compile the new CSS while the server is running, but that it won't trigger a e2e test reload, you'll have to manually relaunch the test server fow now




