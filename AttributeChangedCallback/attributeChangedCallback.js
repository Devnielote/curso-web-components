class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
    }
    //Antes de utilizar el método attributeChangedCallback(), debemos instanciar un observer que se encague de vigilar esos atributos que pueden cambiar.
    static get observedAttributes() {
        //Retornamos los atributos que serán ''observados'' dentro de un array para poder validarlos antes de cambiarlos.
        return [`title`,`text`,`img`];
    };
    //Después de dar de alta los atributos que queremos, llamamos al siguiente método que recibe 3 parámetros.
    attributeChangedCallback(attr,oldVal,newVal) {
        if(oldVal !== newVal){
            this[attr] = newVal;
        };
    };
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