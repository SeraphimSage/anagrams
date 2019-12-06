window.onload = function mainScript() {
    let word = "";
    let anagrams = [""];

    const button = document.getElementById("findButton");
    button.onclick = function () {
        // your code goes here
        let typedText = document.getElementById("input").value;
        getAnagramsOf(typedText);
        
        function alphabetize(word) {
            return word.toLowerCase().split("").sort().join("").trim();
        }
        //Janell Huyck helped with realizing issues I was having in calling parameters inside this area of the script.
    
        function getAnagramsOf() {
            for (let i = 0; i < words.length; i++) {
    
                let alphabetizedWord = alphabetize(words[i]);
    
                let alphabetizedText = alphabetize(typedText);
    
                if (alphabetizedWord == alphabetizedText) {    
                    console.log(words[i]);
                    let newElement = document.createElement("p")

                    let anagramOut = document.createTextNode(words[i]);

                    newElement.appendChild(anagramOut);

                    let currentDiv = document.getElementById("div")
                    document.body.insertBefore(newElement, currentDiv)
                }
            }
    
        }
    }

}