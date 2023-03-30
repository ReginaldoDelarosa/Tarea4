

const suma=(a,b)=>{return a+b};
const resta=(a,b)=>{return a-b};
const multiplicacion=(a,b)=>{return a*b};
const division=(a,b)=>{return a/b};

a= parseInt(prompt("ingrese el numero a"))
b= parseInt(prompt("ingresa el numero b"))
expr= prompt("ingrese el signo de la operacion que quiere realizar")

switch(expr){
    case '+':
        alert("El resultado de la suma es: "+suma(a,b))
    break;
    case '-':
        alert("El resultado de la resta es: "+resta(a,b))
    break;
    case "*":
        alert("El resultado de la multiplicacion es: "+multiplicacion(a,b))
    break;
    case "/":
        if(a==0 || b==0){
            alert("No se puede dividir por 0")
        }else{
            alert("El resultado de la division es: "+division(a,b))
        }
        
    break;
}