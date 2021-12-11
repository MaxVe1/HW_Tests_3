Feature: Navigation Look

  Scenario Outline: Menu has "<email>" and "<password>" 
    When I go to url: "https://viktor-silakov.github.io/course-sut/index.html?quick"    
    When I fill "<email>" and "<password>" and check message 
    Then I get "<message>" error message             
    Examples:
      | email                       | password       | message                |
      | walker@jw.com               | password1      | Fail to login          |
      | walker@jw.com               |                | Password is empty      |
      |                             | password       | Login is empty         |
      | old_walker@jw.com           | password1      | The user is suspended  |
      | password                    | walker@jw.com  | Fail to login          |
      | admin                       | admin          | Fail to login          |
      | user                        | 123            | Fail to login          |
      | dlink                       | dlink          | Fail to login          |
      | user                        |                | Password is empty      |
      | admin                       |                | Password is empty      |
      |                             |                | Password is empty      |
     

  
     
