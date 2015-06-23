/**
 * Simple Panel Animation
 * 
 * Simple panel animations for Panorama UI
 */ 

var DEFAULT_DURATION = "300.0ms";
var DEFAULT_EASE = "linear";

/* AnimatePanel
 * Animates a panel
 * 
 * Params:
 * 		panel 		- Panel to animate
 *		values 		- Dictionary containing the properties and values to animate.
 *					  Example: { "transform": "translateX(100);", "opacity": "0.5" }
 *		duration 	- The animation duration in seconds
 *		ease 		- Easing function to use. Example: "linear" or "ease-in"
 *		delay		- Time to wait before starting the animation in seconds
 */
function AnimatePanel(panel, values, duration, ease, delay)
{
	// generate transition string
	var durationString = (duration != null ? duration * 1000 + ".0ms" : DEFAULT_DURATION);
	var easeString = (ease != null ? ease : DEFAULT_EASE);
	var delayString = (delay != null ? delay * 1000 + ".0ms" : "0.0ms"); 
	var transitionString = durationString + " " + easeString + " " + delayString;

	// HACK +
	// For some reason I gotta set a dummy transition first, with just the duration
	// oterwise the first animation ever will be instantaneous (WHY?)
	panel.style.transition = "transform " + durationString + " ease 0s;";
	// -

	var i = 0;
	var finalTransition = ""
	for (var property in values)
	{
		// apply values
		panel.style[property] = values[property];

		// add property to transition
		finalTransition = finalTransition + (i > 0 ? ", " : "") + property + " " + transitionString;

		i++;
	}

	// apply transition
	panel.style.transition = finalTransition + ";";
}
