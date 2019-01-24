// //createing and reading from arrays
//
// const todo = ['Eat','Sleep','Cook','gym','play'];
//
// console.log(`You have ${todo.length} todos`);
// console.log(`First todo : ${ todo[0]}`);
// console.log(`Last Todo : ${todo[todo.length-1]}`);
// console.log(todo);

// --- 2 ---
// const todo = ['Eat','Sleep','Cook','gym','play'];
// console.log(todo.splice(2,1)); // delete 3rd item
// console.log(todo.push('Exercise')); //push
// console.log(todo.shift()); // remove 1st item
// console.log(todo);

// --- 3 -- forEach over array ---
// const todo = ['Eat','play','Cook','gym','play'];
// // 1. Eat
// // 2. play
// // 3. Cook
// todo.forEach(function(item,index){
//   console.log(`${index + 1}. ${item} `);
// });

// -- 4 -- for loops --
// const todo = ['Eat','play','Cook','gym','play'];
// // 5. play
// // 4.gym
// // 3.Cook
// for(count = todo.length-1; count >= 0; count-=1) {
//   console.log(`${count + 1} . ${todo[count]}`);
// }

// -- Searching arrays
