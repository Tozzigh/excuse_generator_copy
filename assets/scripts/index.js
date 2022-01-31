// EXERCISES//

// Array data //
let surnames = ['10', 'juan', '@12', null, 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let excuses = ['OMG?', 'What’s going on?', 'How much is it?', '18', null, undefined, function () { }];
let names2 = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M', 'Pep3'];

// First the given array is cleaned to remove the null and undefined.// 
function cleanArray(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            result.push(array[i]);
        }
    }
    return result;
}

// Function that generates a random value //
function random(array) {
    let random = array[Math.floor(Math.random() * (array.length))];
    return random;
}

// 1.- The function generateRandom generates a random excuse with the three given arrays.//
function generateRandom(cleanArraySurnames, cleanArrayExsuses, cleanArrayNames2) {

    cleanArraySurnames = cleanArray(surnames);
    cleanArrayExsuses = cleanArray(excuses);
    cleanArrayNames2 = cleanArray(names2);

    let newArraySurnames = random(cleanArraySurnames);
    let newArrayExcuses = random(cleanArrayExsuses);
    let newArrayNames2 = random(cleanArrayNames2);

    let excuseRandom = `${newArraySurnames} ${newArrayExcuses} ${newArrayNames2}`;
    return excuseRandom;
}

console.log("My random excuse: ", generateRandom());

// 2.- The function letterCounter counts the number of letter repetitions in each array.//
function letterCounter(array) {
    let newArray = cleanArray(array);
    let replay = {};

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {

            let typeLetter = newArray[i][j].toLowerCase();
            if (!replay[typeLetter]) {
                replay[typeLetter] = 1;
            } else {
                replay[typeLetter] += 1;
            }
        }
    }
    return replay;
}
console.log("My letter count: ", letterCounter(names2));


// 3.- The deleteReplay function deletes the repetitions in an array and returns the array without the repetition.//
function deleteReplay(array) {

    let cleanArrayDelete = cleanArray(array);

    const withoutReplay = new Set(cleanArrayDelete);
    return [...withoutReplay];
}
console.log("My array without replay: ", deleteReplay(names2));


// 4.- The reverseData function inverts all values in the array.//
function reverseData(array) {
    let invertedData = [];
    let cleanArrayReverse = cleanArray(array);

    for (let i = 0; i < cleanArrayReverse.length; i++) {
        let str = "";
        for (let sur = (cleanArrayReverse[i].length - 1); sur >= 0; sur--) {
            str += cleanArrayReverse[i][sur];
        }
        invertedData.push(str)
    }
    return invertedData;
}
console.log("My reversed array: ", reverseData(surnames))