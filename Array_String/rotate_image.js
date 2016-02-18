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


function rotate90(img){
	// rotate layer by layer
	// number of layer(nn array): Math.floor(img.length/2)
	// layer index from 0 to number of layers
	

	for(var layer = 0; layer < Math.floor(img.length/2); layer++) {
		// layer => img index
		
		// loop for n times, for each edge, since it is N x N array
		for(var edge = 0; edge < 4; edge++) {

		  // length - layer*2
			// 1. top to temp
			// 00, 01, 02, 03
			// 01 				 13
			// 02 				 23
			//  				   33
			// 2. left to top
			// 3. bottom to left
			// 4. right to bottom
			// 5. temp to right

		}
	}
}





