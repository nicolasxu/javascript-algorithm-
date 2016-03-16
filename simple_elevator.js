function solution(A, B, M, X, Y) {

	var maxFloor = M; // starts from 0
	var weights = A;
	var targets = B;
	var personLimit = X;
	var weightLimit = Y;

	var elevatorCar = []; // containing the index of person in elevator car
	var carWeight = 0;
	var carPersonCount = 0;
	var stopCount = 0;

	while(weights.length > 0) {

	// 0. stops at ground floor
	stopCount++; // counting the first stop
	
	// 1. load person, considerring the count and weight limit
	while(carWeight + weights[0] <= weightLimit && carPersonCount +1 <= personLimit) {
		// loading
		elevatorCar.push([weights[0], targets[0]]);
		
		carWeight = carWeight + weights[0];
		carPersonCount++;
		weights.shift();
		targets.shift();

	}

		// 2. go to stops, unload
		// unload anybody who goes the same floor
		// build a data structure with foor and person to unload
		var floorPersonIndexInCar = {}; // e.g.{floor: [reference, refernece, ...]}
		elevatorCar.forEach(function(person){
			if(floorPersonIndexInCar[person[1]]) {
				floorPersonIndexInCar[person[1]].push(person);
			} else {
				floorPersonIndexInCar[person[1]] = [];
				floorPersonIndexInCar[person[1]].push(person);
			}
		});

		for(var floor in floorPersonIndexInCar) {
			stopCount++; // count stops at each unload
			console.log(floorPersonIndexInCar);
			console.log("-------------------");
			while(floorPersonIndexInCar[floor].length > 0) {
				floorPersonIndexInCar[floor].pop();
				elevatorCar.shift();
			}
			// now floorPersonIndexInCar is { 3: []} // 3rd floor, nobody
		}
		floorPersonIndexInCar = {};
		// 3. reset current car weight
		carWeight = 0;
		carPersonCount = 0;
		// this cycle is done
	}
	return stopCount;
}

var A = [60, 80, 40];
var B = [2, 3, 5];
var M  = 5;
var X = 2;
var Y = 200;

var result = solution(A, B, M, X, Y);

console.log("result: " + result);