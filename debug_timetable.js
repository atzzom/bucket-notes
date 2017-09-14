function writeTimesTable(timesTable) {
	var counter;
	var writeString;
	for (counter = 1; counter < 12; counter++) {
		writeString = counter + " * " + timesTable + " = ";
		writeString = writeString + (timesTable * counter);
		writeString = writeString + "<br>";
		document.write(writeString);
		}
	}

writeTimesTable(2);
