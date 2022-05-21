$(document).ready(function(){
    let sub1 = false;
    let sub2 = false;

    localStorage.setItem('myCat', 'Tom');

    function start(){
        alert("pocetak igre");
    }
    function igrac1(){
        alert($("#igrac1txt").val());
    }

    function igrac2(){
        alert("test");
    }

    $("#igrac1form").submit(function(){
        $("#igrac1txt").attr('readonly', true);
        sub1 = true;
        if(sub2) start();

    });

    $("#igrac2form").submit(function(){
        $("#igrac2txt").attr('readonly', true);
        sub2 = true;
        if(sub1) start();

    });

});