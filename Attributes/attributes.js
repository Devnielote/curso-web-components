class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        //Otra forma de manjear datos dinámicos es definir desde los argumentos del constructor los atributos que corresponden a esas etiquetas del componente web que pueden ser modificadas.
        this.title = this.getAttribute('title');
        this.text = this.getAttribute('text');
        this.img = this.getAttribute('img');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/
        `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.text}</p>
                    <img src=${this.img} alt="" />
                </div>
                <div>
                <span>No olvides revisar el código para tener todo más claro!</span>
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
                color: gold;
            }

            p {
                color: black;
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