/*
	Given an image represented by an NxN matrix, where each pixel in the image is
	4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
	place?
*/

var img = [[0,1,2,3],
					[4,5,6,7],
					[8,9,10,11],
					[12,13,14,15]];

function printImg(img){
	for(var i = 0;i < img.length; i++) {
		console.log(img[i]);
	}
}
printImg(img);


// 0 1 2 3  => i
// 1 2 3 4
// 2 3 4 5
// 3 4 5 6


// 3 4 5 6
// 2 3 4 5
// 1 2 3 4  
// 0 1 2 3

// var a = Math.pow(2, 32) - 1;
// // assumption rotate left 90 degrees
// img[i][0]

function rotateImg(img) {
	for (var i = 0; i < img.length; i++) {
		for(var j = 0; j < Math.floor(img[i].length/2); j++) {
			var temp = img[j][i];
			img[j][i] = img[i][j];
			img[i][j] = temp;
		}
	}
}

rotateImg(img);

console.log('----------------');
printImg(img);

var source = "https://en.wikipedia.org/wiki/In-place_matrix_transposition";
var source2 = "http://stackoverflow.com/questions/2968397/algorithm-to-rotate-an-image-90-degrees-in-place-no-extra-memory";



/*
1, 2
3, 4
5, 6

T=>
1, 3, 5
2, 4, 6

2, 4, 6
1, 3, 5

 */


