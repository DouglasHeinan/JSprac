console.log('Always here')

console.log("")
console.log("BASIC IF STATEMENT STUFF...")
const if_num = 0;
if (if_num < 0) {
    console.log("This shit works!")
} else if (if_num > 0) {
    console.log("This shit is broke!")
} else {
    console.log("This shit ain't nuthin'.")
}

console.log("")
const and_num = 5;
if (and_num > 4 && and_num % 2 == 0) {
    console.log("We got it!")
} else {
    console.log("We don't got it.")
}

console.log("")
const or_num = -43;
if (or_num > 1 || or_num % 2 == 0) {
    console.log("Good enuf.")
} else {
    console.log("Not good enuf.")
}

console.log("")
let list_nums = [5, 8, 12]
console.log(`list_nums is ${list_nums.length} indices long`)
console.log(`The third index of list_nums is ${list_nums[2]}`)

console.log("")
const word_list = ["Stuff", "Things", "Crap"]
console.log(`The second word in word_list is ${word_list[1]}`)
console.log(`The first letter of the first word in word_list is ${word_list[0][0]}`)
console.log("END BASIC IF STATEMENT STUFF")

console.log("")
console.log("List of colors:")
let colors = ["red", "blue", "yellow"]
console.log(colors)
console.log("Changing blue to black.")
colors[1] = "black"
console.log(colors)
console.log("Making the list longer than necessary.")
colors[7] = "grey"
console.log(`colors.length is ${colors.length} entries long.`)
console.log(colors)
console.log("What's in the empty slots?")
console.log(colors[5])

console.log("")
let names = ["Jack", "Rudolph", "Wesley"]
console.log(`These are the names: ${names}`)
console.log("Adding more names...")
names.push("Cleo")
names.push("Rebecca")
console.log (`Now names are: ${names}`)
console.log("Getting rid of Rebecca...")
names.pop()
console.log(names)

console.log("")
let line_members = ["Guy", "Lady", "Person"]
console.log(line_members)
console.log("First person gets served; line is now:")
last_served = line_members.shift()
console.log(line_members)
console.log("Whoops, first person forgot their change...")
line_members.unshift(last_served)
console.log("Line members are now:")
console.log(line_members)

console.log("")
console.log("The 'names' people want to get in line after the 'line_members' people...")
long_line = line_members.concat(names)
console.log(long_line)

console.log("")
console.log("Two people walk in looking for their friends, Cleo and Phillip. Are they here?")
if (long_line.includes("Phillip")) {
    console.log("Phillip is here.")
} else {
    console.log("Phillip ain't here.")
}
if (long_line.includes("Cleo")) {
    console.log("Cleo is here.")
} else {
    console.log("Rebecca ain't here.")
}

console.log("")
rudolph_line_place = long_line.indexOf("Rudolph")
console.log(long_line)
console.log(`Rudolph is number ${rudolph_line_place + 1} in line.`)

console.log("")
console.log("Chaos day! Line reverses order!")
long_line.reverse()
console.log(long_line)

console.log("")
console.log("If colors is sliced with no arguments:")
console.log(colors.slice())
console.log("")
console.log("If colors is sliced after index 2:")
console.log(colors.slice(2))

console.log("")
console.log("If colors has orange spliced into the third position:")
colors.splice(2, 0, "orange")
console.log('syntax: colors.splice(2, 0, "orange")')
console.log(colors)

console.log("")
console.log("for loops structure:")
console.log("for ([initial expression]; [condition]; [increment expression])")
console.log("Example:")
console.log("for (let i = 1; i <= 10; i++")
console.log("   console.log(i)")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("")
console.log("Nested for loop:")
console.log("for (let i = 1; i <= 3; i++) {")
console.log("   console.log(`i is: ${i}`")
console.log("   for (let j = 1; j < 4; j++) {")
console.log("       console.log(`j is: ${j}`)")
console.log("   }")
console.log("}")
for (let i = 1; i <= 3; i++) {
    console.log(`i is ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`   j is ${j}`)
    }
}

console.log("")
console.log("While loops:")
console.log("let count = 0;")
console.log("while (count < 10) {")
console.log("   count++;")
console.log("   console.log(count)")
console.log("}")
let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

console.log("")
//const SECRET = "GoodPassword";
//let guessed = prompt("Enter the secret code");
//while (guessed != SECRET) {
//    guessed = prompt("Wrong! Enter the secret code")
//}
//console.log("Good job!")

console.log("")
console.log("How to use 'break' keyword.")
console.log("I'm not gonna' console.log() all this shit anymore. Just read it in the code.")
//let targetNum = Math.floor(Math.random() * 10);
//let guess = prompt('Pick a number from 1-10');

//while (true) {
//    if (guess == targetNum) {
//        console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
//        break;
//    }
//    else {
//        guess = prompt(`${targetNum} Pick a number from 1-10`)
//        console.log(`Guessed ${guess}...Incorrect!`);
//
//    }
//}

console.log("")
console.log("parseInt() can pull a number out of a string, as long as the string starts with a number,")
isThisNum = '234l';
realNum = parseInt(isThisNum)
console.log(realNum)

console.log("")
console.log("for/of loops")
console.log("For iterating over arrays")
const seatingChart = [
    ["Jim", "Suzie", "Lin"],
    ["Mark", "Ada", "Mary"],
    ["Ralph", "Nina", "Lou"]
]
console.log("CHECK HERE IN CODE FOR THE LONG AND CUMBERSOME WAY OF DOING THINGS.")
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}
console.log("")
console.log("AND CHECK HERE FOR THE APPROPRIATE WAY TO DO A FOR/OF LOOP")
for (let row of seatingChart) {
console.log("")
    console.log(`ROW ${seatingChart.indexOf(row) + 1}`)
    for (let student of row) {
        console.log(student)
    }
}

console.log("")
console.log("for/in loops")
console.log("Arrays can be iterated over, objects cannot. So we use a for/in loop instead.")
scores = {
    "Phil": 62,
    "Riley": 88,
    "Jonesy": 7
}
for (let score in scores) {
    console.log(`${score} scored ${scores[score]}`)
}
console.log("You can also use a couple of JavaScript operations...")
console.log(Object.keys(scores))
console.log(Object.values(scores))
console.log(Object.entries(scores))
console.log("Because all of the above return an array, I CAN iterate through them in the usual array-way.")
console.log("Like this:")
for(let score of Object.values(scores)) {
    console.log(score)
}
console.log("Or, say I wanted to find the average...")
console.log(Object.values(scores))
let new_scores = Object.values(scores)
let total = 0;
for (let score of new_scores) {
    total += score;
}
console.log(total / new_scores.length)

console.log("")
console.log("Functions...")
console.log("The result of a six-sided die roll whenever this page is reloaded.")
console.log("Die roll func:")
function dieRoll(sides) {
    let result = Math.floor((Math.random() * sides) + 1)
    return result
}
console.log(dieRoll(6))

console.log("")
console.log("What about five die-rolls?")
function yahtzeeRoll(numDie) {
    let results = []
    for (let i = 0; i < numDie; i++) {
        let result = dieRoll(6);
        results.push(result);
        }
    return results;
}
results = yahtzeeRoll(5)
console.log(results)

console.log("")
console.log("Function Expressions:")
console.log("Essentially, you can store a function inside a variable.")
const add = function(x, y) {
    return x + y;
}
console.log("Try running the add function by calling add(NUM_HERE, NUM_HERE)")

console.log("")
console.log("Higher order functions can accept functions as arguments or return functions")
callTwice = function(func) {
    rolls = [];
    firstRoll = func(6);
    secondRoll = func(6);
    rolls.push(firstRoll)
    rolls.push(secondRoll)
    return rolls;
}
console.log("Calling our die rolling function twice for a Monopoly move...")
moveResult = callTwice(dieRoll)
console.log(moveResult)

console.log("")
console.log("and returning functions as a value:")
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}
isChild = makeBetweenFunc(0, 18);

console.log("")
console.log("Methods")
console.log("I think we get that methods are just functions, but you can quickly and easily make your own!")
const myObject = {
    "string": "these words",
    "num": 52,
    makeNumsSmaller: function (numA, numB) {
        return numA - numB;
    },
    makeNumsBigger: function (numA, numB) {
        return numA + numB;
    }
}
console.log("Try calling these attributes and methods!")
console.log("This kind of thing is so common, it has its own JS shorthand:")
const mySmallerObject = {
    "string": "these words",
    "num": 52,
    makeNumsSmaller(numA, numB) {
        return numA - numB;
    },
    makeNumsBigger(numA, numB) {
        return numA + numB;
    }
}
console.log("Just drops the colon and the funciton keyword.")

console.log("")
console.log("The keyword THIS")
console.log("THIS lets you access the object your method is in from the method.")
kilaCat = {
    "name": "Kila",
    "isObnoxious": true,
    "age": 11,
    wants(time) {
        if (time >= 15 && time <= 19) {
            return "food";
        } else {
            return "sleep";
        }
    },
    meow() {
        console.log(`${this.name} says MEOW!`)
    }
}
console.log("The 'this' keyword just refers to the object to the method is in.")
const fakeKila = kilaCat.meow;
console.log("If we call fakeKila(), it runs the same method as kilaCat.meow(), except the 'this' keyword refers")
console.log("to the parent object. In kilaCat, the this object refers to kilaCat, in fakeKila, there is no parent")
console.log("object, so 'this' just refers to the Window object, which is created by JS and is the parent of all")

console.log("")
console.log("Try/Catch")
console.log("If I ran this code: 'hello.toUppercase()', we'd get an error that stopped our code dead in its tracks,")
console.log("as there is no 'hello' to uppercase...")
try {
    hello.toUppercase()
} catch {
    console.log("")
    console.log("ERROR! There is no keyword hello.")
    console.log("")
}
console.log("Thankfully, we have 'try/catch' to make sure that this line of code is running after trying to run that")
console.log("erroneous line.")

console.log("")
console.log("forEach")
console.log("Run some function, once per item, in an array.")
const numbers = [1, 2, 3, 4]
function print(element) {
    console.log(element)
}
console.log("Running forEach runs each entry in an array through a function, one entry at a time.")
numbers.forEach(print)
console.log("More common is to pass in an anonymous function as the argument.")
numbers.forEach(function (num) {
    console.log(num)
})
console.log("Mostly, this isn't used anymore. You'd just use a for loop. But it's still out there, so you might see it.")

console.log("")
console.log("map")
console.log("Similar to forEach in that it iterates over each entry in an array, but dissimilar in that it a) Is")
console.log("still used and b) Rather than just run a function on each element, it instead forms a new array, leaving the")
console.log("original unchanged. It's a way to MAP an array from one state to another.")
const doubles = numbers.map(function(num) {
    return num * 2;
})
console.log(numbers);
console.log(doubles);

console.log("")
console.log("Arrow Functions")
console.log("These allow us to write functions without a 'function' keyword")
console.log("Great for single use functions.")
const square = (num) => {
    return num * num;
};
const sum = (x, y) => {
    return x + y;
};
console.log(sum(9, 4))
console.log
console.log("It also works with functions that take no arguments.")
const newDieRoll = () => {
    return Math.floor(Math.random() * 6) + 1
}

console.log("")
console.log("Implicit returns")
console.log("Implicit returns are only available with arrow functions.")
console.log("It's basically the same as an arrow function, just eliminate the return keyword and swap the")
console.log("curly braces for parens.")
const twelveSidedRoll = () => (
    Math.floor(Math.random() * 12) + 1
)
console.log(twelveSidedRoll())
console.log("If the function is short enuf, we can just fit it all on one line this way. You can even optionally drop the parens!")
const fourSidedRoll = () => Math.floor(Math.random() * 4) + 1
console.log(fourSidedRoll())
console.log("These implicit returns only work with a single expression in the function.")

//UNCOMMENT TO SEE EFFECTS
console.log("")
console.log("setTimeout")
//console.log("Wait for it...")
//setTimeout(() => {
//    console.log("HELLO")
//}, 2000)
//console.log("The first argument in setTimeout is the function you want to run, the second argument is the number of")
//console.log("milliseconds you want to wait before it runs.")

console.log("")
console.log("setInterval:")
console.log("Uncomment code to see effects in console.")
//const intervalId = setInterval(() => {
//    console.log(Math.random())
//}, 500)
//console.log("Similar to setTimeout, first argument is the function to run, second is the interval in ms you want it to run.")
//console.log("By assigning the setInterval value to a variable, we can use that value in a function called clearINterval().")
//console.log("To make the interval stop running, just call clearInterval(intervalId).")
//console.log("Or, you could just estTimeout to make it stop!")
//setTimeout(() => {
//    console.log("Stopping interval...")
//    clearInterval(intervalId)
//}, 2000)

console.log("")
console.log("Filter")
console.log("Iterating through one array, filtering out the parts of it you don't want, and returning a new array")
console.log("consisting only of the parts you DO want.")
movies = [
    {"Name": "Running Man", "Rating": 62},
    {"Name": "Spaceballs", "Rating": 58},
    {"Name": "Princess Bride", "Rating" :91},
    {"Name": "Fantastic Mr. Fox", "Rating": 93}
]
const goodMovies = movies.filter(movie => (
    movie.Rating > 80
))
console.log("Calling movies and goodMovies shows us the results of running a filter.")

console.log("")
console.log("some/every")
console.log("Both return booleans. Returns true if (respectively) some/all elements of an array pass a test.")
const allMoviesGood = movies.every(movie => movie.Rating > 79)
const someGoodMovies = movies.some(movie => movie.Rating > 79)

console.log("")
console.log("Reduce")
console.log("Turns an array into a single value. How it does that is kinda' up to you.")
console.log("Reducer functions take two parameters: an accumulator and a current value.")
console.log("Really, reduce just iterates through an array, does something with the current value it's on,")
console.log("Holds that value ni the first accumulator variable, and moves to the next number to make that value")
console.log("join the accumulator value in the same way.")
valuesToAdd = [3, 5, 9]
const allValues = valuesToAdd.reduce((total, num) => (total + num))
console.log(`allValues = ${allValues}`)
console.log("We can also accumulate min/max values...")
const variedValues = [4, 189, 73, 18]
const minValue = variedValues.reduce((lowest, num) => {
    if(num < lowest) {
        return num;
    }
    return lowest;
})
console.log(minValue)
console.log("We can also specify a starting point for the accumulator value as the 2nd argument:")
allValuesPlusTen = valuesToAdd.reduce((total, num) => (total + num), 10)
console.log(`allValuesPlusTen = ${allValuesPlusTen}`)

console.log("")
console.log("A few handy convenience tools:")
console.log("Default Params")
console.log("Just set the parameters' value when defining the function.")
function rollMalleableDie(numSides = 6) {
    result = Math.floor(Math.random() * numSides) + 1;
    return result;
}
console.log("Default params should always come after undefaulted params.")
console.log("Spread")
console.log("Spread is kinda' confusing, but its job is simple: turn an array into a series of separate arguments.")
console.log("Math.max finds the highest number in a series of numbers.")
maxNum = Math.max(5, 9, 3)
console.log(maxNum)
console.log("But you couldn't submit an array of numbers, because it takes an unlimited series of single numbers as an argument,")
console.log("not one single array.")
console.log("So we use spread to turn our array into a series. Spread is called with the echo dots.")
numArray = [5, 9 ,3]
spreadMaxNum = Math.max(...numArray)
console.log(spreadMaxNum)
console.log("Spread can also be used in assigning variables")
otherArray = [1, 8, 4]
allArrays = [...numArray, ...otherArray, 7]
console.log(allArrays)
console.log("And we can spread properties from one object into a new one.")
console.log("If both objects share a key that has different values, the one entered last will override the rest.")

console.log("")
console.log("Creating and appending:")
const listDiv = document.querySelector(".firstDiv")
const loonDog = document.createElement('img')
loonDog.src = 'https://cdn.nba.com/manage/2022/07/kevon-looney-cropped-1568x882.jpg'
listDiv.insertAdjacentElement("beforeend", loonDog)
console.log("let's make it a little smaller...")
loonDog.classList.add('small')
const loonTitle = document.createElement('h3')
loonTitle.innerText = "LOONEY!"
listDiv.insertAdjacentElement("beforeend", loonTitle)
console.log("Instead of appendChild, I could just use append.")
console.log("This lets me append plain text or multiple items at once.")
loonTitle.append(" He's good.", " At Basketball.")
console.log("We can also add adjacent elements.")
const newThing = document.createElement('li')
newThing.append("Look, a Looney thing!")
list = document.querySelector('ul')
list.insertAdjacentElement('beforeend', newThing)

console.log("")
console.log("remove")
console.log("removing a specific child...")
const removableListing = document.querySelector("ul :nth-child(4)")
console.log("Let's get rid of the out-of-place curling thing.")
removableListing.remove()

console.log("")
console.log("All further sections are elaborated on in the comments of the js file.")


//LISTENERS:
//This betterButton method is still not ideal
const betterButton= document.querySelector(".betterButton")
betterButton.onclick = function() {
    console.log("Better Button Clicked.")
}
//This bestButton way is the one...
const bestButton = document.querySelector(".bestButton")
bestButton.addEventListener('click', function() {
    console.log("Best Button Clicked.")
})
//Add eventlistener is generally preferred because it allows us to
//run multiple functions on one event. onclick does not so much.

//Keyword this
//This function returns a random rgb value.
function makeRandColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
//This for-loop makes a button change color when clicked.
//*******This is commented out because it gets changed later.*******
//const btnGroup = document.querySelectorAll(".btnGroup button");
//for (let button of btnGroup) {
//    button.addEventListener("click", function() {
//        button.style.backgroundColor = makeRandColor();
//        button.style.color = makeRandColor();
//    })
//}
//*******************************************
//This for-loop does the same, but for headers.
//*******This is commented out because it gets changed later.*******
//const hdrGroup = document.querySelectorAll(".smHeaders h6");
//for (let header of hdrGroup) {
//    header.addEventListener("click", function() {
//        header.style.backgroundColor = makeRandColor();
//        header.style.color = makeRandColor();
//    })
//}
//********************************************
//This works, but it would be nice to be able to use the same function
//for both headers and buttons. Enter the 'this' keyword.
function randColorVzTwo() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
//This function can replace the inner most piece of our for-loops above...
const hdrGroup = document.querySelectorAll(".smHeaders h6");
for (let header of hdrGroup) {
    header.addEventListener("click", randColorVzTwo)
}
const btnGroup = document.querySelectorAll(".btnGroup button");
for (let button of btnGroup) {
    button.addEventListener("click", randColorVzTwo)
}
//The 'this' keyword takes whatever element it's a method of and applies that
//to whatever 'this' is doing.


//Keyboard events
//The switch keyword works sort of like an 'if' statement:
//Shown two ways, both commented out to avoid constant console logging.

//switch version:
//window.addEventListener("keydown", function (e) {
//     switch(e.code) {
//        case 'ArrowUp':
//            console.log("UP")
//            break
//        case 'ArrowDown':
//            console.log("DOWN")
//            break
//     }
//})

//if statement version:
//window.addEventListener("keydown", function (e) {
//     if (e.code == 'ArrowUp') {
//        console.log("Up");
//     } else if (e.code == 'ArrowDown') {
//        console.log("Down");
//     } else if (e.code == 'ArrowLeft') {
//        console.log("Left");
//     } else if (e.code == "ArrowRight") {
//        console.log("Right");
//     } else {
//        console.log("Error!")
//     }
//})


//Form events
//When a form is submitted, it has a default behavior. It wants to use the form action
//to send the form information to a different url. Sometimes we want
//to use a form to change information on the page we're on without trying to access
//a different url. To do that, we need to prevent the default behavior of the form.

//const firstForm = document.querySelector(".firstForm");
//firstForm.addEventListener("submit", function(e) {
//    console.log("SUBMITTED")
//})

//If you were to watch the logs when submitting, you'd see teh 'SUBMITTED' appear for a nano-second
//before being redirected to whatever the form action dictates. But if we don't want that redirect,
//we need to start doing some preventing.

//const firstForm = document.querySelector(".firstForm");
//firstForm.addEventListener("submit", function(e) {
//    e.preventDefault();
//    console.log("SUBMITTED");
//})

//Now, having prevented the default behavior, the code runs as normal without a redirect.
//preventDefault() has many other potential uses, but the majority of the time, it's used in this way with forms.
//Now, we can actually do something with our input value without navigating away and losing said value...

const firstForm = document.querySelector(".firstForm");
const input = document.querySelector(".firstInput")
const allInputs = document.querySelector(".inputs")
firstForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newInput = document.createElement("li")
    newInput.innerText = input.value
    allInputs.insertAdjacentElement('beforeend', newInput)
})


//'change' and 'input'
//The 'change' keyword performs it's function when some value has been changed AND THEN
//the field is "blurred", i.e. clicked away from.
const changeInput = document.querySelector(".changeInput");
const changeHeader = document.querySelector(".changeHeader");
changeInput.addEventListener("change", function(e) {
    changeHeader.innerText = changeInput.value;
})
//The input keyword is similar. It triggers the listener whenever the value in the field is changed,
//not waiting on the blur.
const inputInput = document.querySelector(".inputInput");
const inputHeader = document.querySelector(".inputHeader");
inputInput.addEventListener("input", function(e) {
    inputHeader.innerText=inputInput.value;
})
//A lot of this functionality could be handled with 'keydown'/'keyup', but those events fire
//when ANY key is pressed (shift, space, alt, etc). change/input only fire when the value
//in the field changes.








