Feature: Login functionality

  Scenario Outline: Login with different users
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see "<result>"

    Examples:
      | username        | password       | result     |
      | standard_user   | secret_sauce   | inventory  |
      | locked_out_user | secret_sauce   | error      |
