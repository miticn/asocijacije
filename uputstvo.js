$(document).ready(function(){
    let sub1 = false;
    let sub2 = false;

    let asocijacije =[{
        A : ["ZANIMANJE","POSAO","VOJNIK","ADVOKAT","PROFESIJA"],
        B : ["PRED VRATIMA","VOJSKOVOĐA","KARTAGINA","SLONOVI","HANIBAL"],
        C : ["MIŠIĆ","DUGAČAK","CIPELA","DLAKA","JEZIK"],
        D : ["FONOLOGIJA","SINTAKSA","SEMANTIKA","PRAVILA","GRAMATIKA"],
        final : "LEKTOR"
    },
    {
        A : ["KUHINJA","SLANO","NATRIJUM","HLOR","SO"],
        B : ["KISEONIK","VODONIK","ŽEĐ","ČAŠA","VODA"],
        C : ["HUMOR","ZLATO","UDOVICA","NOĆ","CRNO"],
        D : ["PESAK","SUNCOBRAN","OBALA","ODBOJKA","PLAŽA"],
        final : "MORE"
    },
    {
        A : ["MAJMUM","RASTINJE","KNJIGA","AMAZON","DŽUNGLA"],
        B : ["HMELJ","JELEN","ALKOHOL","HLADNO","PIVO"],
        C : ["ŠAH","KRUNA","DVOR","ŠVEDSKA","KRALJ"],
        D : ["MLEKO","MIŠ","KLUPKO","PAS","MAČKA"],
        final : "LAV"
    },
    {
        A : ["OFICIR","AKT","SVRŠEN","RITUAL","ČIN"],
        B : ["DRVO","SAPUTNIK","SREDINA","VEK","ŽIVOT"],
        C : ["PREOKRET","KAPITAL","MOMENT","KOPERNIK","OBRT"],
        D : ["CIGARETA","RUČAK","PREDAH","DOM ZDRAVLJA","PAUZA"],
        final : "DRAMA"
    },
    {
        A : ["FINIŠ","GRUPA","SVRHA","ODREDIŠTE","CILJ"],
        B : ["DIMNJAK","PUŠKA","HEMIJA","METLA","ČIŠĆENJE"],
        C : ["GUŽVA","ROBA","GRAD","KONTROLA","PREVOZ"],
        D : ["SITAN","IZNOS","POMOĆ","JEDINICA","NOVAC"],
        final : "SREDSTVO"
    }];

    localStorage.setItem('asocijacije', asocijacije);
    localStorage.setItem('igrac1','');
    localStorage.setItem('igrac2','');

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