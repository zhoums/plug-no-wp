$(function(){
    $("#ck").on("click", function(e){
        var bg = chrome.extension.getBackgroundPage();
        bg.setBegin();
    })
})