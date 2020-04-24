function dwarfRollCall(dwarves){
 let array =[];
 for(let i=dwarves.length/2;i<dwarves.length;i++) {
   array.push(`${i+1}. ${dwarves[i]} `)
 }
 
 return array.join('')
 }


function summonCaptainPlanet(planeteerCalls){
 let uparray = []
 for(let i=0;i<planeteerCalls.length;i++) {
   uparray.push(`${planeteerCalls[i]}!`.toUpperCase())
 }
 return uparray
}

function longPlaneteerCalls(words) {
if(words.length < 4) {
  return false
} else {
  return true 
}
}

function findTheCheese (foods) {
 for(let i=0;i<foods.length;i++) {
   if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert' || foods[i]=== 'swiss') {
     return foods[i]
   }
 }
 return 'no cheese!'
}

let string = ['boy', 'girl', 'bank']
function wordsb (string) {
  let wordsWithB = []
  for(let i=0;i<string.length;i++) {
    if(string[i].startsWith("b")) {
      wordsWithB.push(string[i])
      }
      
  }
  return wordsWithB
}
