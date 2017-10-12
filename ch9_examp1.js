function splitAndReverseText(textAreaControl)
{
	var textToSplit = textAreaControl.value;
	var textArray = textToSplit.split("\n");
	var numberOfParts = 0;
	numberOfParts = textArray.length;
	var reversedString = "";
	var indexCount;
	for (indexCount = numberOfParts - 1; indexCount >= 0; indexCount--)
	{
		reversedString = reversedString + textArray[indexCount];
		if (indexCount > 0)
		{
			reversedString = reversedString + "\n";
		}
	}
	textAreaControl.value = reversedString;
}
