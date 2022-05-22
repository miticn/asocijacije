$(document).ready(function(){
    let sub1 = false;
    let sub2 = false;
    const br_asocijacija = 5;
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
    //provera da li je prazno i tako to
    
    function init(){
        if (localStorage.getItem("asocijacije") === null) {
            localStorage.setItem('asocijacije', JSON.stringify(asocijacije));
        }
        else{
            asocijacije = JSON.parse(localStorage.getItem("asocijacije"));
        }
    }

    function start(){
        let trenutna_asoc = Math.floor(Math.random()*br_asocijacija);
        localStorage.setItem('trenutna_asoc',JSON.stringify(asocijacije[trenutna_asoc]));
        window.location.replace("asocijacije-igra.html");
    }
    
    init();
    $("#igrac1form").submit(function(){
        $("#igrac1txt").attr('readonly', true);
        localStorage.setItem('igrac1',$("#igrac1txt").val());
        sub1 = true;
        if(sub2) start();

    });

    $("#igrac2form").submit(function(){
        $("#igrac2txt").attr('readonly', true);
        localStorage.setItem('igrac2',$("#igrac2txt").val());
        sub2 = true;
        if(sub1) start();

    });

});