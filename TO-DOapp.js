$("#btn-addtask").on("click",function () {
    
        $("#ct").fadeIn(1000).css("display","block");
    });
    
    $(".close").on("click",function(){
    
        $("#ct").fadeOut(1000,function(){
    
            $(this).css("display","none");    
        });
    
    
    });
    
    
    
    
    // new fun
    var num=0;
    $("#entertask").on("keypress",function(e){
    
    
    if(e.which==13 && $("input[type=text]").val() !=="" )
    {
    
    var a=$("input[type=text]").val();
        num++;
      
        $("table tbody").append("<tr id=tid"+num+"><td>"+a+"</td>  <td id=col"+num+"><label for=cp"+num+" class=g>Completed</label> <input type=radio class=g id=cp"+num+" name=status"+num+"><label for=wk"+num+" class=y >Working</label> <input type=radio id=wk"+num+" class=y name=status"+num+"><label for=wt"+num+" class=r >Waiting</label> <input type=radio id=wt"+num+" class=r  name=status"+num+"><img class=trashbox src=https://cdn0.iconfinder.com/data/icons/business-and-finance-96/48/13-512.png width=30px height=30px><img class=change src=https://static.thenounproject.com/png/124069-200.png width=30px height=30px>   </td></tr>");
    
    $("input[type=text]").val("");
    
        $("#ct").fadeOut(300,function(){
            $(this).css("display","none");
        });    
    
    }
    
            
    
    
    });
    
    
    
    
    $("table").on("change","input[type=radio]",function(){
    
    var dd=$(this).attr("id");
    // alert(dd)
    var clr=$(this).attr("class");
    // alert(clr);
    var tdid=$("#"+dd).closest("td").attr("id");
    // alert(tdid);
    
    switch(clr)
    {
    
        case "g":
                    $("#"+tdid).css("background","green");
                    if($("#"+tdid).css("background-color")==="rgb(0, 128, 0)" ){
                    
                         $("#"+tdid +"> :not(.g,img) ").hide(); 
                    }
        break;
    
        case "y":
                    $("#"+tdid).css("background","gold");
                        if($("#"+tdid).css("background-color")==="rgb(255, 215, 0)")
                    {
                            $("#"+tdid +"> :not(.y,img) ").hide(); 
    
                    }
    
        break;
    
        case "r":
                    $("#"+tdid).css("background","red");
                        $("#"+tdid).css("background","red");
                    if($("#"+tdid).css("background-color")==="rgb(255, 0, 0)")
                            {
                            $("#"+tdid +"> :not(.r,img) ").hide();
    
                    }
    
        break;
    }
    
    
        
    });
    
    
    // mouse enter and leave event 
    $("table").on("mouseenter","tr",function(){    
    var ta=$(this).attr("id");
    $("#"+ta+" img").fadeIn(200,function(){
    $("#"+ta+" img").css("display","inline");
    });
    });
    
    
    $("table").on("mouseleave","tr",function(){    
    var ta=$(this).attr("id");
    $("#"+ta+" img").fadeOut(200,function(){
    $("#"+ta+" img").css("display","none");
    
    });
    });
    
    
    // remove task
    $("table").on("click",".trashbox",function()
    {
    
    var vimp=$(this).closest("tr").attr("id");
        $("#"+vimp).remove();
    
    
    });
    
    // change task status
    $("table").on("click",".change",function(){
                    var imp=$(this).closest("tr td").attr("id");
                    $("#"+imp+" label").show();        
                            $("#"+imp).css("background","#6f8e8c");
                        $("#"+imp+" input[type=radio]").prop('checked', false);
    });
