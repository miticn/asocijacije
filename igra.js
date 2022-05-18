$(document).ready(function() {
    function getAsoc(max){
        return Math.floor(Math.random() * max) + 1;
    }
    let blockOpen = false;

    let turn = "blue";

    let blockInput ={
        A : false,
        B : false,
        C : false,
        D : false,
        final : false
    };


    function updateInputBlock(blockInput){
        for(j=0,g = String.fromCharCode(65 + j); j<4; j++,g = String.fromCharCode(65 + j)){
            $("#"+g).prop( "disabled", blockInput[g]);
        }
        $("#final").prop( "disabled", blockInput["final"]);
    }

    function blockTyping(){
        
    }

    let asocijacija ={
        A : ["ZANIMANJE","POSAO","VOJNIK","ADVOKAT","PROFESIJA"],
        B : ["PRED VRATIMA","VOJSKOVOĐA","KARTAGINA","SLONOVI","HANIBAL"],
        C : ["MIŠIĆ","DUGAČAK","CIPELA","DLAKA","JEZIK"],
        D : ["FONOLOGIJA","SINTAKSA","SEMANTIKA","PRAVILA","GRAMATIKA"]
    };

    let curAsocijacija = asocijacija;

    for(i=1; i<=4; i++){
        for(j=0,g = String.fromCharCode(65 + j); j<4; j++,g = String.fromCharCode(65 + j)){
            //alert("#"+g+i);
            $("#"+g+i).click(function (){
                if(!blockOpen)
                    $(this).val(curAsocijacija[$(this).attr("id")[0]][$(this).attr("id")[1]-1]);
                blockOpen = true;
            })
        }
    }

    updateInputBlock(blockInput);
})