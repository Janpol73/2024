//Listopad
//19
// Zad. 3.3 s. 71

const array = [1, 2, 3];
const newArray = [array, array, array];
console.log(newArray[1][1]);
//26
function write(log) {
    console.log(log)
}

let pies = {
    imie: 'Reksio',
    waga: 5,
    kolor: 'czarny',
    rasa: 'jamnik',
    wiek: 4,
    szczepiony: true,

    szczekaj() {
        console.log('czemu kurwa nie zrobiliscie backupow czwarty rok ti');
    }
}

pies.waga = 6; // utyl sie
pies['wiek'] = 'dwa';

write(pies);

write("");

write(pies.imie);
write(pies.waga);

pies.szczekaj();

// Zad. 3.4 s.74

let myCar = {
    make: 'Volkswagen',
    model: 'Passat',
    edition: 'B5',
    year: 2003,
    color: 'black',
    isElectric: false
};

let color = 'blue';
myCar['color'] = color;

myCar['forSale'] = true;

console.log(`Marka samochodu: ${myCar.make}`);
console.log(`Model samochodu: ${myCar.model}`);

console.log(`Na sprzedaż: ${myCar['forSale']}`);
//28
let rain = true;

if (rain) {
    console.log("** Wychodząc z domu, zabieram ze sobą parasol **");
} else {
    console.log("** Wychodząc z domu, nie zabieram parasola **");
}

// Zad. 4.1 s. 82

let bool = false;

console.log(bool);

if (bool) {
    console.log("true");
} else {
    console.log("false");
}
//Październik
//10
arr = new Array(1, 2, 3, 4, 5, 6, 7, 8);

arr.pop();

arr.shift();
console.log(arr);

arr.splice(1, 3);
console.log(arr);

delete arr[0];

arr2 = new Array(2, 3, 4, 5, 6, 7, 8, 6)

let findValue = arr2.find(function(e) {return e === 6 });
let findValue2 = arr2.find(e => e === 10);

console.log(findValue, findValue2);

let findValue3 = arr2.indexOf(6, 4); // Jeśli elementu nie ma w tablicy to domyślnie będzie -1

console.log(findValue3);
//15
// Zad. 3.2 s. 70

zakupy = new Array();

zakupy.push("Mleko", "Pieczywo", "Jabłka"); // Dodaj artykuły do listy
zakupy.splice(1, 1, "Banan", "Jajka"); // Zamień pieczywo na Banan i Jajka
zakupy.pop(-1); // Usuń ostatni element z listy
console.log(zakupy);
zakupy.sort(); // Posortuj elementy alfabetycznie
zakupy.indexOf("Mleko"); // Znajdź index elementu Mleko
zakupy.splice(1, 0, "Marchew", "Sałata"); // Dodaj Marchew i Sałatę po Bananie

zakupy2 = new Array("Sok", "Pop"); // Utwórz drugą listę z podanymi elementami

zakupy = zakupy.concat(zakupy2, zakupy2); // Połącz listę zakupy z zakupy2 dwa razy

console.log(zakupy.lastIndexOf("Pop")); // Indeks ostatniego wystąpienia elementu Pop
//Grudzień 
let mile = 200;
let kilometry = mile * 1.60934;

console.log(`Odległość ${mile} mil odpowiada ${kilometry.toFixed(4)} kilometra`);