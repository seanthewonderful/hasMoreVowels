

function hasMoreVowels(word) {
    const length = word.length
    const vowels = word.match(/[aeiuo]/gi).length
    const consonants = length - vowels
    if(vowels > consonants){
        return true
    }else {
        return false
    }
}

console.log(hasMoreVowels('caa'))

/*
find total characters in string
find number of vowels in string
subtract vowels from characters
if vowels>characters, true
*/
