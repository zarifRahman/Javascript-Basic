//  add/remove/replace arrays
//const notes = ['Note 1', 'Note 2', 'Note 3'];

//push/pop
//console.log(notes.pop());
//notes.push('My new note');
//console.log(notes.shift()); //eliminate the first element
//console.log(notes.length);
//console.log(notes.unshift("My val"));

//-- splice --
//console.log(notes.splice(1,0,"This is a neew item"));
//console.log(notes.splice(1,1,"This is a neew item"));

//replace
// notes[2] = "this is now the new note 3"
// console.log(notes);

// --- loops
// notes.forEach(function(item,index){    //farEach ia a callback func
//   console.log(index);
//   console.log(item);            //forEach iterate through each and every item in the array
// })
// console.log(notes);
//
//
// // counting ... 1
// for (let count = 2; count >= 0; count-=1) {
//   console.log(count);
// }

// ---- array Object
const notes = [{
  title : "My next Trip",
  body : "I would like to go to spain",
},
  {
    title : "habbits to work on",
    body : "Exercise and eat a better",
  },
  {
    title : "Office modification",
    body : "Gat a new seat",
  }]
  console.log(notes.indexOf({title}));
