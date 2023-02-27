/*
          Variável global
          var é reconhecido como global
          */

          let x="glauco";
          const y= 123;
  
          function abc(){
              //Variável local
              let x= prompt("Digite um valor")
              alert(x);
              
          }
          abc();  