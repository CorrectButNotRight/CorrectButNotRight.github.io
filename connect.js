function getN(n) {
    var url;
    url = "https://correct-but-not-right-simple.herokuapp.com/?n=" + n;
    return url;

}

function getMark(c, i, a) {
    var url;
    url = "https://correct-but-not-right-simple.herokuapp.com/mark/?c=" 
            + c + "&i=" + i + "&a=" + a;
    return url;

}


$(document).ready(function () {

    $("#form1").submit(function (event) {
        event.preventDefault();
        var cor = $("#cor").val();
        var inc = $("#inc").val();
        var abs = $("#abs").val();
        var url = getMark(cor, inc, abs);
        $.get(url, function (data, status) {
            $("#num").html(function () {
                return data;
            });
        });
    });

});