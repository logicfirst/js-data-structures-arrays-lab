// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
};

function destructivelyPrependDriver(name){
  drivers.unshift(name)
};

function destructivelyRemoveLastDriver(){
  drivers.pop()
}; 

function destructivelyRemoveFirstDriver(){
  drivers.shift()
};

function appendDriver(name){
  let copyOfDriver = [...drivers, name]
};

function prependDriver(name){
  let copyOfDriver = [name, ...drivers]
};

function removeLastDriver(){
  drivers.slice(0, drivers.length - 1)
};

function removeFirstDriver(){
  drivers.slice(1)
};

