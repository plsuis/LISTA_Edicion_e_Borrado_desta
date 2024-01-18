import { eventoEditar,eventoGardar,eventoEliminar } from "../funcions/helpers.js"

function eventos(pintarElementos){

    envio.addEventListener("click",(e)=>{
        pintarElementos(entrada.value)
        entrada.value = "" 
      })
      
      let eventoLista = document.querySelector('.lista');
      
      eventoLista.addEventListener("click", (e)=>{
        let isDisquete = e.target.getAttribute("src").includes('disquete');
        let isEditar = e.target.getAttribute("src").includes('editar');
        let isEliminar = e.target.getAttribute("src").includes('eliminar');
        
        if(isDisquete){
          eventoEditar(e.target.parentNode.children[0]);
        }
        if(isEditar){
          eventoGardar(e.target.parentNode.children[0]);
        }
        if(isEliminar){
          eventoEliminar(e.target.parentNode);
        }
      })
}

export { eventos }