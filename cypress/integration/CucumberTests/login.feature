Feature: Login Feature
    Login validation test cases
@focus
Scenario: Login with valid credentials
Given I login to the application
When I enter username as "testautomation@cypresstest.com"
And I enter password as "Test@1234"
Then I click on sign in button
And I shuld be on the home page

Scenario: Login with invalid credentials
Given I login to the application
When I enter username as "invalidUser@cypresstest.com"
And I enter password as "Test@1234"
Then I click on sign in button
And I shuld see the error message