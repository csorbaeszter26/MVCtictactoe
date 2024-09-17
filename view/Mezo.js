

export class Mezo{

    #szuloElem
    #jel
    #index

    constructor(jel, index, szuloElem){
        this.#szuloElem = szuloElem
        this.#index = index
        this.#jel = jel
        
        this.kiir()
        this.mezoElem = $(".mezo:last")
        if (this.#jel === " "){
            this.esemenyKezelo();
        }

        
       


    }

    kiir(){
        this.#szuloElem.append(`
            <div class="mezo card col-lg-4"><p>${this.#jel}<p></div>
        
        `)
    }

    esemenyKezelo(){
        this.mezoElem.on("click", ()=>{
            const e = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(e)
            //console.log("O")
            //this.#mezoAdat

        })

    }

}