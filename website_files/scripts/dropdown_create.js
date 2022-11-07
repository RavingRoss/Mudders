//WILL NOT RUN, currently pseudocode - 11/2/22 3:47 pm

async function createDropDown(divName) //divname:String, name of the element we add the datalist to.
{
	//define a datalist object for our dropdown menu
	const dropDown = document.createElement("datalist");
	dropDown.setAttribute("id", divName);
	
	var trails_to_search = await getData("scripts/trail_info.php");
	//loop through a hypothetical array of names
	for(let i=0; i < Object.keys(trails_to_search).length; i++)
	{
		//create an opption element and set its value to the name of our trail
		var addOption = document.createElement("option");
		addOption.setAttribute("value", trails_to_search[i].name);
		
		//add option element to our datalist
		dropDown.appendChild(addOption);
	}
	
	//get the element we're adding the datalist to and add it
	const element = document.getElementById(divName);
	element.appendChild(dropDown);
	
	console.log("createDropDown ran successfully.");
	//:D
}

createDropDown("trail_search");