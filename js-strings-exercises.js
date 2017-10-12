/*
 * 1) Write a JavaScript function to check wheater an "input" is a string or not.
 */

function isStringTest(input) 
{
	var dataType = typeof input;
	return dataType === "string";
}

console.log(isStringTest("abc"));
	/* Add validating input capabilities + include error handling, excepctions, and catch/try statements whenever applicable. */

/*
 * 2) Write a JavaScript function to check wheather a string is a blank or not.
 */

function isBlankString(string)
{
	return string.length === 0;
}

console.log(isBlankString("abced"));
	/* Add validating input capabilities + include error handling, excepctions, and catch/try statements whenever applicable. */

/*
 * 3) Write a JavaScript function to split a string and convert it into an array of words.
 */

function stringBreaker(input)
{
	var monowords = input.split(" ");
	return monowords;
}

console.log(stringBreaker("Jan Feb Mar Apr May Jun"));
	/* Add validating input capabilities + include error handling, excepctions, and catch/try statements whenever applicable. */

/*
 * 4) Write a JavaScript function to extract a specified number of characters from a string.
 */

function extractor(inputString, numChar)
{
	var extracted = inputString.substr(0, numChar);
	return extracted;
}

console.log(extractor("abcdefghij", 5));
	/* Create a function with the same functionality using the slice() method, on both cases, the extended capabilities must consider the negative numChar cases, the behaviour when the start and end indexes overlap, give an option for starIndex different than zero. */

/*
 * 5) Write a JavaScript function to convert a string in abbreviated form.
 */

			// Function to test the functionality of a for loop when the end condition is a variable rather than a number.

			var str = "abc defghi";
			for (i = str.length - 1; str.charCodeAt(i) = " ".charCodeAt(0); i++)
			{
				console.log(i);
			} /* This way to declare a for loop will lead into an error. */

// Actual exercise function:
function nameShorter(longName)
{
	var i = longName.length - 1; /* Initialize the variable i to the index of the last character at the longName string */
	while (longName.charCodeAt(i) !== " ".charCodeAt(0))
	{
		i--;	
		var shortStringIndex = i;
	}
	var shortName = longName.slice(0, shortStringIndex + 2) + ".";
	return shortName;
}

console.log(nameShorter("Peter Ávila"));
	/* Adding functionality comprehends capability to filter a second name, surname, prefixes, etc. Also filter invalid input, such as numbers, not correctly set up strings -e.g. one with spaces at either side of the string. */

/*
 * 6) Write a JavaScript function to hide email addresses to protect from unauthorized user.
 */

function emailHider(email)
{
	var localPart = email.split("@", 1).join("");
	var domain = email.split("@", 2).slice(1).join("");
	var trimAddress = localPart.substr(0, 6).split("");

	for (var i = 3; i <= 5; i++)
	{
		trimAddress[i] = ".";
	}

	trimAddress = trimAddress.join("");
	return trimAddress + "@" + domain;

}

console.log(emailHider("myverylongadress@gmail.com"));
	/* Take into account data validation, neglet case sensitiviness, etc. */

/*
 * 7) Write a JavaScript function to parameterize a string
 * input: Robin Singh from USA
 * output: Robin-Singh-from-USA
 */

function strHyphen(strInput)
{
	 var wordsArray = strInput.split(" ");
	 var hyphenArray = wordsArray.join("-");
	 return hyphenArray;
}

console.log("Sample string to be hyphenated");
	/* Take into account data validation and possible scenarios that might break the function. */

/*
 * 8) Write a JavaScript function to capitalize the first letter of a string
 */

function dropCapSmall(string)
{
	var firstLetter = string[0];
	var dropCap = string[0].toUpperCase();
	string = string.replace(firstLetter, dropCap);
	return string;
	/*
	Initial attempt to perform the capitalization without using the .replace() method as it uses regular expressions (not seen yet).
	var firstSpaceIndex = 0;
	while (string[firstSpaceIndex] !== " "[0])
	{
		firstSpaceIndex++;
	}

	var firstWord = string.substring(0, firstSpaceIndex);
	var lettersArray = firstWord.split("");
	lettersArray[0] = lettersArray[0].toUpperCase();
	lettersArray = lettersArray.join("")
	*/
}

console.log(dropCapSmall("write your favorite sentence"));


