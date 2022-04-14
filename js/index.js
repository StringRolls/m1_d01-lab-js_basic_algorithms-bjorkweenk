



// Bonus 2: Lorem ipsum counter

// Iteration 1: Names and Input
let hacker1 = "Bjork" ;
console.log(`The drivers name is ${hacker1}`);

let hacker2 ="Marco";
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
console.log('The driver has the longest name')}

else if(hacker1.length<hacker2.length){
console.log('It seems that the navigator has the longest name')}

else if(hacker1.length == hacker2.length){
console.log('Wow, you both have equally long names, Bjork ')
}

// Iteration 3: Loops
// Iteration 3.1 'Name' to 'N A M E'

let spacedOut = "";
for (let i = 0; i < hacker1.length; i++){ 
    spacedOut = spacedOut.concat(hacker1[i], " ");
    spacedOut.trim();
}
console.log(spacedOut.toUpperCase());

// Iteration 3.2 'Name' to 'eman'

let reversed = "";
for (let i = hacker1.length -1; i >=0; i--){
    reversed += hacker1[i];
}
console.log (reversed)


// Iteration 3.3 Lexicographic order
if(hacker1>hacker2){
    console.log('The drivers name goes first')}
else if (hacker1<hacker2){
    console.log('Yo, the navigator goes first definitely')}
else if (hacker1 == hacker2){
    console.log('What?! You both have the same?')
}

// Bonus 1: Palindromes

let paragraph1 = <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra hendrerit ante, ut congue lorem imperdiet ut. Morbi tempor consequat libero. Pellentesque sit amet justo ut lectus condimentum blandit in vel tortor. Aliquam lobortis tristique orci at cursus. Sed dictum odio eu arcu hendrerit gravida. Aliquam bibendum sodales molestie. Morbi pulvinar faucibus elit in ullamcorper. Phasellus et blandit felis. Vestibulum mattis tincidunt metus non varius.</p>

let paragraph2 = <p> Pellentesque tempus quam a ipsum sodales commodo. Integer egestas eleifend erat ut euismod. Etiam ante ex, placerat sit amet dui sed, dapibus vulputate urna. In rhoncus magna id eros congue, at venenatis odio consectetur. In congue luctus odio ac tristique. Nunc nibh nunc, ornare quis facilisis elementum, aliquet sed libero. Duis scelerisque velit nec leo congue, ac consectetur erat interdum. Mauris ex nunc, tristique eget neque vel, rutrum pretium elit. Vestibulum viverra dignissim velit, in sodales dolor suscipit in. Aliquam sem lectus, tincidunt non pulvinar et, posuere et felis. Maecenas id elementum odio. </p>

let paragraph3 = <p> Sed ut sodales elit. Phasellus sed purus dignissim, fermentum dui sed, pulvinar sapien. Etiam et luctus lectus. Nullam id ex magna. Quisque ac condimentum urna. Nulla consequat faucibus ante ut finibus. Vestibulum tellus sem, aliquam sed vulputate in, accumsan ut turpis. Quisque gravida maximus suscipit. In a nisl ac sem dignissim semper a et nisi. </p>

function WordCount (str){
    var totalSoFar = 0;
    for ( var i=0; i < WordCount.length, i++)
    if(str(i)=== " "){
        totalSoFar = +1;
    }
}

console.log(WordCount("Random String"));