const read = require("readline-sync");
let name = read.question("Welcome to the colossal RPG! When you're ready to start, go ahead and enter your name hero: ");
console.log("Good luck, " + name + "!");

read.keyInYN("Are you ready to begin?");
console.log("Prepare yourself! Pick your weapon of choice");

const inventory = [];
let weapons = ["Sword", "Staff"];
let input = read.keyInSelect(weapons, 'Which weapon?');

console.log(weapons[input] + ' is a fine choice!');

function Player(name, health, damage) {
  this.name = name;
  this.health = health;
  this.damage = damage;
  this.inventory = weapons[input];
}

// while(monsters.health > 0){
//   return monsterDamage
// }if (monsters.health <= 0){
//   return newItem.push(inventory)
// }

let player = new Player(name, 100, 30)
let newItem = ['Health Potions','Shield'];

const monsters = [{
    name: "OogaBooga",
    health: 100,
    type: "Easymode",
    abilities() {
      return Math.floor(Math.random() * 10)
    }
  },
  {
    name: "Pikachewchew",
    health: 150,
    type: "Pewpew",
    abilities() {
      return Math.floor(Math.random() * 10)
    }
  },
  {
    name: "Da-boss",
    health: 250,
    type: "Hope you dont run into",
    abilities() {
      return Math.floor(Math.random() * 15)
    }
  }
];

function randomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function walk() {
  while (player.health > 0) {
    let action = read.question("Press w + enter to walk, type print + enter to show character info: ");
    if (action.toLowerCase() === "w") {
      if (randomNum(1, 4) === 1) {
        fight(monsters[randomNum(0, monsters.length)]);
      } else {
        console.log("You've avoided the danger this time!")
      }
    } else if (action === "print") {
      console.log("Player Health: " + player.health);
      console.log("Inventory: ");
      console.log(player.inventory);
//NOT YET WORKING!!
    } else if (monsters.health <= 0)
      inventory.push(newItem)

    {

    }
  }
}

function fight(monster) {
  console.log(monster)
  console.log("You've run into " + monster.name + "!")
  let stayRun = read.keyInYN("Would you like to fight " + monster.name + " (y)" + " or attempt to run (n): ");
  if (stayRun) {
    while (monster.health > 0) {
      console.log("\nPlayer Damage: " + attackEnemy(monster));
      console.log("Monster Health: " + monster.health);
      console.log("\nMonster Damage: " + enemyAttack(monster));
      console.log("Player Health: " + player.health);
    }
  } else {
//NOT YET WORKING!
    if (!stayRun) {
      run(Math.floor(Math.random) * .5)
      if (run >= 50) {
        console.log("You got away!")
      } else {
        fight()
      }
    }
  }
}

function attackEnemy(currentMonster) {
  currentMonster.health -= player.damage;
  return player.damage;
}

function enemyAttack(currentMonster) {
  let monsterDamage = currentMonster.abilities();
  player.health -= monsterDamage;
  return monsterDamage;
}

walk();


// function run(){
//     if(1 in 2){
//         //tell user that they successfully got away and can continue walking
//         //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//     } else {
//         //tell user they were not able to run
//         //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
// }
