
// test case
// bowing ball always have 21 rolls
// "/" is a spare
// "X" is a strike
// in the last frame, 
// 		1st is X, you get total 3 rolls in last frame
// 		2nd is \, you get total 3 rolls in last frame
// 		anything else, you get 2 rolls
var pinDown1 = ['0', '0', '0', '0', '0','0','0', '0', '0', '0', '0','0', '0', '0', '0', '0', '0','0', '0', '0', '0'];
// 0
var pinDown2 = ['X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', '0', 'X', 'X', 'X'];
// 300
var pinDown3 = ['X', '0', 'X', '0', 'X', '0', '0', '0', '0', '0', '0','0', '0', '0', '0', '0', '0','0', '0', '0', '0'];
// 60
var pinDown4 = ['1', '/', '3', '4', 'X', '0', '0', '0', '0', '0', '0','0', '0', '0', '0', '0', '9','0', 'a', 'b', 'c'];
var pinDown5 = ['1', '2', 'X', '0', 'X', '0', 'X', '0', '0', '0', '0','0', '0', '0', '0', '0', '9', '0', '0', '0', '0'];


function calculateScore(pinDowns)  {
	var Flag = {"Spare": 1, "Strike": 1};
	var frameCount = 1;
	var rollIndex = 0;
	var countInFrame = 0;

	while(frameCount <= 10) {
		console.log(frameCount);
		if(frameCount < 10){
			
			countInFrame = 0;
			while(countInFrame < 2) {
			
				if(pinDowns[(frameCount -1)*2 + countInFrame] === 'X') {
				
					console.log("strike at: " + ((frameCount -1)*2 + countInFrame));
					frameCount++;
					continue;
				} 
				countInFrame++;
			}
			
		} 

		if(frameCount === 10) {
			frameCount++;
		}

	}
}

calculateScore(pinDown5);