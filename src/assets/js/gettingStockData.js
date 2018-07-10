var a = null;
var news;
var charts;
var quote;
var counter = 0;

$.ajax({
    url: "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m",
    success: function(result) {
        a = result;
    },
    async: true,
}).done(function() {

    charts = a.chart;
    news = a.news;
    quote = a.quote;
    counter = Math.floor((Math.random()*(news.length-1))+1);

    $("body").append($("<div id='news"+counter+"' style='width:500px; padding:0px'><img src='"+ news[counter].image +"' width='500'></div>"))

    $("#news"+counter+"").append($("<div id='#news"+counter+"child' style='width:500px; margin:0px'><h1>"+ news[counter].headline +"</h1><h5>Date: "+ news[counter].datetime +" From source: <a href='"+ news[counter].url +"'>"+ news[counter].source +"</a></h5><p>"+news[counter].summary+"</p></div>"))
});

