Feature: ATM withdraw (Outline)
  
  Scenario Outline: User withdraws money and gets <message>
    Given my account balance is "<balance>"
    Given the ATM contains "<moneyAmount>"
    When I withdraw "<withdrawAmount>"
    Then I get "<message>" message 
Examples:
      | balance    | moneyAmount    | withdrawAmount | message                               |
      | 500        | 600            | 50             | Take your money!                      |
      | 500        | 600            | 550            | You don't have enough money!          |
      | 500        | 150            | 300            | The machine is not have enough money! |