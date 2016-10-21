# build-rest-api-with-express-v1

In this project, you’ll create a REST API using Express. The API will provide a way for users to review educational courses: users can see a list of courses in a database; add courses to the database; and add reviews for a specific course.

To complete this project, you’ll use your knowledge of REST API design, Node.js, and Express to create API routes, along with Mongoose and MongoDB for data modeling, validation, and persistence.

In addition to common developer tools like Postman, we’ve provided you with an AngularJS single page application that you can use to test and exercise your REST API. The AngularJS application includes views to display a list of courses, display the details for a course including reviews and ability to post/delete a review, create or update a course, register a user, and login a user.

Your REST API will include two main resources, “courses” and “users”, containing the following routes:

- /api/courses - GET - Returns a list of courses - POST - Creates a course
- /api/courses/:id - GET - Returns a single course - PUT - Updates a course
- /api/courses/:courseId/reviews - POST - Creates a review for the specified course
- /api/courses/:courseId/reviews/:id - DELETE - Deletes a review
- /api/users - POST - Creates a user
- /api/users/ - GET - Returns the current user

##Before you start

To prepare for this project you'll need to make sure you complete and understand these steps.

###9 steps

**Have a GitHub account and know how to create a new repository and upload files to it. As with the previous projects, you'll submit your finished working using GitHub.**

**If you need a reminder on how to use GitHub and GitHub desktop to create a new repository check out the workshop 'Share Your Projects wIth GitHub Desktop' in the Project Resources.**

**Download the project files. We've supplied the following files for you to use:**
* The app folder contains all of the JavaScript source code for the provided AngularJS application. You won’t be making any changes to any of the files in this folder, but you’re welcome to (optionally) explore the code to see how the AngularJS application functions. We're using webpack to bundle these JavaScript files into a single JavaScript file that is copied to the public/scripts folder (see the app.bundle.js file).
* The public folder contains the static files (HTML, CSS) and webpack bundled JavaScript files for the AngularJS application.
* The index.html file is the one and only HTML page in the application (this is a single page application after all!) It also contains a script tag containing the JavaScript where you can switch between using the in-browser mock data and your REST API.

* The src folder is where you'll be building your Node.js REST API. We’ve provided some files to get you started.
* The data/data.json file contains seed data for your database that can be used in conjunction with the mongoose-seeder npm package.
* The index.js file configures Express to serve the static files in the public folder. We've also configured the morgan npm package to log HTTP requests/responses to the console.

* We’ve included a .gitignore file to ensure that the node_modules folder doesn't get pushed to your GitHub repo.
* The CourseAPI.json.postman_collection file is a collection of Postman requests that you can use to test and explore your REST API.
* The nodemon.js file configures the nodemon Node.js module, which we are using to run your REST API.
* The package.json file is the project’s npm configuration, which includes the project’s dependencies.
* The webpack.config.js file is the project's webpack configuration.

**Ensure that you have Node.js installed.**
* Open a Command Prompt (on Windows) or Terminal (on Mac OS X) instance and run the command node -v and npm -v.
* If either of those commands failed (i.e. did not return a version number) then you’ll need to install Node.js and/or NPM.

**Ensure that you have MongoDB installed.**
* Open a Command Prompt (on Windows) or Terminal (on Mac OS X) instance and run the command mongod (or sudo mongod) to start the MongoDB daemon.
* If that command failed then you’ll need to install MongoDB.


**We’ve provided you with a basic project to get started. When developing your REST API, just add your code to the src folder. To test your REST API, you’ll need to run the provided Node.js Express application locally on your PC.**
* Open a Command Prompt (on Windows) or Terminal (on Mac OS X and Linux) instance and browse to the root project folder.
* Run the command npm install to install the required dependencies.
* Run the command npm start to run the Node.js Express application using nodemon. Using nodemon gives you the ability to leave your application running while you edit your application’s code (nodemon will restart your Node.js application when it detects that you’ve made changes to your code).
* Open your web browser and browse to http://localhost:5000. You should see the provided AngularJS client side application.
* You can press Ctrl-C to stop the Node.js REST API.

**When you’re ready, you can configure the provided AngularJS client side application to use your REST API instead of the in-browser mock data.**
* Open the public/index.html HTML file into the editor of your choice.
* Change the constants.useMockData property value to false.
* Run the application (by using the npm start command) and browse to http://localhost:5000. If you already had the application loaded into your browser, be sure to refresh the page.
* The “mock data” alert at the top of the page should no longer be visible, indicating that the AngularJS application is now using your REST API.

**As you build out your REST API, you’ll naturally encounter errors and unexpected behavior. Here are some reminders and suggestions on how to debug your REST API.**
* If Node.js crashed as a result of the error, you can look in the Command Prompt (on Windows) or Terminal (on Mac OS X and Linux) window and see the exception information.
* Sometimes errors don’t result in exceptions, but instead are returned as 400 or 500 HTTP status codes. Errors returned from your REST API will be logged to your browser’s console, so you can open your browser’s web developer tools and look at the error information in the console.
* For a deeper, more detailed analysis of the state of your application, you can use tools like ironNode to debug your Node.js application. See http://s-a.github.io/iron-node/ for more information.

**Postman is a great Chrome App that you can use to explore and test REST APIs. To help you jumpstart the exploration process, we’ve provided you with a collection of Postman requests as part of the project files. Here’s how to load the provided collection into Postman:**
* If you haven’t already, install Postman. Links and instructions are available on their website at https://www.getpostman.com/.
* Once you have Postman installed and open, click on the “Import” button in the top left hand corner of the application’s window.
* In the opened dialog, click the “Choose Files” button and browse to the folder that contains your project files.
* Select the CourseAPI.json.postman_collection file.
* You should now see the Course API collection in the left hand pane of the main Postman window.
* Click on one of the available requests to load it into a tab. Click on the Request button to issue the request to the local server.
* Be sure that your REST API is currently running (see the previous project step for details).

##Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

###16 steps

**Stub out the required REST API routes.**
* Using Express, set up the following routes (listed in the format HTTP VERB Route HTTP Status Code):
* GET /api/courses 200 - Returns the Course "_id" and "title" properties
* GET /api/course/:id 200 - Returns all Course properties and related documents for the provided course ID
* POST /api/courses 201 - Creates a course, sets the Location header, and returns no content
* PUT /api/courses/:id 204 - Updates a course and returns no content
* GET /api/users 200 - Returns the currently authenticated user
* POST /api/users 201 - Creates a user, sets the Location header to "/", and returns no content
* POST /api/courses/:courseId/reviews 201 - Creates a review for the specified course ID, sets the Location header to the related course, and returns no content
* DELETE /api/courses/:courseId/reviews/:id 204 - Deletes the specified review and returns no content

**Update the GET /api/courses route to return static data.**
* Return an array of object literals with "_id" and "title" properties
* You should now be able to run the application (using npm start), browse to http://localhost:5000, and see your static data in the AngularJS application's "Courses" screen.

**Set up error handlers.**
* Add a global error handler middleware function that writes error information to the response in the JSON format.
* Add a middleware function to catch 404 errors and forward an error to the global error handler.

**Set up a database connection.**
* Use npm to install Mongoose.
* Using Mongoose, create a connection to your MongoDB database.
* Write a message to the console if there's an error connecting to the database.
* Write a message to the console once the connection has been successfully opened.

**Create your Mongoose schema and models.**
* The AngularJS application has been created to expect the following schema, so it's important that your database schema match what is listed below.
* *Course*
* _id (ObjectId, auto-generated)
* user (_id from the users collection)
* title (String)
* description (String)
* estimatedTime (String)
* materialsNeeded (String)
* steps (Array of objects that include stepNumber (Number), title (String) and description (String) properties)
*reviews (Array of ObjectId values, _id values from the reviews collection)
* *Review*
* _id (ObjectId, auto-generated)
* user (_id from the users collection)
* postedOn (Date)
* rating (Number)
* review (String)
* *User*
* _id (ObjectId, auto-generated)
* fullName (String)
* emailAddress (String)
* hashedPassword (String)

**Seed your database with data.**
* We've provided you with seed data in JSON format (see the src/data/data.json file) to work with the mongoose-seeder npm package.
* See https://github.com/SamVerschueren/mongoose-seeder for documentation on how to use mongoose-seeder.
* Important: mongoose-seeder requires an open connection to the database to be available, so ensure to not call your database seed code until Mongoose has successfully opened a connection to the database.
* Alternatively, you could use the MongoDB shell to insert data into your database.
* See https://docs.mongodb.org/getting-started/shell/client/ for documentation on the MongoDB shell.

**Update the Course schema with an overallRating virtual property.**
* overallRating is a calculated, read only property that returns the average of all of the review ratings for this course rounded to the nearest whole number.
* By not storing this calculated value in the database, we ensure that it's impossible for the value to get out of sync with the course's reviews.

**Update the GET api/courses and GET /api/courses/:id routes to return data from the database.**
* When returning a single course for the GET /api/courses/:id route, use Mongoose population to load the related user and reviews documents.
* You should now be able to see data from your database in the AngularJS application's "Courses" and "Course Detail" screens.

**Update the User model to store the user's password as a hashed value.**
* The AngularJS application will send you password and confirmPassword values in the request body when calling the POST /api/users route.
* For security reasons, we don't want to store either of those values in the database as clear text.
* Use the bcrypt npm package to hash the user's password.
* See https://github.com/ncb000gt/node.bcrypt.js/ for more information.

**Add validation to your Mongoose schema.**
* Mongoose validation gives you a rich set of tools to validate user data. See http://mongoosejs.com/docs/validation.html for more information.
* Your validation should satisfy the following requirements:
* Course
* Must have a title value
* Must have a description value
* Must have at least one step
* For each step...
* Must have a title value
* Must have a description value
* Review
* Must have a rating value
* The rating value must fall between “1” and “5” (inclusive) and is rounded to the nearest whole number
* User
* Must have a fullName value
* Must have an emailAddress value
* Must have a password value
* Must have a confirmPassword value
* The password and confirmPassword values must match
* The provided emailAddress is in the correct format
* The provided emailAddress must not be associated with an existing user

**Update the POST and PUT routes to return Mongoose validation errors.**
* The response should use the 400 status code.
* In order for the AngularJS application to be able to display your validation errors, convert the Mongoose validation errors into the following JSON data structure: { "message": "Validation Failed", "errors": { "property": [ { "code": "", "message": "" }, ... ] } }

**Set up basic authentication.**
* The AngularJS application will send an Authorization header with each request when a user is signed in.
* You can use the basic-auth npm package to parse the `Authorization' header into the user's credentials.
* Add a middleware function that attempts to get the user credentials from the request.
* If credentials are available, then attempt to get the user from the database by their email address.
* If a user was found for the provided email address, then check the user's password.
* Remember: The user's password is stored as a hashed value, so you'll need to hash the password from the user's credentials before you compare the two values. The bcrypt npm package provides a helper function that makes that process easy to do.
* If they match, then set the user's information on the request so that each following middleware function has access to it.
* If they don't match, then don't set the user information on the request.
* Update all routes that require authentication to check for the current user and return a 401 HTTP status code if not available.
* The following routes should require authentication:
* POST /api/courses
* PUT /api/courses/:id
* GET /api/users
* POST /api/courses/:courseId/reviews
* DELETE /api/courses/:courseId/reviews/:id

**Update the GET /api/users and POST /api/users routes to use the database.**
* Parse the JSON body to a JavaScript object.
* You should now be able to use the AngularJS application's "Sign In" and "Sign Up" screens to login and register users.

**Update the POST /api/courses and PUT /api/courses/:id routes to use the database.**
* When creating or updating a course set the step numbers to be equal to their index in the course steps array plus one.
* You should now be able to use the AngularJS application's "Add Course" and "Edit Course" screens to add and edit courses.

**Update the POST /api/courses/:courseId/reviews and DELETE /api/courses/:courseId/reviews/:id routes to use the database.**
* Default the review postedOn value to "now" (i.e. Date.now()) when creating reviews.
* You should now be able to use the AngularJS application's "Course Detail" screen to post and delete reviews.

**Add the following permissions.**
* Don't allow anything other than the current user's information to be returned from the GET /api/users route.
* Don't allow anyone other than the current user to add/edit courses.
* Don't allow anyone to delete a review other than the review's user and the course owner.
