$('button').click(onBoton)

var oculto = false

function onBoton() {
    oculto = !oculto
    console.log(oculto)

    //$('#parrafo').css('display',  oculto? 'none' : 'block')

    var sel = $('#Titulo')
    /* oculto? sel.hide() : sel.show() */
    oculto? sel.fadeOut() : sel.fadeIn()

    $('button').text(oculto? 'Mostrar' : 'Ocultar') 
}