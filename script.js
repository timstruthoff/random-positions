'use strict'

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getPositions() {
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8])
    console.log(numbers);
    var pos = [[50, 50], [0, 0], [0, 50], [0, 100], [50, 0], [50, 100], [100, 0], [100, 50], [100, 100]];

    var array = [];

    function randomize(numberArray) {
        for (var f = 0; f < numberArray.length; f++) {
            var number = numberArray[f];
            number = number + getRandom(-9, 9);
            if (number < 0) number = 0;
            if (number > 100) number = 100;
            numberArray[f] = Math.round(number);
        }
        return numberArray;
    }

    array.push(randomize(pos[0]));
    (function () {
        for (var e = 0; e < numbers.length; e++) {
            var coords = pos[numbers[e]];
            /*(function () {
                for (var f = 0; f < coords.length; f++) {
                    var number = coords[f];
                    number = number + getRandom(-9, 9);
                    if (number < 0) number = 0;
                    if (number > 100) number = 100;
                    coords[f] = Math.round(number);
                }
            }())*/
            console.log(randomize(coords))
            array.push(randomize(coords))
        }
    }())

    return array;
}

console.log(getPositions())
    //getPositions();
