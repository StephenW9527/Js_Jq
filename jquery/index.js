$(function(){

    $("#btn1").click(function(){
        var name  = $("#inputName").val(); 
        console.log(typeof(name));    //string
        $(".div1").text("Hello,"+ name);
    });
    
    $("#togBtn").click(function(){
        if($("#togBtn").val() == "消失"){
            $("#togBtn").val("出現");
            $("#p1").hide();
        }else{ 
            $("#togBtn").val("消失");
            $("#p1").show();
        } 
    });
    
    $("#addBtn").click(function(){
    //    $("<li>"+$("#addItems").val()+"</li>").appendTo("#list");
       
    // 新增一個 li 元素，包含文本和一個 checkbox
        $("<li><input type='checkbox' class='check'>" + $("#addItems").val() + "</li>").appendTo("#list");
    
        $("#addItems").val('');
    });
    
    // $('#delBtn').click(function(){
    //      ($(".check").checked.val !=='') ? $(this).parent().remove() : alert("請先勾選要刪除的項目");
    //     $(".check").attr('checked','checked').remove();
    //     console.log($(".check").checked.val);
    // });
    
    
    $('#delBtn').click(function(){
        // 選取所有帶有 'check' class 且被勾選的 checkbox
        var checkedCheckboxes = $(".check:checked");
    
        if (checkedCheckboxes.length > 0) {
            // 移除被勾選的 checkbox 所屬的父元素
            checkedCheckboxes.parent().remove();
        } else {
            alert("請先勾選要刪除的項目");
        }
    });
    
    
    // var el = document.querySelectorAll(".check em"); 回傳陣列
    
    //    var el = document.querySelector('#try1');
    //    el.innerHTML = '';
    var el = document.querySelector('#insertTag');
    $("#insertBtn").click(function(){
        el = $("#insertTag").val();
        // console.log(el);
        if(el == ''){
            
            alert("請輸入要插入的tag");
        
        }else{
        
            $('#try1').html(el);
            $("#insertTag").val('');
      
        }
    });



});
 


