//Doy bienvenida
let cliente = prompt("Ingrese su nombre").toUpperCase();
document.write("Bienvenido " + cliente + " a Hermes Asesores de Seguros" + "<br>" );

//array
const promo = [
    {
        vehiculo: "Auto",
        id: "Responsabilidad civil contra terceros",
        precio: 1839,
        foto: "https://www.sebandainsurance.com/blog/wp-content/uploads/2020/11/01-funcionamiento-seguro-autos.jpg",
    },
    {
        vehiculo: "Camioneta",
        id: "Responsabilidad civil contra terceros",
        precio: 2087,
        foto: "https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/07/499140.jpg",
    },
    {
        vehiculo: "Moto",
        id: "Responsabilidad civil contra terceros",
        precio: 330,
        foto: "https://www.turboseguros.com/wp-content/uploads/2019/05/seguros-para-motos-coberturas.jpg",
    },

];

console.table(promo);
// alert 
alert("Elija a continuación una de las siguientes coberturas:")
//pido info para que elija una cobertura
let vehiculo = prompt("Elije AUTO - CAMIONETA - MOTO").toUpperCase();
//operaciones 
//
const resta = (a, b) => a - b;
const suma = (a, b) => a + b;
const iva   = x => x * 0.21;
//

function descuento(resta,suma) {
    if (vehiculo == "AUTO" ) {

        // agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[0].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[0].vehiculo + `<br>`);
        document.write(promo[0].id  + `<br>`);
        document.write("$" + promo[0].precio + " s/iva" + `<br>` );
        document.write("</div>"  + "<br>");
        document.write("</div>"  + "<br>");
        // sacar el precio final con iva y descuento
        let precioFinal = resta(suma(1839, iva(1839)), 239); 
        document.write("<br>" + "Elegiste asegurar tu Auto" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $239");
        
    } 
    else if ( vehiculo == "CAMIONETA"){

        // agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[1].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[1].vehiculo + `<br>`);
        document.write(promo[1].id  + `<br>`);
        document.write("$"+promo[1].precio + " s/iva" + `<br>` );
        document.write("</div>"  + "<br>");
        document.write("</div>"  + "<br>");

        // a traves de las operaciones sacar el precio final con iva y descuento
        let precioFinal = resta(suma(2087, iva(2087)), 287); 
        document.write("<br>" + "Elegiste asegurar tu Camioneta" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $287");
        
    }
    else if(vehiculo == "MOTO" ){

        // agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[2].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[2].vehiculo + `<br>`);
        document.write(promo[2].id  + `<br>`);
        document.write("$"+promo[2].precio + " s/iva" + `<br>` );
        document.write("</div>" + "<br>");
        document.write("</div>"  + "<br>");

        // a traves de las operaciones sacar el precio final con iva y descuento
        let precioFinal = resta(suma(330, iva(330)), 130); 
        document.write("<br>" + "Elegiste asegurar tu Camioneta" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $130");
        
    }
    else{
        document.write("<br>" + "No tenemos esa cobertura.Vuelve a intentarlo.");
    }
}

descuento (resta,suma);




