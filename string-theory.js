function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output = output + 'x';
    }
    return output;
  }
  
  console.log(xify('hello'));
  console.log(xify('hi there'));

  function yellingChars(str){
      let output = ''
      for (let i = 0; i < str.length; i++){
      output = output + [str] + '!';
  }
  return output;
  }

  console.log(yellingChars('goodness'));
  console.log(yellingChars('hello'));

  function indexedChars(str){
    let output = ''
    for (let i = 0; i < str.length; i++){
    output = output + [i] + str[i];
}
return output;
}
console.log(indexedChars('wow this is neat'));

function numberedChars(str){
    let output = '';
    for (let i = 0; i < str.length; i++) {
    output = output + '(' + (i + 1) + ')' + str[i];
}
return output;
}

console.log(numberedChars('hello'));
console.log(numberedChars('bye'));

console.log('\n' + "exclaim:");

function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '?' || str[i] === '.') {
            output += '!';
        } else {
            output += str[i];
        }
    }
    return output;
}

console.log(exclaim('Hello! Anyone home? I am back.'));

function repeatIt(str, n) {
	let output = "";
	for (let i = 0; i < n; i++) {
		output = output + str;
	}
	return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));

function truncate(str) {
    if (str.length > 15) {
        let output = ''
        for (let i = 0; i < 15 ; i++){
            output = output + str[i];
        }
            output = output + '...';
            return output;

    } else {
        return str;
    }
}

console.log(truncate('The fault, dear brutus, is not in our stars, but in ourselves.'));
console.log(truncate('Well, thats just like, your opinion, man.'));

function ciEmailify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            output = output + '.';
            console.log(output + '@codeimmersives.com')
        } else {
            output = output + str[i];
        }
    }
    output = output + '@codeimmersives.com'
    return output
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('anthony derosa'));


function reverse(str) {
    let output = ''
    for (let i = 0; i < str.length; i++){
        const index = (str.length - 1) - i;
        const letter = str[index];
        output = output + letter;
    }
    return output;
    }
console.log('colin')
console.log('mesuara')



function onlyVowels(str)
let output = '';
for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    if ( 
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'  
        ) { 
            output = output + letter;
}
}
return output; 

console.log(onlyVowels('Anthony DeRosa'));