const names = ['Justin', 'Sarah', 'Christopher'];

// while loop
console.log("-- while --");
let index = 0;
while(index < names.length) {
    const name = names[index];
    console.log(name);
}

// for loop
console.l("-- for --")
for(let index = 0; index < names.length; index++) {
    const name =names[index];
    console.log(name);
}

// for of
console.l("-- for of --")
for(let name of names) {
    console.log(name);
}