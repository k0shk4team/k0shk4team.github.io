var i=0;
setInterval(function(){
    var titles=[
"||",
"|k|",
"|k0|",
"|k0s|",
"|k0sh|",
"|k0shk|",
"|k0shk4|",
"|k0shk|",
"|k0sh|",
"|k0s|",
"|k0|",
"|k|",
"||",


]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

