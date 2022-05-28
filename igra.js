$(document).ready(function() {
    let gard = JSON.parse(localStorage.getItem("gard"));
    if(!gard && gard!=null){
        localStorage.setItem("gard",JSON.stringify(true));


        let igrac1RezP = 0;//plavi
        let igrac2RezC = 0;//crveni

        let startTimeIgra;
        let startTimePotez;

        const trajanjePoteza = 10*1000;
        const trajanjeIgre = 4*60*1000;
        let blockOpen = false;

        let potezTimer;

        let turn = "Plavi";

        let inputAnswer = ["A","B","C","D","final"];

        let curAsocijacija = JSON.parse(localStorage.getItem("trenutna_asoc"));

        let igrac1Ime = localStorage.getItem("igrac1");
        let igrac2Ime = localStorage.getItem("igrac2");

        function msToMinandSec(ms) {
            var min = Math.floor(ms / 60000);
            var sec = ((ms % 60000) / 1000).toFixed(0);
            return min + ":" + (sec < 10 ? '0' : '') + sec;
        }

        function clearAnswers(){
            for(let i=0;i<5;i++){
                if(!$("#"+inputAnswer[i]).prop("disabled")) $("#"+inputAnswer[i]).val("");
            }

        }
        function tacanOdgovor(kolona, turn){
            $("#"+kolona).attr("disabled", true);
            let boja;
            if(turn == 'Plavi') boja = "#2d3798";
            else if(turn == 'Crveni') boja = "#F52424";

            if(kolona=='final'){
                for(let i=0;i<4;i++){
                    if(!$("#"+inputAnswer[i]).prop("disabled")) tacanOdgovor(inputAnswer[i],turn);
                }
                $("#"+kolona).css("background-color",boja);
                $("#"+kolona).css("color","white");
                $("#"+kolona).val(curAsocijacija[kolona]);
            }
            else{
                for(let i=1;i<=4;i++){
                    polje = "#"+kolona+i;
                    if($(polje).val()!=curAsocijacija[kolona][i-1]){
                        $(polje).val(curAsocijacija[kolona][i-1]);
                        if(turn=='Plavi'){igrac1RezP++;}
                        else if(turn=='Crveni'){igrac2RezC++;}
                    }
                    $(polje).css("background-color",boja);
                    $(polje).css("color","white");
                }
                if(turn=='Plavi'){igrac1RezP+=5;}
                else if(turn=='Crveni'){igrac2RezC+=5;}
                $("#"+kolona).css("background-color",boja);
                $("#"+kolona).css("color","white");
                $("#"+kolona).val(curAsocijacija[kolona][4]);
            }
        }

        function odgovori(){
            let t = turn;
            let col = '';
            switch($(this).attr("id")) {
                case 'formodgovorA':
                    col = 'A';
                    break;
                case 'formodgovorB':
                    col = 'B';
                    break;
                case 'formodgovorC':
                    col = 'C';
                    break;
                case 'formodgovorD':
                    col = 'D';
                    break;
                case 'formodgovorFinal':
                    col = 'final';
                    break;
            }
            if($("#"+col).val()=='') return;//ako je prazno polje ignorisi odgovor
            if(col!='final' && $("#"+col).val().toUpperCase()==curAsocijacija[col][4])
                tacanOdgovor(col,t);
            else if(col=='final' && $("#"+col).val().toUpperCase()==curAsocijacija[col])
                tacanOdgovor(col,t);
            else{
                //alert("Netacno");
                promenaPoteza();
            }
        }

        function promenaPoteza(){
            startTimePotez = (new Date()).getTime();
            window.clearTimeout(potezTimer);
            potezTimer = window.setTimeout(istekaoPotez,trajanjePoteza);
            
            clearAnswers();

            if(turn == 'Plavi') turn = 'Crveni';
            else if(turn == 'Crveni') turn = 'Plavi';
            printPotez();
            blockOpen = false;

            for(let i=0;i<4;i++){
                if(!answered[inputAnswer[i]]) $("#"+inputAnswer[i]).val("");
            }
        }

        function printPotez(){
            $("h1").text("Trenutno je potez: "+turn);
            if(turn == 'Plavi') document.body.style.backgroundColor = "#bec6ed";
            else if(turn == 'Crveni') document.body.style.backgroundColor = "#edbebe";
            let preostaloIgra = (trajanjeIgre- ( (new Date()).getTime() - startTimeIgra ));
            let preostaloPotez = (trajanjePoteza- ( (new Date()).getTime() - startTimePotez ));
            $("#vremeigre").text("Preostalo vreme igre: "+msToMinandSec(preostaloIgra));
            $("#vremepoteza").text("Preostalo vreme poteza: "+msToMinandSec(preostaloPotez));
            $("#rez1p").text("plavi "+igrac1Ime+": "+igrac1RezP);
            $("#rez2c").text("crveni "+igrac2Ime+": "+igrac2RezC);

        }

        function istekloVreme(){
            window.clearTimeout(potezTimer);
            clearInterval(refresh);
            alert("Isteklo vreme");
        }

        function istekaoPotez(){
            promenaPoteza();
        }

        function start(){
            window.setTimeout(istekloVreme,trajanjeIgre);
            startTimePotez = (new Date()).getTime();
            startTimeIgra = (new Date()).getTime();

            potezTimer = window.setTimeout(istekaoPotez,trajanjePoteza);



        }

        for(let i=1; i<=4; i++){//Open field
            for(let j=0,g = String.fromCharCode(65 + j); j<4; j++,g = String.fromCharCode(65 + j)){
                //alert("#"+g+i);
                $("#"+g+i).click(function (){
                    if(!blockOpen)
                        $(this).val(curAsocijacija[$(this).attr("id")[0]][$(this).attr("id")[1]-1]);
                    blockOpen = true;
                })
            }
        }
        

        start();
        let refresh = setInterval(printPotez,500);

        $("#dalje").click(promenaPoteza);
        $("#formodgovorA").submit(odgovori);
        $("#formodgovorB").submit(odgovori);
        $("#formodgovorC").submit(odgovori);
        $("#formodgovorD").submit(odgovori);
        $("#formodgovorFinal").submit(odgovori);

    }
    else{
        window.location.replace("asocijacije-uputstvo.html");
    }
})