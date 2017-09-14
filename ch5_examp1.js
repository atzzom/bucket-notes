var myString = "Welcome to the Wrox books. ";
myString = myString + "The Wrox website is wwww.wrox.com. ";
myString = myString + "Visit the Wrox website today. Thanks for buying Wrox.";

var foundAtPosition = 0;
var wroxCount = 0;

while (foundAtPosition != -1)
{
	foundAtPosition = myString.indexOf("Wrox",foundAtPosition);
	if (foundAtPosition != -1)
	{
		wroxCount++;
		foundAtPosition++;
	}
}

document.write("There are " + wroxCount + " occurrences of the word Wrox");
