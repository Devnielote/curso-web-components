class customComponent extends HTMLElement {
    //El constructor es la primera parte del ciclo de vida de un componente
    constructor(){
        super();
        console.log('Hola desde el constructor! - Esto ha sido guardado en memoria')
    }
    //ConnectedCallback es el siguiente paso en el ciclo de vida.
    connectedCallback(){
        console.log('Hola desde el DOM - Es decir que el elemento ya existe como nodo en el DOM.')
    }
    disconnectedCallback(){
        console.log('A partir de aquí sacamos a nuestro componente del DOM.')
    }
}
customElements.define('custom-component', customComponent);

//Aquí hacemos la línea de código que se encargará de eliminar al componente del DOM.
document.querySelector('custom-component').remove();