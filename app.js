console.log("Hello World!\n==========\n");

// Exercise 1 Section
//Function currying
// Pattern
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function(plusNumber){
        return number + plusNumber;
    }
}
const plus15 = plus(15);
console.log(plus15(10));

//Exercise 2
console.log("EXERCISE 2 ForEach:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ]
  users.forEach(function(users){
    console.log(users);
  });

  //Exercise 3
  console.log("EXERCISE 3 Map:\n==========\n");
  
  let userNames = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    }
  ];
  let namesScores = userNames.map(function(userNames){
    return { name: userNames,score: userNames.score};    
});
console.log(namesScores)
//Exercise 4
console.log("EXERCISE 4 filter:\n==========\n");
let names = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    }
    ];
    let activeInfo = names.filter(function(names){
        return names.isActive;
    });
    console.log(activeInfo);

//Exercise 5 Sort
console.log("EXERCISE Sort 5:\n==========\n");
let people = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    }
    ]  
    people.sort(function(a, b){
        return b.score - a.score;
    })
console.log (people)

//Excersie 6
console.log("EXERCISE Reduce 6:\n==========\n");

let person = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    }
    ];
// Get the sum of the user's Score
const result = person.reduce((accumulator, currentValue, index, array) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue.score;
}, 0);
console.log(result);
console.log(result/users.length);
/*

    //Hunters walkthrough
    let sims = [
        {
          name: "Frodo",
          age: 50,
          score: 85,
          isActive: false,
        },
        {
          name: "Sam",
          age: 38,
          score: 94,
          isActive: true,
        },
        {
          name: "Merry",
          age: 36,
          score: 82,
          isActive: true,
        },
        {
          name: "Pippin",
          age: 26,
          score: 77,
          isActive: false,
        }
        ];
        //Exercise 2
    users.forEach((element, index, array)=>{
        console.log(element.name);
    });

    //Exercise 5
    sims.sort((a, b) => {
        //Sort wants a positive, negative, or 0
        //so that it knows how to sort a vs b
        return a.score - b.score;
    });/*

