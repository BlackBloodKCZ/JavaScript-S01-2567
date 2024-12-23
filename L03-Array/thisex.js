const cat = {
    name: "Pipey",
    age: 8,
    whatName() {
        return this.name;
    }, 
};

console.log(cat.whatName());

cat.name = "Nazzar\n";
console.log(cat.whatName());