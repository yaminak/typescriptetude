const myWorld: string = 'world';
function hello(world: string = myWorld): string{
    return `Hello ${world}`;
}
document.write(hello('monde'));

const myArray: number[] = [1,2,3];
const myStringArray: string[] = [
    "chaine1",
    "chaine2",
];
const myValeur: string | number = 6;
const myValeur2: string | number = "une chaine";
var sansValeur: null | undefined;

function codeurGroupTherapy (civilite: string, nom: string, age: number, job?: string): string {
return ` Bonjour, je suis ${civilite} ${nom}, j'ai ${age} ans, ${job ?`je suis ${job}` : ''} et je suis accro au code ! ! ` + `<br/><br> - Bonjour ${civilite} ${nom}`;
}

let civilite: string = "Monsieur";
let nom: string = "capone";
let age: number = 47;
let job: string = "camioneur";

document.write(codeurGroupTherapy(civilite, nom, age));

let uneVariable: any;
uneVariable = "une chaine";
uneVariable = 34;
uneVariable = true;

function printHello(): void {
    console.log('hello');
}
printHello();
type Operation = 'multiplier' | 'additionner' | 'diviser' | 'soustraire';

const calculette = (a: number, b: number, op: Operation): number | string =>{
    switch(op){
        case 'multiplier':
            return a*b;
            break
                case 'additionner':
                    return a+b;
                    break
                        case 'diviser':
                            return b!==0 ? a/b: 'error';
                            break
                                case 'soustraire':
                                    return a-b;
                                    break
                                        default:
                                            return 'operation inconnue'
    }
}
document.write('<br>');
document.write(calculette(5,10, 'additionner').toString());

class Employe
{
    nom: string;
    fonction: string;

    constructor(nom: string, fonction: string) {
        this.nom = nom;
        this.fonction = fonction;

    }
}

class contractuel extends Employe {
    salaire: number;
    constructor(nom: string, fonction: string) {
        super(nom, fonction)
        this.salaire = this.initialiseSalaire()
    }
    initialiseSalaire(): number {
        return 0;
    }
}

class Manager extends Employe implements PayableParRh {
    salaire: number;
    constructor(nom: string, fonction: string) {
        super(nom, fonction)
        this.salaire = this.initialiseSalaire()
    }
    initialiseSalaire(): number {
        return 1000;
    }
    recoitPayeParLesRh(): void {
       this.salaire += 2200;
    }
}
interface PayableParRh {
    recoitPayeParLesRh(): void;
}
class Rh extends Employe {

    constructor(nom: string, fonction: string) {
        super(nom, fonction)
        
    }
    Paye(individu: PayableParRh) {
        individu.recoitPayeParLesRh();
    }
}
let sam = new contractuel("sam", "courrier");
let joe = new Manager("joe", "directeur des finances");
let helene = new Rh("helene", "bureau des RH");

helene.Paye(joe);
document.write('cumul salaire Joe' + joe.salaire + "€");