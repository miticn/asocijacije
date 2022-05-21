$(document).ready(function() {
    function getAsoc(max){
        return Math.floor(Math.random() * max) + 1;
    }
    let igrac1Rez = 0;//plavi
    let igrac2Rez = 0;//crveni

    const trajanjePoteza = 10*1000;
    const trajanjeIgre = 4*60*1000;
    let blockOpen = false;

    let potezTimer;

    let turn = "Plavi";

    let inputAnswer = ["A","B","C","D","final"];

    let answered = {
        A : false,
        B : false,
        C : false,
        D : false,
        final : false
    }
    let blockInput ={
        A : false,
        B : false,
        C : false,
        D : false,
        final : false
    };

    function tacanOdgovor(kolona){// poseban slucaj za final
        let boja;
        if(turn == 'Plavi') boja = "#2d3798";
        else if(turn == 'Crveni') boja = "#F52424";

        for(i=1;i<=4;i++){
            polje = "#"+kolona+i;
            $(polje).val(curAsocijacija[kolona][i-1]);
            $(polje).css("background-color",boja);
            $(polje).css("color","white");
        }
        $("#"+kolona).css("background-color",boja);
        $("#"+kolona).css("color","white");
        $("#"+kolona).val(curAsocijacija[kolona][4]);
        answered[kolona] = true;
        blockInput[kolona] = true;
        updateInputBlock(answered);
    }

    function odgovori(){
        if($("#A").val().toUpperCase()==curAsocijacija["A"][4] && !answered["A"]){
            tacanOdgovor("A");
        }
        else if($("#B").val().toUpperCase()==curAsocijacija["B"][4] && !answered["B"]){
            tacanOdgovor("B");
        }
        else if($("#C").val().toUpperCase()==curAsocijacija["C"][4] && !answered["C"]){
            tacanOdgovor("C");
        }
        else if($("#D").val().toUpperCase()==curAsocijacija["D"][4]  && !answered["D"]){
            tacanOdgovor("D");
        }
        else if($("#final").val().toUpperCase()==curAsocijacija["final"] && !answered["final"]){
            tacanOdgovor("final")
        }
        else{
            alert("Netacno");
            promenaPoteza();
        }
    }

    function promenaPoteza(){
        window.clearTimeout(potezTimer);
        potezTimer = window.setTimeout(istekaoPotez,trajanjePoteza);
        if(turn == 'Plavi') turn = 'Crveni';
        else if(turn == 'Crveni') turn = 'Plavi';
        printPotez();
        blockOpen = false;

        for(i=0;i<4;i++){
            if(!answered[inputAnswer[i]]) $("#"+inputAnswer[i]).val("");
        }
    }

    function printPotez(){
        $("h1").text("Trenutno je potez: "+turn);
        if(turn == 'Plavi') document.body.style.backgroundColor = "#bec6ed";
        else if(turn == 'Crveni') document.body.style.backgroundColor = "#edbebe";

    }
    function istekloVreme(){
        window.clearTimeout(potezTimer);
        alert("Isteklo vreme");
    }

    function istekaoPotez(){
        promenaPoteza();
    }

    function start(){
        window.setTimeout(istekloVreme,trajanjeIgre);

        potezTimer = window.setTimeout(istekaoPotez,trajanjePoteza);



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
        D : ["FONOLOGIJA","SINTAKSA","SEMANTIKA","PRAVILA","GRAMATIKA"],
        final : "LEKTOR"
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
                    blockInput = answered;
                }
            }
            updateInputBlock(blockInput);
            
        });
    }
    
    start();
    printPotez();

    $("#dalje").click(promenaPoteza);
    $("#odgovori").click(odgovori);


})