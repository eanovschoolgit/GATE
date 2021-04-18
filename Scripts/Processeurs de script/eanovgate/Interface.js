Content.makeFrontInterface(400, 400);



const var Dynamics = Synth.getEffect("Dynamics");
const var Knob1 = Content.getComponent("Knob1");





const var t = Engine.createTimerObject();
t.setTimerCallback(function()
{
	var v = Dynamics.getAttribute(Dynamics.GateReduction);
	
	v = Engine.getDecibelsForGainFactor(v);
	
	Knob1.setValue(v);
});

t.startTimer(30);





inline function onTHRESHOLDControl(component, value)
{
	Dynamics.setAttribute(Dynamics.GateThreshold, -value);
};

Content.getComponent("THRESHOLD").setControlCallback(onTHRESHOLDControl);
function onNoteOn(
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
