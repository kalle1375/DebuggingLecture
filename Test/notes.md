Oslo: Oslo is being sent to the wrong location. We should get console.log or window.alert with the correct location. 

Solutions:
* set the oslo.location to the dispatchLocation variable
* should only update the card IF we get the right location
* after oslo is dispatched... his status should change and update the card (note that the updateOsloCard function is specifically checking if Oslo's status is true or false and this bool must be flipped accordingly)


Xanther:Xanther is being dispatched to a mission he doesn't have the skills for!

Solutions:
* missionSkills is not defined; this variable is declared and scoped w/in the dispatchOslo function
* if statement is using single '=' operator instead of '==' and assigning the value to the missionSkills array, thus rendering the statement always true
* updateXanther() call is in the wrong spot..is not sitting inside the if statement so it runs every time dispatchXanther() runs
* need to add an else clause to make sure we get a console log stating Xanther cannot be dispatched

Koko: Koko is a newer agent and we need to make sure Koko isn't being dispatched to a mission for a senior agent. Make sure that Koko is dispatched to any level that they have the appropriate age for. For example: a senior agent can be dispatched to not only a senior mission, but also a seasoned, rookie, or newbie mission. A rookie agent can be dispatched to rookie and newbie missions, but not to a seasoned or senior mission.

Solutions:
**note that solving this function is more about logic rather than just solving errors**
* "disptachKoko is undefined": there is a typo in the name of the disptach koko function and the onclick is unable to find the correct function
* the first if statement is using the '=' when comparing the senior age and will cause the function to innappropriately 'dispatch' Koko
* check the data types for the mission ages: some of the data types will not satisfy the comparison operators ('===' and '==') in the if statements
* make sure to add the '>=' comparisons to the if statements to guarantee you are satisfying every age/clearance 
 