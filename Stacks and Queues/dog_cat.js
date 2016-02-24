/*



	3.7 An animal shelter holds only dogs and cats, and operates on a strictly "first in,
	first out" basis. People must adopt either the "oldest" (based on arrival time) of
	all animals at the shelter, or they can select whether they would prefer a dog or
	a cat (and will receive the oldest animal of that type). They cannot select which
	specific animal they would like. Create the data structures to maintain this system
	and implement operations such as enqueue, dequeueAny, dequeueDog and
	dequeueCat.You may use the built-in LinkedList data structure.


 */

function Animal(type, id) {
	this.type = type;
	this.id = id;
}

function ShelterQue() {
	var que = [];
	function enqueue(animal) {
		if(typeof animal === 'undefined') {
			return void 0;
		}
		if(animal.constructor.toString().indexOf('Animal') < 0) {
			// if not animal, return
			return void 0;
		}
		que.push(animal);
	}
	function deQueueAny() {
		return que.shift();
	}
	function dequeueDog() {
		for(var i = 0; i < que.length; i++) {
			if(que[i].type === 'dog') {
				return que.splice(i,1)[0];

			}
		}
	}
	function dequeueCat() {
		for(var i = 0; i < que.length; i++) {
			if(que[i].type === 'cat') {
				return	que.splice(i,1)[0];

			}
		}
	}
	return {
		enqueue: enqueue,
		dequeueAny: deQueueAny,
		dequeueDog: dequeueDog,
		dequeueCat: dequeueCat
	}
}


var que = new ShelterQue();
var dog1 = new Animal("dog", 11);
var dog2 = new Animal("dog", 12);
var dog3 = new Animal("dog", 13);
var dog4 = new Animal("dog", 14);
var dog5 = new Animal("dog", 15);

var cat1 = new Animal("cat", 22);
var cat2 = new Animal("cat", 23);



que.enqueue(dog1);
que.enqueue(dog2);
que.enqueue(dog3);
que.enqueue(dog4);
que.enqueue(dog5);
que.enqueue(cat1);
que.enqueue(cat2);



var oneDog = que.dequeueDog();
var oneCat = que.dequeueCat();
console.log(oneDog);
console.log(oneCat);



