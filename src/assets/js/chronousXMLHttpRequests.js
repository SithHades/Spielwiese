var xmlhttp = new XMLHttpRequest();
var myObj;

xmlhttp.open("GET", "https://api.iextrading.com/1.0/stock/aapl/ohlc", true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
       // console.log(myObj);

    }
};
var a;
var newObj = $.getJSON("https://api.iextrading.com/1.0/stock/aapl/ohlc", {format: "json"})
console.log(newObj);
//console.log(a);
var space = ": ";
$.getJSON( "https://api.iextrading.com/1.0/stock/aapl/ohlc", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        if(typeof val === 'object'){
            $.each( data, function( key, val ) {

                    items.push("<li id='" + key + "'>" + key + space + val + "</li>");

            });
        } else {
            items.push("<li id='" + key + "'>" + key + space + val + "</li>");
        }
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
});


$.ajax({
    url: "https://api.iextrading.com/1.0/stock/aapl/ohlc",
    success: function(result) {
        a = result;
    },
    async: false,
});
console.log(a);