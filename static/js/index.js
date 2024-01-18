import { eventos } from "./eventos/eventos.js";
import { 
  engadimosEnBody,
  creoDivWithInputAndImg as oInput} from "./funcions/funciones.js";

const pintarElementos = (dato)=>{
    engadimosEnBody(document.querySelector('.lista'),oInput(dato))
    
  }

eventos(pintarElementos)


