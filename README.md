# :flags: QuestWich  :circus_tent:
One Paragraph of project description goes here<br />
Test application for logging awesomeness and areas of improvement

## :cd: Creating the Application
### Windows Instructions
1. Create new application
```ng new Quest-Portal --style=scss```
2. Install and Update Additional Packages from Node
```
ng update @angular/cli
ng update @angular/core
npm install jquery popper.js --save
npm install --save express mongoose express body-parser morgan serve-favicon hoek rxjs
```
3. Install [Yarn](https://yarnpkg.com/en/docs/install#windows-stable) if needed
4. Install bootstrap to application
```yarn add bootstrap ngx-bootstrap```<br /><br />
:pencil2: If you get an error with rxjs download this version (I definitely did)  ```"rxjs": "^5.6.0-forward-compat.4",``` and change import statement to look at 'rxjs'.

### MAC Instructions
1. Save file to computer
2. Run ng and npm commands above in project directory
3. Ensure XCode is installed.
4. Use Homebrew to install/update Mongo to computer

## :circus_tent: Starting the Application
### Terminal
1. To Run Mongo open terminal and run ```mongod```
2. To Run app server open terminal to Quest-Portal/server and run ```node app.js```
3. To Run front-end application open terminal to Quest-Portal and run ```npm start```
### Internet Browser 
4. Open internet browser and go to [localhost:4200](localhost:4200)

## :gem: Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## :trophy: References and Tutorials Used
:link: [Creating a Blogging App Using Angular & MongoDB](https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-login--cms-30125)<br />
:link: [Adding Sass to Project](https://scotch.io/tutorials/using-sass-with-the-angular-cli)<br />
:link: [Jasmine and Karma Testing](https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/debug-test/basic-tests-with-jasmine?view=toolsforcordova-2017)<br />
:link: [Angular Testing](https://angular.io/guide/testing)<br />

## :octocat: Pushing Changes to Git
###  :computer: Through Commandline
1. Go to application folder (Quest-Portal)
2. Pull any existing changes
```git pull```
3. Add changes to stage
```git add .```
4. Check what was added
```git status```
5. Commit changes
```
git commit -m "basic note for what was changed"
```
6. Push changes to git
```git push```
7. You may be prompted to log into Git in order for changes to be accepted successfully

### :crystal_ball: Through Visual Studio Code
1. Navigate to Source Control Tab (on right-hand side of application)
1. Create New Branch in VS Code
1. Make Code Changes
1. Navigate to Source Control Tab (on right-hand side of application)
1. Click Three Dots (...) And Select Pull
1. Enter Commit Message
1. Click Check Mark
1. When Prompted Let Visual Studio Code Stage Changes
1. Click Three Dots (...) And Select Push
1. Navigate to GitHub Project [QuestWich](https://github.com/MandaMai/QuestWich)
1. Click Button to Create Pull Request
1. Navigate to Pull Requests and Ensure Request Can Merge
1. Merge Branch to Master
1. Navigate back to VS Code to the Source Control Tab
1. Click Three Dots (...) And Select Pull

## Using the Application -> When Done
These instructions will give you an idea about how the application works and how to use it.  
### Data Diagram
### Use Diagram

## :running: Running the tests
Explain how to run the automated tests for this system

### :page_with_curl: Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### :page_with_curl: And coding style tests

Explain what these tests test and why

```
Give an example
```
## :hammer: Built With

:link: [Node.js](https://nodejs.org/) - The web framework used<br />
:link: [Karma](http://karma-runner.github.io/2.0/index.html) - Used for Testing Angular Application<br />
:link: [Jasmine](https://jasmine.github.io/1.3/introduction.html) - Used for Testing Angular Application<br />
:link: [Yarn](https://yarnpkg.com/en/) - Used to install bootstrap<br />
:link: [Visual Studio Code](https://code.visualstudio.com) - Used for all coding for this application<br />
:link: [Angular CLI](https://cli.angular.io) - Used to create new application <br />
:link: [Angular 6](https://angular.io) - The basic framework used for the application<br />
:link: [MongoDB](https://docs.mongodb.com/manual/installation/) - The databased used for back end of application<br />
:link: [Express.js](https://expressjs.com/) - Need more info but used for data/api manipulation<br />
:link: [Mongoose.js](mongoosejs.com/) - I believe this was used for data schemas and data/api manipulation<br />
:link: [GoogleFonts](https://fonts.google.com/) - Web fonts to use on site<br />
:link: [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Basic App style prior to SCSS tinkering<br />
:link: [FontAwesome](https://fontawesome.com/get-started) - Used to generate icons<br />

## :clapper: Google Fonts Possibly Used
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Caveat|Crimson+Text|Lato|Nanum+Brush+Script|Open+Sans|Oswald|Playfair+Display|Questrial|Raleway|Roboto|Roboto+Condensed|Roboto+Slab|Tangerine');

font-family: 'Roboto Condensed', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Oswald', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto Slab', serif;
font-family: 'Playfair Display', serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Lato', sans-serif;
font-family: 'Crimson Text', serif;
font-family: 'Amatic SC', cursive;
font-family: 'Caveat', cursive;
font-family: 'Tangerine', cursive;
font-family: 'Nanum Brush Script', cursive;
font-family: 'Questrial', sans-serif;

## :notebook: Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## :book: Author

* **Amanda Maifeld** - *Initial work* - [MandaMai](https://github.com/MandaMai)

## :rainbow: License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## :tophat: Acknowledgments - Tip of the Hat and Whatnot
* The Nerdist by Chris Hardwick [Chris Hardwick's Post on The Nerdist Site](https://nerdist.com/the-nerdist-way/) and [Amazon Link](https://www.amazon.com/Nerdist-Way-Reach-Next-Level/dp/1511364483)
* This project was started using the tutorial found at this url:<br />
https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-login--cms-30125<br />
Huge shout out as this was by far the best tutorial and easiest to follow that I have encountered learning Angular so far.

