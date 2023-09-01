const angeleno = 450;
const bnb = 780;
const voiture = 380;

const cesar = 580;
const cesarByNight = cesar/3;

const vacances = bnb + voiture + cesar + angeleno;

const vacWahid = bnb + voiture + cesar;

const solde = 2590;

const daron = 170;

const toWahidNet = (vacances/2) - angeleno


const soldeFinal = solde + daron - toWahidNet;

const hypothese = vacWahid - toWahidNet;

const reel = vacances / 2;

console.log("total de frais à ", vacances)

if(hypothese === reel) {
    console.log('le compte est BON tu lui dois donc', toWahidNet);
} else {
    console.log('le compte est mauvais chakal');
}

console.log("ton argent de mala est donc ", soldeFinal);
const malaPerDay = (soldeFinal + 500) / 8

console.log('soit ' + malaPerDay + 'e par jour');
