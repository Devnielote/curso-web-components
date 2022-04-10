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
                <h2>
                    <slot name='title'></slot>
                </h2>
                <div>
                    <p>
                    <slot name='text'></slot>
                    </p>
                </div>
                <div>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return /*css*/ `
        <style>
            ::slotted(.title){
                font-size: 3rem;
                color: red;
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