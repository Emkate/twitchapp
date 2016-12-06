$(function(){

    $("a").click(function(){
        $("#listDiv").animate({"margin-top":"30px"}, 600, function(){
            $("#listDiv").animate({"width":"100%", "height":"120px"});
        });
    });

});