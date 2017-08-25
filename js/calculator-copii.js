function catFacAdunareaNumerelor(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    }
    console.info("numarul cel mai mare este " + max);
    console.info("vom numara " + min + " degetele");
    
    for(min--; min >= 0; min--) {
        // aici vrem sa numaram
        max++;
        console.info("avem " + max + " degetele, " + "au ramas de numarat " + min + " degetele");
    }
    
    return a + b;
}

var rezultat;

rezultat = catFacAdunareaNumerelor(6, 4);
console.info(rezultat);

rezultat = catFacAdunareaNumerelor(7, 2);
console.info(rezultat);

