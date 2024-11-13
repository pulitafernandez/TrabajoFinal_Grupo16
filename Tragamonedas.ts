abstract class Tragamonedas{
    nombre:string;
    tematica:string;
    apuestaMinima:number;

    constructor(nombre:string, tematica:string, apuestaMinima:number){
        this.nombre=nombre;
        this.tematica=tematica;
        this.apuestaMinima=apuestaMinima;
    }

    //en base a la apuesta, veo que resultado obtiene
    public resultado(apuesta:Apuesta): string{
        if(!apuesta.esValida(this.apuestaMinima)){
            return `La apuesta minima es ${this.apuestaMinima}. Apuesta invalida`
        }

        //genero el resultado del juego
        const resultadoJuego = this.generarResultado();
        const esGanador = Math.random()>0.5; //probalidad de ganar

        //calculo la ganancia
        const ganancia = apuesta.calcularGanancia(esGanador);
        if(ganancia>0){
            return `Ganaste!! El resultado es ${resultadoJuego}. Ganaste $ ${ganancia}`;
        }
        else{
            return `Perdiste. El resultado es ${resultadoJuego}`;
        }
    }

    //metodo abstracto
    protected abstract generarResultado():string;

}

