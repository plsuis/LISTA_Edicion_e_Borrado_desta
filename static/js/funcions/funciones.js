import {
    creoAtributosInput,
    creoAtributosImaxes,
    engadimosEnBody,
    estiloPuntero} from "./helpers.js";
import { direccionesImaxes } from "../../datos/constantes.js";


const creoElemento = (etiqueta)=>{
    return document.createElement(etiqueta);
}

const creoBotonGuardar = ()=>{
    let etiqueta = creoElemento('img');
    estiloPuntero(etiqueta);
    creoAtributosImaxes(etiqueta,direccionesImaxes.disquete)
    return etiqueta;
}
const creoBotonEliminar = ()=>{
    let etiqueta = creoElemento('img');
    estiloPuntero(etiqueta);
    creoAtributosImaxes(etiqueta,direccionesImaxes.eliminar)
    return etiqueta;
}
const creoBotonEditar = ()=>{
    let etiqueta = creoElemento('img');
    estiloPuntero(etiqueta);
    creoAtributosImaxes(etiqueta,direccionesImaxes.editar)
    return etiqueta;
}
const creoInput = (dato)=>{
    let etiqueta = creoElemento('input');
    estiloPuntero(etiqueta);
    creoAtributosInput(etiqueta,dato)
    return etiqueta;
}
const creoDivWithInputAndImg = (dato)=>{
    let etiqueta = creoElemento('div');
    engadimosEnBody(etiqueta,creoInput(dato),creoBotonGuardar(),creoBotonEditar(),creoBotonEliminar())
    return etiqueta;
}



export{
    creoElemento,
    creoAtributosImaxes,
    creoAtributosInput,
    engadimosEnBody,
    creoBotonGuardar,
    creoInput,
    creoDivWithInputAndImg
}