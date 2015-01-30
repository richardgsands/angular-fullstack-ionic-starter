# angular-fullstack-ionic-starter

The motivation behind Angular Fullstack Ionic is to streamline the development of projects that include an API, Angular webapp and Ionic app. It’s core design principles include sharing code and assets wherever possible, creating an efficient workflow and making it super easy to start off a project with handy components available out of the box (e.g. user signup/login). 

It is based on the brilliant Yeoman angular-fullstack project.

##### Get started
*Note this project in the early stages - so please read the points below before jumping in!*
```
npm install
bower install
grunt serve
```
##### Dependencies
If you don't have it already, you'll need Sass: ```gem install sass```

You'll also need MongoDB to be up and running: http://docs.mongodb.org/manual/installation/

### Implemented so far
* Grunt development workflow to serve webapp and ionic app in two browser tabs
* Frontend (client) directory with
  * webapp - Jade, JS, SCSS and assets specific to webapp
  * ionic -  HTML, JS, SCSS and assets specific to ionic app
  * common - SCSS and assets shared between webapp and ionic app
  
### Next steps
* Wire up grunt dist tasks to work with new client folder structure
* Implement user login in Ionic app
* Implement shared components (e.g. angular directives, etc)
* Implement shared fonts
* Support plain HTML as well as Jade for webapp
* Support Jade as well as plain HTML for ionic app

### Get involved
The eventual aim of this project is to create an extension to the Yeoman generator-angular-fullstack

Please contact @richardgsands if you'd like to help out!
