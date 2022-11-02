/* Ej1 */
/*
class Producto {
    CuentaCorriente;
    CajaAhorro;
    SeguroDeVida;
    SeguroHogar;

    constructor(CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar) {
        this.CuentaCorriente = CuentaCorriente;
        this.CajaAhorro = CajaAhorro;
        this.SeguroDeVida = SeguroDeVida;
        this.SeguroHogar = SeguroHogar;
    }

    clone () {

        return new Persona(this.CuentaCorriente, this.CajaAhorro, this.SeguroDeVida, this.SeguroHogar );
    }

    
}
const newCuentaBanco = new Producto ("-20000","12000","no","si");
const copy = clone(newCuentaBanco); */

/* 2 - Supongamos que vamos a crear una oficina para una empresa determinada 
y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. 
Si intento crear una segunda oficina me debería devolver la primera instancia creada. 
Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.
*/
/*
let _singleton = null;

class Empresa{

    constructor(nombre, empleado){
        if(!_singleton){
            this.nombre = nombre;
            _singleton = this;
            this.empleado = empleado;
            _singleton = this;
        }
        else
        return _singleton
        console.log("Singleton class created")
    }

    SingletonOperation (){
        console.log("SingletonOperation")
    }

    getSingletonData () {
        return this.nombre + this.empleado;
    }
}

function init_Singleton (){
    let nombre = new Empresa("Cocucha","34");
    let nombre2 = new Empresa("Pepicola","42");
    console.log(nombre.getSingletonData());
    console.log(nombre2.getSingletonData());
    console.log(nombre instanceof _singleton)
    console.log(nombre2 instanceof _singleton)
    console.log(nombre === nombre2)

}*/


/* 3- Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.*/
/*
export default class Pizza {
    queso;
    tomate;
    masaFina;
    anana;

    constructor() {
      this.queso = false;
      this.tomate = false;
      this.masaFina = false;
      this.anana = 0;
    }

    setQueso() {
        this.queso = true;
        return this;
    }

    setTomate() {
        this.tomate = true;
        return this;
    }

    setMasaFina() {
        this.masaFina = true;
        return this;
    }

    setAnana() {
        this.anana = true;
        return this;
    }

    build() {
        return {
          queso: this.queso,
          tomate: this.tomate,
          masaFina: this.masaFina,
          anana: this.anana,
        };
}
}
let pizza = new Pizza().build();
let pizzaQuesoTomate = new Pizza().setQueso().setTomate.build();
console.log(pizzaQuesoTomate); */


/*4 - Supongamos que tengo 3 manzanas pero se diferencian cada una de su color (la primera es amarilla, la segunda roja y la tercera verde) y de su fecha de vencimiento (la primera vence en 5 dias, la segunda en 7 dias y la tercera en 10 dias). Para no instanciar cada sub clase de manzanas de manera separada crear la clase AppleFactory y dependiendo de los parámetros mandados, va a hacer una instancia de objeto. Aplicar el patrón de diseño Factory Method.*/

class Color{
    constructor(color){

    }
}

class Vencimiento{
    constructor(vencimiento)

}

class Factory{
    create = () =>{
        
    }
}