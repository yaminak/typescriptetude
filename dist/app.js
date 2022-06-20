"use strict";
const myWorld = 'world';
function hello(world = myWorld) {
    return `Hello ${world}`;
}
document.write(hello('monde'));
const myArray = [1, 2, 3];
const myStringArray = [
    "chaine1",
    "chaine2",
];
const myValeur = 6;
const myValeur2 = "une chaine";
var sansValeur;
function codeurGroupTherapy(civilite, nom, age, job) {
    return ` Bonjour, je suis ${civilite} ${nom}, j'ai ${age} ans, ${job ? `je suis ${job}` : ''} et je suis accro au code ! ! ` + `<br/><br> - Bonjour ${civilite} ${nom}`;
}
let civilite = "Monsieur";
let nom = "capone";
let age = 47;
let job = "camioneur";
document.write(codeurGroupTherapy(civilite, nom, age));
let uneVariable;
uneVariable = "une chaine";
uneVariable = 34;
uneVariable = true;
function printHello() {
    console.log('hello');
}
printHello();
const calculette = (a, b, op) => {
    switch (op) {
        case 'multiplier':
            return a * b;
            break;
        case 'additionner':
            return a + b;
            break;
        case 'diviser':
            return b !== 0 ? a / b : 'error';
            break;
        case 'soustraire':
            return a - b;
            break;
        default:
            return 'operation inconnue';
    }
};
document.write('<br>');
document.write(calculette(5, 10, 'additionner').toString());
class Employe {
    constructor(nom, fonction) {
        this.nom = nom;
        this.fonction = fonction;
    }
}
class contractuel extends Employe {
    constructor(nom, fonction) {
        super(nom, fonction);
        this.salaire = this.initialiseSalaire();
    }
    initialiseSalaire() {
        return 0;
    }
}
class Manager extends Employe {
    constructor(nom, fonction) {
        super(nom, fonction);
        this.salaire = this.initialiseSalaire();
    }
    initialiseSalaire() {
        return 1000;
    }
    recoitPayeParLesRh() {
        this.salaire += 2200;
    }
}
class Rh extends Employe {
    constructor(nom, fonction) {
        super(nom, fonction);
    }
    Paye(individu) {
        individu.recoitPayeParLesRh();
    }
}
let sam = new contractuel("sam", "courrier");
let joe = new Manager("joe", "directeur des finances");
let helene = new Rh("helene", "bureau des RH");
helene.Paye(joe);
document.write('cumul salaire Joe' + joe.salaire + "€");
//# sourceMappingURL=app.js.map