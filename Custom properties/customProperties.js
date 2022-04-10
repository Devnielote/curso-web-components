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
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return /*css*/ `
        <style>
            :host{
                --color-primary: #bb3e03;
                --color-secondary: #ee9b00;
                --title-primary: 30px;
                --title-secondary: 25px;

                display: inline-block;
                width: 100%;
                min-width: 320px;
                max-width: 450px;
                font-size: 1rem;
            }
            section {
                background: var(--color-primary);
            }
            section div {
                background: var(--color-secondary);
            }

            h2 {
                font-size: var(--title-primary);
            }

            p {
                font-size: var(--title-secondary);
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