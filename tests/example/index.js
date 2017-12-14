var power_level = [100, 200, 300, 400, 500];
var frisbees = ["putter", "mid-range", "driver"];

function getLength(ele) {
   cycleList(ele.value);
}

function cycleList(value) {
	for (var i = 0; i < power_level.length; i++) {
        for (var x = 0; x < frisbees.length; x++ ){
            var fA = value;
            var fT = 0;
            var pL = power_level[i];
            var v = 0;
            
            if (frisbees[x]=='putter') {
                fT = 1;
                v = fA * fT * pL;
                paintView('putter', i, v);    
            }
            if (frisbees[x]=='mid-range') {
                fT = 2;
                v = fA * fT * pL;
                paintView('mid-range', i, v);    
            }
            if (frisbees[x]=='driver') {
                fT = 3;
                v = Math.round( fA * fT * pL);
                paintView('driver', i, v);
            }
            
            
            
        }
        
		
		
	}
}

function paintView(element_name, index, value) {
	// console.log('here', value);
	document.getElementById(element_name + index).innerHTML = value;
} 