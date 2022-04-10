class myElement extends HTMLElement {
    constructor(){
        super();
    }
    //Para clonar el fragment generado por el template en nuestro HTML podemos crear un método que genere la estructura HTML.
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hola mundo!</h2>
                <div>
                    <p>Este texto ha sido generado con un método en JS.</p>
                    <p>Los estilos también son generados con un método de JS, pero ese método es ejecutado directamente en el método que renderiza el texto.</p>
                    <p>No olvides revisar el código para tener todo más claro!</p>
                </div>
            </section>
            ${this.getStyles()}
            `;
            // Ejecutamos el método que trae los estilos directamente en el método que retorna la estructura HTML
        return template;
    }
    //Dividir las funciones que se encargan de renderizar toda nuestra estructura es una buena práctica.
    getStyles(){
        return `
        <style>
            h2 {
                color: green;
            }

            p {
                color: gold;
            }

            p:last-child {
                font-size: 1.3rem;
                color:red
            }
        </style>
        `;
    }
    //Hacemos otro método se encargue de renderizarlo en DOM
    render(){
        //cloneNode(true) nos ayuda a que también sean clonados los nodos internos de nuestra const template, no solo el section.
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);