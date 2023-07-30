let resul;
let numero1;
let numero2;


while(true){
     numero1= Number(prompt(`Digite o primeiro número`));
     numero2= Number(prompt(`Digite o segundo número`));
    resul= alert(`Os números são ${numero1} e ${numero2}`);
    if(numero1 == 0 && numero2 == 0){
        break;
    }
   
}
alert(`o programa se encerrou`);