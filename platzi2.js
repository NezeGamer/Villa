var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var a = 250;
var b = 250;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 39,
    RIGHT: 37
};

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
}

var pollo = {
    url: "pollo.png",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

var cantidad = aleatorio(1,5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas ()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos ()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdos ()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK);
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK);
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOK);
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if(cerdo.cargaOK);
    {
            papel.drawImage(cerdo.imagen, a, b);
    }
    
}
function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

document.addEventListener("keydown", dibujarTeclado);


    function dibujarTeclado(evento)
    {
        if(cerdo.cargaOK);
        {
        var movimiento = 80;
        switch(evento.keyCode)
        {
        case teclas.UP:
                document.addEventListener("keydown", dibujar);
                if(fondo.cargaOK);
                {
                    papel.drawImage(fondo.imagen, 0, 0);
                }
                if(vaca.cargaOK);
                {
                    for(var v=0; v < cantidad; v++)
                    {
                        var x = aleatorio(0, 7);
                        var y = aleatorio(0, 7);
                        var x = x * 60;
                        var y = y * 60;
                        papel.drawImage(vaca.imagen, x, y);
                    }
                }
                if(pollo.cargaOK);
                {
                    for(var v=0; v < cantidad; v++)
                    {
                        var x = aleatorio(0, 7);
                        var y = aleatorio(0, 7);
                        var x = x * 60;
                        var y = y * 60;
                        papel.drawImage(pollo.imagen, x, y);
                    }
                }
                if (b > 10)
                {
                papel.drawImage(cerdo.imagen, a, b - movimiento);
                b = b - movimiento;
                }
        break;
        case teclas.DOWN:
            document.addEventListener("keydown", dibujar);
            if(fondo.cargaOK);
            {
                papel.drawImage(fondo.imagen, 0, 0);
            }
            if(vaca.cargaOK);
            {
                for(var v=0; v < cantidad; v++)
                {
                    var x = aleatorio(0, 7);
                    var y = aleatorio(0, 7);
                    var x = x * 60;
                    var y = y * 60;
                    papel.drawImage(vaca.imagen, x, y);
                }
            }
            if(pollo.cargaOK);
            {
                for(var v=0; v < cantidad; v++)
                {
                    var x = aleatorio(0, 7);
                    var y = aleatorio(0, 7);
                    var x = x * 60;
                    var y = y * 60;
                    papel.drawImage(pollo.imagen, x, y);
                }
            }
            if (b < 410)
            {
            papel.drawImage(cerdo.imagen, a, b + movimiento);
            b = b + movimiento;
            }
        break;
        case teclas.LEFT:
                    document.addEventListener("keydown", dibujar);
                    if(fondo.cargaOK);
                    {
                        papel.drawImage(fondo.imagen, 0, 0);
                    }
                    if(vaca.cargaOK);
                    {
                        for(var v=0; v < cantidad; v++)
                        {
                            var x = aleatorio(0, 7);
                            var y = aleatorio(0, 7);
                            var x = x * 60;
                            var y = y * 60;
                            papel.drawImage(vaca.imagen, x, y);
                        }
                    }
                    if(pollo.cargaOK);
                    {
                        for(var v=0; v < cantidad; v++)
                        {
                            var x = aleatorio(0, 7);
                            var y = aleatorio(0, 7);
                            var x = x * 60;
                            var y = y * 60;
                            papel.drawImage(pollo.imagen, x, y);
                        }
                    }
                    if (a < 410)
                    {
                    papel.drawImage(cerdo.imagen, a + movimiento, b);
                    a = a + movimiento;
                    }
        break;
        case teclas.RIGHT:
                document.addEventListener("keydown", dibujar);
                if(fondo.cargaOK);
                {
                    papel.drawImage(fondo.imagen, 0, 0);
                }
                if(vaca.cargaOK);
                {
                    for(var v=0; v < cantidad; v++)
                    {
                        var x = aleatorio(0, 7);
                        var y = aleatorio(0, 7);
                        var x = x * 60;
                        var y = y * 60;
                        papel.drawImage(vaca.imagen, x, y);
                    }
                }
                if(pollo.cargaOK);
                {
                    for(var v=0; v < cantidad; v++)
                    {
                        var x = aleatorio(0, 7);
                        var y = aleatorio(0, 7);
                        var x = x * 60;
                        var y = y * 60;
                        papel.drawImage(pollo.imagen, x, y);
                    }
                }
                if (a > 10)
                {
                papel.drawImage(cerdo.imagen, a - movimiento, b);
                a = a - movimiento;
                }
        break;
        }
    }
    }