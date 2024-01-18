import { eventoEditar,eventoGardar,eventoEliminar } from "../funcions/helpers.js"

function eventos(pintarElementos){

      envio.addEventListener("click",(e)=>{
        pintarElementos(entrada.value)
        entrada.value = "" 
      })
      
      let eventoLista = document.querySelector('.lista');
      
      eventoLista.addEventListener("click", (e)=>{
        

        let isEditar = e.target.getAttribute("src").includes('disquete');
        let isGardar = e.target.getAttribute("src").includes('editar');
        let isEliminar = e.target.getAttribute("src").includes('eliminar');
        
        isEditar ? eventoEditar(e.target.parentNode.children[0]) : "";
        isGardar ? eventoGardar(e.target.parentNode.children[0]) : "";
        isEliminar ? eventoEliminar(e.target.parentNode) : "";
      })
}

export { eventos }