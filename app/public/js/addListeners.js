//AddListener para escribe lo que estes escribiendo en otro input
document.getElementById('cant').addEventListener('keyup', () => {

    document.getElementById('copycant').value = document.getElementById('cant').value;
    //console.log(copyCant);
});

document.getElementById('copycant').addEventListener('keyup', () => {

    document.getElementById('cant').value = document.getElementById('copycant').value;
    //console.log(cant);
});
