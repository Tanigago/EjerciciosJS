const chrono = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

chrono.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
  });
  //Para ver la lista bonita :)
function ordenarlista (chrono){
    console.log (chrono.name, chrono.time);
}
chrono.forEach(ordenarlista);


// Para ver la lista fea
/*
console.log(JSON.stringify(chrono))
*/

// ejemplo de ocmo crear un nuevo runner
/*
class Runner{
    constructor(name,time){
        this.name = name
        this.time = time
    }
}

const Luisa = new Runner("Luisa",3.5);

console.log(Luisa)
*/
