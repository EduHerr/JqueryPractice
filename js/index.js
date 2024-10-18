$('#frm-data').submit(function(event){
    event.preventDefault();
    
    const data = getFormData(); //Obtener data
    appendToTable(data); //Agregar registro a tabla

    $('#frm-data')[0].reset()//limpiar formulario
});

function appendToTable(row){
    const { name, firstName, secondName, dob, rfc, mail, celular, cp, noExterior, calle, colonia, ciudad, estado } = row;

    $('#tblData tbody').append(`
        <tr>
            <td>${name} ${firstName} ${secondName}</td>
            <td>${dob}</td>
            <td>${rfc}</td>
            <td>${mail}</td>
            <td>${celular}</td>
            <td>
                C.P. ${cp}, ${calle}, no. ${noExterior}, col. ${colonia}, ${ciudad}, ${estado}
            </td>
        </tr>
    `);
}

function getFormData(){
    const name = $('#inpNombre').val();
    const firstName = $('#inpApellidoP').val();
    const secondName = $('#inpApellidoM').val();
    const dob = $('#inpFechaNacimiento').val(); //day of birthday
    const rfc = $('#inpRFC').val();
    const mail = $('#inpMail').val();
    const celular = $('#inpCelular').val();
    const cp = $('#inpCP').val();
    const noExterior = $('#inpNoExterior').val();
    const calle = $('#inpCalle').val();
    const colonia = $('#inpColonia').val();
    const ciudad = $('#inpCiudad').val();
    const estado = $('#inpEstado').val();

    return { name, firstName, secondName, dob, rfc, mail, celular, cp, noExterior, calle, colonia, ciudad, estado };
}
