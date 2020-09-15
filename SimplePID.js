// Separate file for the PID
var Pcont
var Icont
var Dcont
function simplePID(Time, CurrErrX, PrevErrX, KP, KI, KD, Pcont, Icont, Dcont){
	Pcont = (CurrErrX*KP);
	Icont = (KI*CurrErrX)+(Ki*PrevErrX);
	Dcont = KD*((PrevErrX-CurrErrX)/(Time));
};