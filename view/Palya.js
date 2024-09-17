import { Mezo } from "./Mezo.js"

export class Palya{

    #szuloElem
    #lista = []

    constructor(lista, szuloElem){
        this.#szuloElem = szuloElem
        this.#lista = lista
        this.#szuloElem.empty()
        this.mezokKiir()


    }

    mezokKiir(){
        this.#lista.forEach((elem, index) => {
            //console.log("X")
            new Mezo(elem, index, this.#szuloElem)
        });

    }
    
}