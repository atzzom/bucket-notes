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

/* --- Exercise 3.2 - even or odd number by recursion --- */
function isEven(x){
				  var result;
					  if(x===0)
										    return true;
												  	else if(x===1)
																		      return false;
																					  		else if(x>0)
																												          return isEven(x-2);
																																	  		else
																																								          return isEven(x+2);
}

console.log(isEven(-2));

/* Author's solution */
function isEven(n) {
				  if (n == 0)
									    return true;
											  else if (n == 1)
																    return false;
																		  else if (n < 0)
																							    return isEven(-n);
																									  else
																														    return isEven(n - 2);
}

/* --- Exercise 3.3 - Bean Counting --- */
function countChar(line, char){
					var i = 0;
					  	var length = line.length;
							  	var repeated = 0;
									  	for (i=0; i<=length; i++){
															    	if (line.charAt(i) === char){
																						          repeated++;
																											        }
																															    }
																																	  return repeated;
}

console.log(countChar('Hello World!', 'o'));

/* Author's solution */
function countChar(string, ch) {
				  var counted = 0;
					  for (var i = 0; i < string.length; i++)
										    if (string.charAt(i) == ch)
																      counted += 1;
																			  return counted;
}

function countBs(string) {
				  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


