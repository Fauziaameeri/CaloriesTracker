//this registers the button click events when the
//page loads
window.onload = function() {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
	let lbs_count = document.getElementById("lbs").value;
	if (lbs_count.length == 0)
		output("Pound field is empty");
	else {
	kgs_count = 0.453592 * lbs_count;
	let msg = lbs_count + " pounds is "  + kgs_count + " kilograms"
	output(msg);
	}
}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{
	let workout = document.getElementById("workouts").value;
	let met_value;
	if(workout=="bicycling")
		met_value = 14.0
	else if(workout=="calisthenics")
		met_value = 8.0
	else if(workout=="Elliptical trainer")
		met_value = 5.0
	else if(workout=="stair-treadmill ergometer")
		met_value = 9.0
	else if(workout=="rowing")
		met_value = 6.0
	else if(workout=="whirlpool")
		met_value = 1.3
	else if(workout=="knitting")
		met_value = 1.3
	else
		met_value = 4.0
	let msg = workout + " has a MET value of "  + met_value
	output(msg);
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories()
{
	let met_val = document.getElementById("met").value;
	let weight_val = document.getElementById("kgs").value;
	if (met_val.length == 0)
		output("MET value not found");
	else if (weight_val.length == 0)
		output("Weight value not found")
	else {
	let calories = (3.5 * met_val * weight_val) / 200
	let msg = "MET " + met_val + ", weight " + weight_val +" = burns " + calories + " calories per minute"
	output(msg);
	}
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}