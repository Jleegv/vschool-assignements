// const read = require("readline-sync");
// let name = read.question("Welcome to the colossal RPG! When you're ready to start, go ahead and enter your name hero: ");
// console.log("Good luck, " + name + "!");
//
// read.keyInYN("Are you ready to begin?");
// console.log("Prepare yourself! Pick your weapon of choice");
//
// let weapons = ["Sword", "Staff"];
// let input = read.keyInSelect(weapons, 'Which weapon?');
//
// console.log(weapons[input] + ' is a fine choice!');
//
// function Player(name, inventory) {
//   this.name = name;
//   this.health = 100;
//   this.damage = 15;
//   this.inventory = inventory;
// }
//
// let player = new Player(name, [weapons[input]]);
//
// const monsters = [{
//     name: "OogaBooga",
//     health: 100,
//     type: "Easymode",
//     newItem: "Health Potion",
//     abilities() {
//       return Math.floor(Math.random() * 10)
//     }
//   },
//   {
//     name: "Pikachewchew",
//     health: 150,
//     type: "Pewpew",
//     newItem: "Shield",
//     abilities() {
//       return Math.floor(Math.random() * 15)
//     }
//   },
//   {
//     name: "Da-boss",
//     health: 250,
//     type: "Hope you dont run into",
//     newItem: ["Key to the treasure"],
//     abilities() {
//       return Math.floor(Math.random() * 20)
//     }
//   }
// ];
//
// function randomNum(min, max) {
//   return Math.floor(Math.random() * max) + min;
// }
//
// function walk() {
//   while (player.health > 0) {
//     let action = read.question("Press w + enter to walk, type print + enter to show character info: ");
//     if (action.toLowerCase() === "w") {
//       if (randomNum(1, 4) === 1) {
//         fight(monsters[randomNum(0, monsters.length)]);
//       } else {
//         console.log("You've avoided the danger this time!")
//       }
//     } else if (action === "print") {
//       console.log("Player Health: " + player.health);
//       console.log("Inventory: ");
//       console.log(player.inventory);
//     }
//   }
// }
//
// function fight(monster) {
//   console.log(monster)
//   console.log("You've run into " + monster.name + "!")
//   let stayRun = read.keyInYN("Would you like to fight " + monster.name + " (y)" + " or attempt to run (n): ");
//   while (monster.health > 0 || player.health >= 0) {
//     if (stayRun) {
//       fight(monster);
//   console.log("\nPlayer Damage: " + attackEnemy(monster));
//   console.log("Monster Health: " + monster.health);
//   console.log("\nMonster Damage: " + enemyAttack(monster));
//   console.log("Player Health: " + player.health);
//
//     // while (monster.health > 0 || player.health >= 0) {
//     }if (!stayRun) {
//       let run = Math.floor(Math.random() * 100) + 1;
//       if (run >= 50) {
//         console.log("You got away!")
//
//       }if (monster.health <= 0) {
//         player.inventory.push(monster.newItem)
//         console.log(player.invetory)
//       } if (player.health >= 1) {
//         console.log('You are still alive');
//       } else if (player.health <= 0) {
//         console.log(player.health + "health")
//         die();
//       }
//     }
//   }
// }
//
//
// function attackEnemy(currentMonster) {
//   currentMonster.health -= player.damage;
//   return player.damage;
// }
//
// function enemyAttack(currentMonster) {
//   let monsterDamage = currentMonster.abilities();
//   player.health -= monsterDamage;
//   return monsterDamage;
// }
//
// function die() {
//   console.log("You died")
// }
//
// walk();
// run();
