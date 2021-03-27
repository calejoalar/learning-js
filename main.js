let arreglo = [];
let registro = {};
let enumeracion = 0;

function registrar() {
    let txtNombre = document.querySelector("#txtNombre").value;
    let txtAutor = document.querySelector("#txtAutor").value;
    let txtFechaPublicacion = document.querySelector("#txtFechaPublicacion").value;

    let newData = {
        id: ++enumeracion,
        nombre: txtNombre,
        autor: txtAutor,
        fechaPublicacion: txtFechaPublicacion
    };

    arreglo.push(newData);

    let listado = document.querySelector("#listado");

    let row = document.createElement('tr');
    let column;
    for (let elem in newData) {
        column = document.createElement('td');
        column.appendChild(document.createTextNode(newData[elem]));
        row.appendChild(column);
    }
    listado.appendChild(row);

    console.log(`Se registro los siguientes valores: \n
                ID: ${enumeracion}\n
                Nombre de Libro: ${txtNombre} \n
                Autor: ${txtAutor} \n
                Fecha de Publicación: ${txtFechaPublicacion}.`)
    console.log(arreglo);
}