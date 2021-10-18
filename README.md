# Cypress-cucumber-BDD-Automation-Framework

**This Framework contains sample code for # Cypress-cucumber-BDD-Automation-Framework**
---------------------------------------------------------------------------------------------
- 1 feature (feature file)

- 2 Scenarios

- Simple login scenario with valid credentials and with invalid credentials

- Parameterization has been used for providing login credentials.

----------------------------------------------------------------------------------------------
**Directory Structure**

<img width="1207" alt="Screenshot 2021-10-18 at 5 26 27 PM" src="https://user-images.githubusercontent.com/6477971/137725739-09379530-ddd6-4aef-8a91-043c9012c21d.png">

--------------------------------------------------------------------------------------------------------------------------------------------------------

**Steps to run**
----------------------------------------------------------------------------------------------

- Clone the repository using "git clone "

- Change "Username" and "Password" in both scenarios in feature file

- npm install

- npm run test

----------------------------------------------------------------------------------------------
Output
----------------------------------------------------------------------------------------------

<img width="1682" alt="Screenshot 2021-10-18 at 5 25 37 PM" src="https://user-images.githubusercontent.com/6477971/137728286-c85ffccc-242e-4942-ab57-ff0a37315dfc.png">

--------------------------------------------------------------------------------------------------------------------------------------------------------

# Steps to integrate cucumber with Cypress.
----------------------------------------------------------------------------------------------
To do so, we would have to use some external plugins. Please follow the steps mentioned below.

- Install the cucumber plugin by running the following command.

      npm install cypress-cucumber-preprocessor

- After installing the plugin, add this code snippet in the index.js file under the plugins folder.

      const cucumber = require('cypress-cucumber-preprocessor').default

      module.exports = (on, config) => {
          on('file:preprocessor', cucumber())
      }

- Then to make cypress recognise the .feature extension, we would have to add this in our cypress.json file.

      {
        "testFiles": "**/*.feature"
      }
      
- After that, we also have to add the following in the package.json file.

      "cypress-cucumber-preprocessor": {
        "nonGlobalStepDefinitions": true
      }
