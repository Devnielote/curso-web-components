//Podemos definir un template de la siguiente forma, lo cual hace menos tedioso escribir la estructura html que se va a renderizar.
const template = document.createElement('div');
template.innerHTML = `
    <style>
        p:nth-child(2) {
            color: green;
            text-transform: uppercase;
            font-size: 3.5rem;
        }

        p:last-child {
            color: blue;
            font-size: 3rem;
        }
    </style>
    <p> Hola mundo generado con un template guardado en un variable.</p>
    <p> Es mas tedioso hacerlo así, porque no te lo autocompleta desde JS. </p>
`;

//Primero creamos una clase que extiende los métodos la API HTMLElement.
class myElement extends HTMLElement {
    constructor(){
        //No olvidar el super para poder utilizar los métodos de donde se extendío la clase (HTMLElemnt)
        super();
        //En el constructor solo definimos lo que se va a generar en el DOM.
        this.p = document.createElement('p');
    }
    //Utilizamos el siguiente método para renderizarlo en el DOM.
    connectedCallback(){
        this.p.textContent = 'Hola mundo generado desde un web component!'
        this.appendChild(this.p)
        this.appendChild(template);
    }
}

customElements.define('my-element', myElement); //Depués de definir nuestra clase utilziamos este método para definir el nombre que llevara como etiqueta HTML.