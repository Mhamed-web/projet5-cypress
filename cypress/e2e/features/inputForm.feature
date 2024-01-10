Feature: Login
  As user I want to log in orangehrm
 
  Scenario Outline: Check login with valid credentials
    Given the user is on the home page
    When the user enters "<username>" and "<password>"
    And the user clicks on login button
    Then the user is on the dashboard page
 
    Examples:
      | username         | password |
      | standard_user    | secret_sauce |
      | standard_user    | secret_sauddce |

