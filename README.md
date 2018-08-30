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

### Mac and Windows -> Add a User to Use Application
1. Open Mongo shell
2. Go into QuestWich database ```use Questwich```
3. Verify no users exist ```db.user.count()```
4. Insert user ```db.user.insert({"username": "Manda", "password":"password", "firstName": "Amanda", "lastName":"Maifeld", "email":"a.maifeld@hotmail.com", "birthdate": "4/1/1986","status":"noob", "biography":"Testing out new app as user", "createdDate":"5/1/2018", "closedDate":"", "picture":"https://vignette.wikia.nocookie.net/marveldatabase/images/d/da/Nomi_Blume_%28Earth-1610%29_from_X-Men_Blue_Vol_1_5_001.jpg/revision/latest/scale-to-width-down/324?cb=20170617182306", "totalProgressCompleted":42, "totalProgressPending":100, "skillListID":"42", "traitListId":"42", "lastModifiedDate":"7/23/2018"})```
5. Verify added user ```db.user.count()```
6. Try logging into application

## :circus_tent: Starting the Application
### Terminal - Windows
1. To Run Mongo open terminal and run ```mongod```
2. To Run app server open terminal to Quest-Portal/server and run ```node app.js```
3. To Run front-end application open terminal to Quest-Portal and run ```npm start```

### Terminal - Mac
1. To Run Mongo open terminal and run ```brew services start Mongo``` if not installed with Homebrew run this command ```mongod --dbpath data/db```
2. To Listen using Mongo open terminal and run ```mongo --host 127.0.0.:270107``` <-- may not need this
3. To Run app server open terminal to Quest-Portal/server and run ```node app.js```
4. To Run front-end application open terminal to Quest-Portal and run ```npm start ```

### Internet Browser 
4. Open internet browser and go to [localhost:4200](localhost:4200)

## :gem: Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## :shipit: Style Definitions
:link: [Article on Stylesheet importance](https://designmodo.com/create-style-guides/)<br />
## :trophy: References and Tutorials Used
:link: [Creating a Blogging App Using Angular & MongoDB](https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-login--cms-30125)<br />
:link: [Adding Sass to Project](https://scotch.io/tutorials/using-sass-with-the-angular-cli)<br />
:link: [Jasmine and Karma Testing](https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/debug-test/basic-tests-with-jasmine?view=toolsforcordova-2017)<br />
:link: [Angular Testing](https://angular.io/guide/testing)<br />
:link: [Adding Dynamic Images](http://www.talkinghightech.com/en/angular-2-dynamic-urls-sanitizer/)<br />
:link: [Skill List](http://examples.yourdictionary.com/examples-of-skills.html)<br />
:link: [Career-based Skill list](https://novoresume.com/career-blog/most-important-skills-to-put-on-your-resume)<br />
:link: [Skill Definition](https://www.google.com/search?rlz=1C5CHFA_enUS755US757&q=Dictionary#dobs=skill)<br />
:link: [Trait list](http://ideonomy.mit.edu/essays/traits.html)<br />
:link: [Trait Definition](https://www.google.com/search?q=trait&rlz=1C5CHFA_enUS755US757&oq=trait&aqs=chrome..69i57j0l2j69i60l3.4901j1j7&sourceid=chrome&ie=UTF-8)<br />
:link: [Hobbies and Skills List](http://jillwilliamson.com/wp-content/uploads/2012/05/Character-Hobbies-and-Skills-Brainstorming-List.pdf)<br />
:link: [Workplace Trait List](https://www.monster.ca/career-advice/article/50-personality-traits-for-the-workplace-canada)<br />

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
## :notes: Mongo Notes
### Installation and Version Notes
* App works with Mongodb version 3.6 -> Currently getting errors with 4.0 version
* To install via homebrew run the following command ```brew install mongodb@3.6```
* To run via homebrew run the following command ```brew services start mongodb@3.6```
### General Notes
* Start Mongo ```brew services start mongodb```
* Access Shell ```mongo```
* Shut Down Mongo ```brew services stop mongodb```
* Restart Mongo ```brew services restart mongodb```
* More Options ```brew info mongodb```
:link: [Provided by Stack Overflow](https://stackoverflow.com/questions/18452023/installing-and-running-mongodb-on-osx)<br />

### Mongo Commands
:link: [CheatSheet from Open Tech Guides](https://www.opentechguides.com/how-to/article/mongodb/118/mongodb-cheatsheat.html)

## :notes: Helpful Commands and Notes
* Generate new components to project ```ng generate component [componentName]```
* [Github emojis](https://gist.github.com/rxaviers/7360908)

## :hammer: Built With

:link: [Node.js](https://nodejs.org/) - The web framework used<br />
:link: [Karma](http://karma-runner.github.io/2.0/index.html) - Used for Testing Angular Application<br />
:link: [Jasmine](https://jasmine.github.io/1.3/introduction.html) - Used for Testing Angular Application<br />
:link: [Yarn](https://yarnpkg.com/en/) - Used to install bootstrap<br />
:link: [Visual Studio Code](https://code.visualstudio.com) - Used for all coding for this application<br />
:link: [Angular CLI](https://cli.angular.io) - Used to create new application <br />
:link: [Angular 6](https://angular.io) - The basic framework used for the application<br />
:link: [MongoDB](https://docs.mongodb.com/manual/installation/) - The databased used for back end of application<br />
:link: [Express.js](https://expressjs.com/) - Used for data/api manipulation<br />
:link: [Mongoose.js](mongoosejs.com/) - Used for data schemas and data/api manipulation<br />
:link: [GoogleFonts](https://fonts.google.com/) - Web fonts to use on site<br />
:link: [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Basic App style prior to SCSS tinkering<br />
:link: [FontAwesome](https://fontawesome.com/get-started) - Used to generate icons<br />
:link: [LucidChart](https://www.lucidchart.com/) - To create diagram for application<br />

## Application Architecture/Structure
![Diagram for Application](https://github.com/MandaMai/QuestWich/blob/master/Quest-Portal/src/assets/imageFiles/QuestWichDiagram.png)<br />

### Changes from Diagram Above
* User.nickname has changed to User.username

## :clapper: Google Fonts Used
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Crimson+Text|);

font-family: 'Crimson Text', serif;
font-family: 'Amatic SC', cursive;

* [Amatic SC](https://fonts.google.com/specimen/Amatic+SC) - Handwriting
* [Crimson Text](https://fonts.google.com/specimen/Crimson+Text?selection.family=Crimson+Text) - Most Site Content

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

## :camera: Image Resources
* [Flag from logo](https://freedesignresources.net/vintage-vector-flags/) by Wiki Williams<br />
* [Sandwich from logo](https://www.freepik.com/free-photos-vectors/food) Food vector created by Dooder - Freepik.com<br />
* [Sandwich vector](https://www.vecteezy.com)
```<a target="_blank" href="https://www.vecteezy.com">Vector Graphics by www.vecteezy.com</a>```
* [Temporary profile picture](http://marvel.wikia.com/wiki/Nomi_Blume_(Earth-1610))<br />
* [Quest Map](http://quartermaester.info/)<br />
* [Quest Image](http://gameofthrones.wikia.com/wiki/Daenerys_Targaryen)<br />
* [Muppet Alignment Chart](https://www.pinterest.com/pin/85216617918919824/?lp=true)<br />
* [Harry Potter Alignment Chart](https://rantingsoftheninjarobot.files.wordpress.com/2012/01/harry-potter-custom.jpg)<br />
* [Game of Thorones Alignment Chart2](https://imgur.com/gallery/74x0R)<br />
* [Game of Thrones Alignment Chart](https://winteriscoming.net/2018/07/29/alignment-chart-weighs-morality-of-game-of-thrones-characters/)<br />

## :shipit: Color Palette
### :heavy_check_mark: Main Site Colors
* #41848F
* #72A7A3
* #97C0B7
* #F6F5F0
* #192B33
### :heavy_check_mark: Backup Colors
* #33697F
* #402826
* #5A5E26
* #787D39
* #4C707F
* #403630


