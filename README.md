# Logos-R-US
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Your application should use JestLinks https://www.npmjs.com/package/jest to an external site. For running the unit tests and InquirerLinks https://www.npmjs.com/package/inquirer/v/8.2.4 to an external site. For collecting input from the user. 

It is recommended that you start with a directory structure that looks like the following example:

├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions          

Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.

Helpful SVG Resources
Example SVGLinks to an external site.https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg 

Scalable Vector Graphics (SVG)Links to an external site.https://en.wikipedia.org/wiki/SVG 

SVG tutorialLinks to an external site.https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial 

Basic SVG shapesLinks to an external site.https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes 

Text in SVGLinks to an external site.https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts 

SVG VS Code extension  https://marketplace.visualstudio.com/items?itemName=jock.svg 

This Challenge is graded based on the following criteria:

Deliverables: 15%
At least one sample SVG file generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 32%
A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

The README.md file must include a link to the walkthrough video.

The walkthrough video must show all tests passing from the command line.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Uses the Inquirer packageLinks to an external site..

Uses the Jest packageLinks to an external site. for a suite of unit tests.

The application must have Triangle, Square, and Circle classes.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality readme with description and a link to a walkthrough video.

How to Submit the Challenge
You are required to submit the following for review:

A walkthrough video that demonstrates the functionality of the application and passing tests.

At least one sample SVG file generated using your application.

The URL of the GitHub repository, with a unique name and a README describing the project.

