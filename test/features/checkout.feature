Feature: Checkout Flow

  Scenario: User completes a full purchase
    Given I am logged in
    When I add a product to the cart
    And I proceed to checkout
    And I enter checkout information
    And I finish the order
    Then I should see the order confirmation message
