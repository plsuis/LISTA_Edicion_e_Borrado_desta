const creoAtributosImaxes = (referencia,direccion)=>{
    referencia.setAttribute("src",direccion);
    referencia.setAttribute("alt","imaxes");

}
const creoAtributosInput = (referencia,dato) =>{
    referencia.setAttribute('type','text');
    referencia.setAttribute('readonly','true');
    referencia.setAttribute(`value`,`${dato}`);
    referencia.setAttribute('class','probando');
}
const engadimosEnBody = (referencia,...datos)=>{
    
    for(let dato of datos){
        referencia.append(dato)
    }
}
const estiloPuntero = (referencia)=>{
    referencia.style.cursor = "pointer";
}
const eventoEditar = (referencia)=>{
    referencia.setAttribute('readonly','true');
}
const eventoGardar = (referencia)=>{
    referencia.removeAttribute("readonly");
    referencia.focus()
}
const eventoEliminar = (referencia)=>{
    referencia.remove()
}
export {
    creoAtributosImaxes,
    creoAtributosInput,
    engadimosEnBody,
    estiloPuntero,
    eventoEditar,
    eventoGardar,
    eventoEliminar
}