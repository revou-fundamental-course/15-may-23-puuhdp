function hitungl(){
    var sisil = document.getElementById("sisil").value;
    var output = document.getElementById("outputl");
    const rumusl = sisil*sisil;
    const hasill = rumusl.toFixed(2);

    document.getElementsById("rumusl").innerHtml = sisil + 'x' + sisil;
    document.getElementsById("hasill").innerHtml = hasill;
}

function hitungk(){
    var sisik = document.getElementById("sisik").value;
    var output = document.getElementById("outputk");
    const rumusk = 4 * sisik;

    document.getElementById("sisik").innerHTML = sisik + 'x 4';
    document.getElementById("hasilk").innerHtml = rumusk;
}

function reset(){
    document.getElementByName("reset").reset();
}

