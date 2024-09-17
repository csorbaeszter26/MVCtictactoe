
import { Palya } from "../view/Palya.js"
import TTTModell from "../modell/TTTModell.js"


export default class TTTController{
    constructor(){
        this.taroloElem = $(".palyamezo")
        this.tttModell = new TTTModell()
        new Palya(this.tttModell.getList(), this.taroloElem)
        this.#esemenyKezelo()
    }
   
    #esemenyKezelo(){
        $(window).on("katt", (event)=>{
            console.log(event.detail)
            this.tttModell.lepteto(event.detail)
            new Palya(this.tttModell.getList(), this.taroloElem)
        })

    }
    

    

}