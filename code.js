function colorChange() {
    $(".index").css({"color": "black"});
    $(".index2").css({"color": "white"});
}

function colorNormal() {
    $(".index").css({"color": "white"});
    $(".index2").css({"color": "black"});
}

function resize() {
    $("#one").css({"transform": "scale(1.05)"})
}

function resizeNormal() {
    $("#one").css({"transform": "scale(1)"})
}

function openModalOne() {
    $("#oneImage").modal("show"); 
}

function closeModalOne() {
    $("#oneImage").modal("hide"); 
}