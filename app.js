function pigTranslator(str){

	function findFirstLetter(){
		var wordArray = str.split(" ");
		var firstLetters = "";
		for(i = 0; i<wordArray.length; i++)
			firstLetters += (wordArray[i].charAt(0));
		return (firstLetters);
	}
	function piggify(){
		var wordArray = str.split(" ");
		var vowelPig = "";
		var conPig = "";
		for(i = 0; i<wordArray.length; i++)
		if(findFirstLetter === "a" || "A" || "e" || "E" || "i" || "I" || "o" || "O" || "u" || "U"){
			vowelPig += (wordArray[i] += "ay");
			console.log(vowelPig);
		} else {
		}
	}

	return {
		findFirstLetter: findFirstLetter,
		piggify: piggify
	};
}
var myTranslator = pigTranslator("I Love Spam");
console.log(myTranslator.piggify("I Love Spam"));