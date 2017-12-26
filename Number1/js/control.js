// Controller support!

ctrl = {
	registry: {},

	configure: function(){
		window.addEventListener("gamepadconnected", function(e) {
			console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
		    e.gamepad.index, e.gamepad.id,
		    e.gamepad.buttons.length, e.gamepad.axes.length);

		    this.registry[e.gamepad.index] = e.gamepad;
		});

		window.addEventListener("gamepaddisconnected", function(e) {
		 	console.log("Gamepad disconnected from index %d: %s",
		    e.gamepad.index, e.gamepad.id);

		    this.registry[e.gamepad.index] = undefined;
		});
	},

	autoUpdate: function(interval){
		setInterval(this.update, interval);
	},

	update: function(){
		for(var index in Object.keys(this.registry)){
			var gamepad = registry[index];

		}
	},
}

ctrl.configure();


