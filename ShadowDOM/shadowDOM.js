class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/
        `
            <section>
                <h2>Hola mundo!</h2>
                <div>
                    <p>Este texto ha sido generado con un método en JS.</p>
                    <p> Este texto fue renderizado en el shadow DOM que instanciamos en el código JS.</p
                    <p>No olvides revisar el código para tener todo más claro!</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
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
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);