import TTTController from "./controller/TTTController.js";
new TTTController()

/*import { Palya } from "./Palya.js"
import TTTModell from "./modell/TTTModell.js"



//const adatLISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
const taroloElem = $(".palyamezo")
//let lepes = 0

const tttModell = new TTTModell()

new Palya(tttModell.getList(), taroloElem)

$(window).on("katt", (event)=>{

    console.log(event.detail)

    /*
    if(lepes % 2 === 0){
        adatLISTA[event.detail] = "X";

    }else{
        adatLISTA[event.detail] = "O";

    }
    lepes++;
    console.log(adatLISTA)*/
/*
    tttModell.lepteto(event.detail)
    new Palya(tttModell.getList(), taroloElem)
})
*/


//annyi tortenik h peldanyositjuk a kontrollert, ez a main js a program belepesi pntja
//enneka feladata kettős, egyik h peldanyositja a modelt és a viewt, a masik feladat h feliratkozik az eseménykezelőkre
// eseménykezelőpkben fogja meghivni a modellnek a megfelelo metodusait vagy a viewna megfelelo metodusait, jelenleg csak ujrapeldanyositpttuk es nem hituk

// modfell csakak adatokkal foglalkozik, eloallitja adatok tenyleges allapotat??
// itt x v o kovetkezik, 
//aktualis alapotot irja le, es aloallitsa a kokvetkezo allapotot
//lepteto metodus lista xedik elemere beirja az elemet noveli lepest egyel es megnezi mi lesz a kpvetkezo elem, ezt csinalja amodell
// 

//HF: ki győzött?
//kontroler lekéri aktualis allapotot, ezzel mar tudja a palyat peldanyositani, ennek es mezonek mar vsak meg kell jeleniteni az akutualis allapotot (view)
//ehhez az infokat a kontrolleren keresztul kapja, vmilyen szuloelembe
//annyi mezot fog peldanyositani amennyire stzuklsege van
//mezo egyetlen kis divet fog megjeleniteni, eza dolga, tudja hanyadik, hova kell letrehozni stb, itt tudjuk generalni a sajat eseményt, ez arrra való h megmondjuk éppen melyik elemre katittntottunk