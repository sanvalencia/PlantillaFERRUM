const peticion = () => {
    fetch("http://localhost:8081/api/pedidos/")
        .then((response) => response.json())
        .then((data) => imprimirdatos(data.datos));
}

const imprimirdatos = (datos) => {
    console.log(datos);
    datos.forEach(element => {
        const listatabla = `
            <tr>
                <td>Número Pedido</td> 
                <td>${element.cedula}</td>
                <td>${element.cedula}</td>
                <td>${element.cedula}</td>
                <td>${element.cedula}</td>
                <td>${element.cedula}</td>
                <td>${element.cedula}</td>
                </tr>`;
        $("#pedidos tbody").append(listatabla)
    })
}

peticion();