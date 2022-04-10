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
        :host {
            display: inline-block;
            width: 100%;
            min-width: 300px;
            max-width: 450px;
            font-size: 20px;
            background: grey;
          }
        :host(.blue) h2{
            color: blue;
        }
        :host([yellow]) h2, :host([yellow]) p {
            color: yellow;
        }
        :host-context(article.card){
            display:flex;
            max-width: 100%;
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