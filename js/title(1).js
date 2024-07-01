var i=0;
setInterval(function(){
    var titles=[
"||",
"|o|",
"|ob|",
"|obn|",
"|obno|",
"|obnox|",
"|obnoxi|",
"|obnoxio|",
"|obnoxiou|",
"|obnoxious|",
"|obnoxious.|",
"|obnoxious.c|",
"|obnoxious.cl|",
"|obnoxious.clu|",
"|obnoxious.club|",
"|obnoxious.clu|",
"|obnoxious.cl|",
"|obnoxious.c|",
"|obnoxious.|",
"|obnoxious|",
"|obnoxiou|",
"|obnoxio|",
"|obnoxi|",
"|obnox|",
"|obno|",
"|obn|",
"|ob|",
"|o|",
"||",

]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

