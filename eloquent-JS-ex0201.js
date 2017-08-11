concat = '#';

for(var i=1; i<=7; i++){
	console.log(concat);
	concat = concat + '#';
}

/* Other alternative solution provided by the author */
for (var line = "#"; line.length < 8; line += "#")
	console.log(line);


/* --- Exercise 2.2 --- */
for(var i=1; i<=100; i++){
				  if(i%3===0 && i%5!==0){
									    console.log('Fizz');
											  } else if(i%3!==0 && i%5===0){
																    	console.log('Buzz');
																			  	} else if(i%3===0 && i%5===0){
																									    	console.log('FizzBuzz');
																													  } else {
																																		    	console.log(i);
																																					  		}
}

/* --- Exercise 2.3 - chess board --- */
/* Solution obtained without using line breaks */
var size = 8;

for(var i=1; i<=size; i++){
				  var row='';
						for(var j=1; j<=size; j++){
										      if((i+j)%2===0){
																	        row=row+' ';
																					      } else {
																												      	row=row+'#';
																																      }
																																			    }
																																					  console.log(row);
}

/* Solution using line breaks */
var size = 16;
var row = '';

for(var i=1; i<=size; i++){
					for(var j=1; j<=size; j++){
									      if((i+j)%2===0){
																        row=row+' ';
																				      } else {
																											      	row=row+'#';
																															      }
																																		    }
																																				  row=row+'\n';
}
console.log(row);


