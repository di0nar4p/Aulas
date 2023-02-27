//Aula de Condicionais
//let x= prompt("Digite seu nome")
//document.getElementById("teste").innerHTML = x;

//Exemplo de condicional
/*let numero =prompt("Digite um número");
        if(numero%2 == 0){
            alert(numero +" é par");
        }
        else{
            alert(numero +" é ímpar");
        }
            
*/          
            //Casting
            //dia= Number(prompt("Dia da semana"))
            
            switch (new Date().getDay()) { //Retorna o dia da semana como um int de 0-6
            case 0:
                day = "Domingo";
                alert(day); 
                break;
            case 1:
                day = "Segunda-feira"; 
                alert(day); 
                break;
            case 2:
                day = "Terça-feira"; 
                alert(day); 
                break;
            case 3:
                day = "Quarta-feira"; 
                alert(day); 
                break;
            case 4:
                day = "Quinta-feira"; 
                alert(day); 
                break;
            case 5:
                day = "Sexta-feira"; 
                alert(day); 
                break;
            case 6:
                day = "Sábado";
                alert(day); 
                break;
        }