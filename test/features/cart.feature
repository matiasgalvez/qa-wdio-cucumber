Feature: Add product to cart

  Scenario: Add backpack to cart successfully
    Given I am logged in
    When I add the backpack to the cart
    Then the cart badge should show "1"
    And the backpack should be visible in the cart
