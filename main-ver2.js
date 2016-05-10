"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = [ "000000", "000001", "000010", "000100", "001000", "010000", "100000", "000011", "000110", "001100", "011000", "110000", "100001", "000101", "001010", "010100", "101000", "010001", "100010", "001001", "010010", "100100", "000111", "001110", "011100", "111000", "110001", "100011", "001011", "010110", "101100", "011001", "110010", "100101", "001101", "011010", "110100", "101001", "010011", "100110", "010101", "101010", "001111", "011110", "111100", "111001", "110011", "100111", "010111", "101110", "011101", "110101", "111010", "101011", "011011", "110110", "101101", "011111", "111110", "111101", "111011", "110111", "101111", "111111" ], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

window.onload = function() {
    stepSequence();
};