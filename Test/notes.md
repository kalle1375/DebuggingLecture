Oslo: Oslo is being sent to the wrong location. We should get (console.log or window.alert) with the correct location. Break a couple of things and work through them one by one

* set the oslo.location to the dispatchLocation variable
* should only update the card IF we get the right location
* after oslo is dispatched... his status should change and update the card
** consloe logs for readme:
	- oslo object should console.log with correct location

Xanther:Xanther is being dispatched to a mission he doesn't have the skills for!
* missionSkills is not defined; this variable is declared and scoped w/in the dispatchOslo function
* if statement is using single '=' operator instead of '==' and assigning the value to the missionSkills array, thus rendering the statement always true
* updateXanther() call is in the wrong spot..is not sitting inside the if statement so it runs every time dispatchXanther() runs
**console.logs for readme:
	- console.log saying xanther cannot be dispatched if if statment is not true

Koko: Koko is a newer agent and we need to make sure Koko isn't being dispatched to a mission for a senior agent. Make sure that Koko is dispatched to any level that they have the appropriate age for.
 