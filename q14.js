var c = 1
var ate100 = 0
var ate200 = 0 
var maior200 = 0
while ( c <= 20) {
    var numero = parseInt (prompt ("informe um número"))
    if ( numero >= 0 && numero <= 100 0){
        ate100++;
    }
    else if (numero >= 101 && numero <= 200){
        ate200++
    }
    else if (numero >200) {
        maior200++
    }
    c++
}

    console.log(ate100 + "números estão entre 0 e 100," + ate200 "números estão entre 101 e 200 e" + maior200 +"são maiores que 200.")
