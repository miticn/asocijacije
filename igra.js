$(document).ready(function() {
    function getAsoc(max){
        return Math.floor(Math.random() * max) + 1;
    }
    let blockOpen = false;

    let turn = "blue";

    let inputAnswer = ["A","B","C","D","final"];

    let blockInput ={
        A : false,
        B : false,
        C : false,
        D : false,
        final : false
    };


    function printPotez(){
        $("h1").text("Trenutno je potez: "+turn);
    }

    function start(){
        
    }

    function updateInputBlock(blockInput){
        //alert(JSON.stringify(blockInput));
        for(j=0; j<5; j++){
            $("#"+inputAnswer[j]).prop( "disabled", blockInput[inputAnswer[j]]);
        }
    }


    let asocijacija ={
        A : ["ZANIMANJE","POSAO","VOJNIK","ADVOKAT","PROFESIJA"],
        B : ["PRED VRATIMA","VOJSKOVOĐA","KARTAGINA","SLONOVI","HANIBAL"],
        C : ["MIŠIĆ","DUGAČAK","CIPELA","DLAKA","JEZIK"],
        D : ["FONOLOGIJA","SINTAKSA","SEMANTIKA","PRAVILA","GRAMATIKA"]
    };

    let curAsocijacija = asocijacija;

    for(i=1; i<=4; i++){//Open field
        for(j=0,g = String.fromCharCode(65 + j); j<4; j++,g = String.fromCharCode(65 + j)){
            //alert("#"+g+i);
            $("#"+g+i).click(function (){
                if(!blockOpen)
                    $(this).val(curAsocijacija[$(this).attr("id")[0]][$(this).attr("id")[1]-1]);
                blockOpen = true;
            })
        }
    }

    //Block other input
    for(j=0; j<5; j++){
        $("#"+inputAnswer[j]).on('input', function() {
            if($(this).val()!=""){
                for(j=0; j<5; j++){
                    blockInput[inputAnswer[j]] = true;
                }
                //alert($(this).attr("id"));
                blockInput[$(this).attr("id")] = false;
            }
            else{
                for(j=0; j<5; j++){
                    blockInput[inputAnswer[j]] = false;
                }
            }
            updateInputBlock(blockInput);
            
        });
    }
    

    printPotez();


})