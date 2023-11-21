// console.log("1st problem")
const feedTime = "night";

if (feedTime == "morning") {
  console.log("It's time to feed the animals.");
}
else if (feedTime == "afternoon") {
  console.log("Only be fed if morning feeding is missed");
} else {
  console.log("You can't feed the animals now.");
}

// console.log("2nd problem")

const maxWeight = 500;
const passengerWeight = 480;

if(maxWeight>=passengerWeight){
  console.log("The boat will cross the river without any problem.");
} else {
  console.log("The boat will sink");
}


// console.log("3rd problem")

const myName = "Koushik";
const favoriteHobby = "Reading books and watching anime";

const sentence = `Hi, my name is ${myName}. My favorite hobby is ${favoriteHobby}.`;

console.log(sentence)