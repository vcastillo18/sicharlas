const registros = []

function mostrar() {
    event.preventDefault();
    let participantName = document.getElementById("usuario_nombre").value;
    let accountNumber = document.getElementById("no_cuenta").value;
    let talkName = document.getElementById("nombre_charla").value;
    let maxSpaces = document.getElementById("cupo_maximo").value;

    if (talkName === '' || !participantName || !accountNumber || !maxSpaces) {
        alert('Completa la información faltante');
    } else {
        const userInfo = {
            'nombreParticipante': participantName,
            'numeroCuenta': accountNumber,
            'nombreCharla': talkName,
            'cupoMax': maxSpaces
        };

        if (localStorage.getItem("panelistas") === null) {
            let panelistas = []
            panelistas.push(userInfo);
            localStorage.setItem("panelistas", JSON.stringify(panelistas))
        } else {
            let panelistas = JSON.parse(localStorage.getItem("panelistas"));
            panelistas.push(userInfo);
            localStorage.setItem("panelistas", JSON.stringify(panelistas))
        } 

        registros.push(userInfo);

        registros.forEach((element, i) => {
            console.log(`Usuario ${i+1}: `, element);
        });

        alert('Registro guardado con éxito');
        document.getElementById("form").reset();
    }
}

function listar() {
        event.preventDefault();
        let tableBody = document.getElementById("tbody");
        tableBody.innerHTML = '';
        
        let panelistas = JSON.parse(localStorage.getItem("panelistas"));

        for (let i = 0; i < panelistas.length; i++) {
            let name = `<td>${panelistas[i].nombreParticipante}</td>`;
            let numeroCuenta = `<td>${panelistas[i].numeroCuenta}</td>`;
            let charla = `<td>${panelistas[i].nombreCharla}</td>`
            let cupo = `<td>${panelistas[i].cupoMax}</td>`

            tableBody.innerHTML += `<tr>${name + numeroCuenta + charla + cupo}</tr>`
        }
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("tbody")) {
        listar();
    }
});

fetch("http://jsonplaceholder.typicode.com/photos&quot;)
.then((response) => { return response.json()
console.log(response)   
})