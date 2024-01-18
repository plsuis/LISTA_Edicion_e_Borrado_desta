# Aclaracións

## A comezo do ficheiro

Estamos a importar os ficheiros que estamos a utilizar no evento:  ```eventoLista```

```javascript
import { eventoEditar,eventoGardar,eventoEliminar } from "../funcions/helpers.js"
```

## Función eventos

### Entrada

Esta función tén como entrada a función `pintarElementos`

### Descripción

Esta función contén dous eventos:

- `envio.addEventListener("click",<funcion>)`
- `eventoLista.addEventListener("click",<funcion>)`

#### eventoLista
> Descripción: traballa para editar, gardar e eliminar
#### envio

> Descripción: este evento é o que PINTA A LISTA, porque é a que utiliza a función `pintarElementos`, esta función está no arquivo `index.js`. 
## As funcións internas dos eventos

Os código internos de :

 - `eventoLista`: 
 ```javascript
        let isEditar = e.target.getAttribute("src").includes('disquete');
        let isGardar = e.target.getAttribute("src").includes('editar');
        let isEliminar = e.target.getAttribute("src").includes('eliminar');
        
        isEditar ? eventoEditar(e.target.parentNode.children[0]) : "";
        isGardar ? eventoGardar(e.target.parentNode.children[0]) : "";
        isEliminar ? eventoEliminar(e.target.parentNode) : "";
 
 ```
- `envio`:

```javascript
 envio.addEventListener("click",(e)=>{
        pintarElementos(entrada.value)
        entrada.value = "" 
      })
```


