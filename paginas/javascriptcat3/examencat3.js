'use strict'

window.addEventListener('load',function(){

    //Selecciono las cajas donde se encuentran las preguntas y sus respectivas respuestas.
    var pregunta1 = document.querySelector("#pregunta1");
    var pregunta2 = document.querySelector("#pregunta2");
    var pregunta3 = document.querySelector("#pregunta3");
    var pregunta4 = document.querySelector("#pregunta4");
    var pregunta5 = document.querySelector("#pregunta5");
    var pregunta6 = document.querySelector("#pregunta6");
    var pregunta7 = document.querySelector("#pregunta7");
    var pregunta8 = document.querySelector("#pregunta8");
    var pregunta9 = document.querySelector("#pregunta9");
    var pregunta10 = document.querySelector("#pregunta10");
    var pregunta11 = document.querySelector("#pregunta11");
    var pregunta12 = document.querySelector("#pregunta12");
    var pregunta13 = document.querySelector("#pregunta13");
    var pregunta14 = document.querySelector("#pregunta14");
    var pregunta15 = document.querySelector("#pregunta15");
    var pregunta16 = document.querySelector("#pregunta16");
    var pregunta17 = document.querySelector("#pregunta17");
    var pregunta18 = document.querySelector("#pregunta18");
    var pregunta19 = document.querySelector("#pregunta19");
    var pregunta20 = document.querySelector("#pregunta20");
    var pregunta21 = document.querySelector("#pregunta21");
    var pregunta22 = document.querySelector("#pregunta22");
    var pregunta23 = document.querySelector("#pregunta23");
    var pregunta24 = document.querySelector("#pregunta24");
    var pregunta25 = document.querySelector("#pregunta25");
    var pregunta26 = document.querySelector("#pregunta26");
    var pregunta27 = document.querySelector("#pregunta27");
    var pregunta28 = document.querySelector("#pregunta28");
    var pregunta29 = document.querySelector("#pregunta29");
    var pregunta30 = document.querySelector("#pregunta30");
    var pregunta31 = document.querySelector("#pregunta31");
    var pregunta32 = document.querySelector("#pregunta32");
    var pregunta33 = document.querySelector("#pregunta33");
    var pregunta34 = document.querySelector("#pregunta34");
    var pregunta35 = document.querySelector("#pregunta35");
    var pregunta36 = document.querySelector("#pregunta36");
    var pregunta37 = document.querySelector("#pregunta37");
    var pregunta38 = document.querySelector("#pregunta38");
    var pregunta39 = document.querySelector("#pregunta39");
    var pregunta40 = document.querySelector("#pregunta40");

    var contador = 0;//Lo uso para recorrer las preguntas.
    var cantidadPreguntas = 40;//Para establecer el final del recorrido de las preguntas.
    var contador2=1; //para el ciclo de ocultado de preguntas.
    var contador3=0; //este contador se incrementa cuando respondemos bien una pregunta.

    //Selecciono los botones
    var btn_atras = document.querySelector("#atras");
    var btn_adelante = document.querySelector("#adelante");
    var btn_resultado = document.querySelector("#resultado");

    // estas variables son para seleccionar las respuestas a, b, c etc..
    /*
    var pregunt1 = document.getElementsByName("pregunt1");
    var pregunt2 = document.getElementsByName("pregunt2");
    var pregunt3 = document.getElementsByName("pregunt3");
    var pregunt4 = document.getElementsByName("pregunt4");
    var pregunt5 = document.getElementsByName("pregunt5");
    var pregunt6 = document.getElementsByName("pregunt6");
    var pregunt7 = document.getElementsByName("pregunt7");
    var pregunt8 = document.getElementsByName("pregunt8");
    var pregunt9 = document.getElementsByName("pregunt9");
    var pregunt10 = document.getElementsByName("pregunt10");
    var pregunt11 = document.getElementsByName("pregunt11");
    var pregunt12 = document.getElementsByName("pregunt12");
    var pregunt13 = document.getElementsByName("pregunt13");
    var pregunt14 = document.getElementsByName("pregunt14");
    var pregunt15 = document.getElementsByName("pregunt15");
    var pregunt16 = document.getElementsByName("pregunt16");
    var pregunt17 = document.getElementsByName("pregunt17");
    var pregunt18 = document.getElementsByName("pregunt18");
    var pregunt19 = document.getElementsByName("pregunt19");
    var pregunt20 = document.getElementsByName("pregunt20");
    var pregunt21 = document.getElementsByName("pregunt21");
    var pregunt22 = document.getElementsByName("pregunt22");
    var pregunt23 = document.getElementsByName("pregunt23");
    var pregunt24 = document.getElementsByName("pregunt24");
    var pregunt25 = document.getElementsByName("pregunt25");
    var pregunt26 = document.getElementsByName("pregunt26");
    var pregunt27 = document.getElementsByName("pregunt27");
    var pregunt28 = document.getElementsByName("pregunt28");
    var pregunt29 = document.getElementsByName("pregunt29");
    var pregunt30 = document.getElementsByName("pregunt30");
    var pregunt31 = document.getElementsByName("pregunt31");
    var pregunt32 = document.getElementsByName("pregunt32");
    var pregunt33 = document.getElementsByName("pregunt33");
    var pregunt34 = document.getElementsByName("pregunt34");
    var pregunt35 = document.getElementsByName("pregunt35");
    var pregunt36 = document.getElementsByName("pregunt36");
    var pregunt37 = document.getElementsByName("pregunt37");
    var pregunt38 = document.getElementsByName("pregunt38");
    var pregunt39 = document.getElementsByName("pregunt39");
    var pregunt40 = document.getElementsByName("pregunt40");
    */
    var Fpregunta1 = document.getElementsByName("Fpregunta1");

    //Ingreso todas las preguntas en un único arreglo.
    var todasLasPreguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10,
        pregunta11,pregunta12,pregunta13,pregunta14,pregunta15,pregunta16,pregunta17,pregunta18,pregunta19,pregunta20,
        pregunta21,pregunta22,pregunta23,pregunta24,pregunta25,pregunta26,pregunta27,pregunta28,pregunta29,pregunta30,
        pregunta31,pregunta32,pregunta33,pregunta34,pregunta35,pregunta36,pregunta37,pregunta38,pregunta39,pregunta40];

    //Todos los formularios en un solo arreglo para poder recorrerlo con todas las respuestas.
    /*var formularios = [Fpregunta1,Fpregunta2,Fpregunta3,Fpregunta4,Fpregunta5,Fpregunta6,Fpregunta7,Fpregunta8,Fpregunta9,Fpregunta10,
                       Fpregunta11,Fpregunta12,Fpregunta13,Fpregunta14,Fpregunta15,Fpregunta16,Fpregunta17,Fpregunta18,Fpregunta19,Fpregunta20,
                       Fpregunta21,Fpregunta22,Fpregunta23,Fpregunta24,Fpregunta25,Fpregunta26,Fpregunta27,Fpregunta28,Fpregunta29,Fpregunta30,
                       Fpregunta31,Fpregunta32,Fpregunta33,Fpregunta34,Fpregunta35,Fpregunta36,Fpregunta37,Fpregunta38,Fpregunta39,Fpregunta40];
    */
    //Es necesario saber el nombre de la pregunta que contiene el formulario
    /*var numeroPregunta = [pregunt1,pregunt2,pregunt3,pregunt4,pregunt5,pregunt6,pregunt7,pregunt8,pregunt9,pregunt10,
                        pregunt11,pregunt12,pregunt13,pregunt14,pregunt15,pregunt16,pregunt17,pregunt18,pregunt19,pregunt20,
                        pregunt21,pregunt22,pregunt23,pregunt24,pregunt25,pregunt26,pregunt27,pregunt28,pregunt29,pregunt30,
                        pregunt31,pregunt32,pregunt33,pregunt34,pregunt35,pregunt36,pregunt37,pregunt38,pregunt39,pregunt40];
    */
    //Este arreglo contiene la posición de la respuesta a=0, b=1, c=2, d=3, e=4; (abcd estan en el libro de transito)
    //                        1,2,3,4,5,6,7,8,9,10
    var todasLasRespuestas = [0,3,0,2,1,0,0,0,2,0,
                              0,1,1,2,0,3,3,1,2,3,
                              1,3,3,2,1,0,2,1,3,2,
                              2,0,0,2,2,0,0,2,2,2]; 

    var nota = document.querySelector("#notaFinal");//Es el área donde mostrare la nota del examen

    nota.style.display = "none";   //Oculto el bloque donde mostrare la nota al finalizar el examen.

    /*Oculto todas las preguntas a excepción de la primera. */
    pregunta1.style.display = "block";
    
    for(contador2=1;contador2<=(cantidadPreguntas-1);contador2++)
    {
        todasLasPreguntas[contador2].style.display = "none";
    }

    
    btn_resultado.style.display = "none";//Oculto el botón y aparecerá hasta que se llegue a la ultima pregunta.

    btn_adelante.addEventListener("click",()=>{//Función del botón adelante.+++++++++++++++++++++++++++++++++++++++
        contador++;
        if(contador >= (cantidadPreguntas-1))
        {
            contador = cantidadPreguntas - 1;
            btn_resultado.style.display = "block";
            btn_resultado.style.margin = "0px auto";
        }
        todasLasPreguntas[contador-1].style.display = "none";
        todasLasPreguntas[contador].style.display = "block";
        
    });// FIN DE LA FUNCION DEL BOTÓN ADELANTE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    btn_atras.addEventListener("click",function(){
         contador--;
         if(contador <= 0)
         {
             contador = 0;
         }
         todasLasPreguntas[contador].style.display = "block";
         todasLasPreguntas[contador+1].style.display = "none";
    });//fin de la funcion atras.---------------------------------------------------------------

    function notaFinal()
    {
        var final = (contador3/cantidadPreguntas)*100;
        nota.style.display = "Block";
        var resultadofinal = document.querySelector("#resultadoFinal");
        btn_resultado.style.display = "none";   //Oculto el bloque donde mostrare la nota al finalizar el examen.
        botones.style.display = "none";
        if(final>100)
        {final=100;}
        resultadofinal.innerHTML = final.toFixed(2);
        if(final>=80)
        {
            resultadofinal.style.color = "blue";
        }
        else
        {
            resultadofinal.style.color = "red";
        }
        //document.write("<h3>"+final+"</h3>");
    }

    function sumaPuntos()
   {
        contador3++;
   }
   //******************************-btn_resultado-*****************************************************
    btn_resultado.addEventListener("click",()=>{
       console.log("Btn:_resultado");
       let i=0;
       if(document.Fpregunta1.pregunt1[todasLasRespuestas[i]].checked == true)
       {
            pregunta1.style.display = "block";
            pregunta1.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta1.style.display = "block";
            pregunta1.style.color = "red";
       }
       i++;//''''''''''''''''''''''_2_'''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta2.pregunt2[todasLasRespuestas[i]].checked == true)
       {
            pregunta2.style.display = "block";
            pregunta2.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta2.style.display = "block";
            pregunta2.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''_3_''''''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta3.pregunt3[todasLasRespuestas[i]].checked == true)
       {
            pregunta3.style.display = "block";
            pregunta3.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta3.style.display = "block";
        pregunta3.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_4_'''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta4.pregunt4[todasLasRespuestas[i]].checked == true)
       {
            pregunta4.style.display = "block";
            pregunta4.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta4.style.display = "block";
            pregunta4.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_5_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta5.pregunt5[todasLasRespuestas[i]].checked == true)
       {
            pregunta5.style.display = "block";
            pregunta5.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta5.style.display = "block";
        pregunta5.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_6_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta6.pregunt6[todasLasRespuestas[i]].checked == true)
       {
            pregunta6.style.display = "block";
            pregunta6.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta6.style.display = "block";
            pregunta6.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_7_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta7.pregunt7[todasLasRespuestas[i]].checked == true)
       {
            pregunta7.style.display = "block";
            pregunta7.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta7.style.display = "block";
        pregunta7.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_8_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta8.pregunt8[todasLasRespuestas[i]].checked == true)
       {
            pregunta8.style.display = "block";
            pregunta8.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta8.style.display = "block";
            pregunta8.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_9_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta9.pregunt9[todasLasRespuestas[i]].checked == true)
       {
            pregunta9.style.display = "block";
            pregunta9.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta9.style.display = "block";
            pregunta9.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_10_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta10.pregunt10[todasLasRespuestas[i]].checked == true)
       {
            pregunta10.style.display = "block";
            pregunta10.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta10.style.display = "block";
            pregunta10.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_11_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta11.pregunt11[todasLasRespuestas[i]].checked == true)
       {
            pregunta11.style.display = "block";
            pregunta11.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta11.style.display = "block";
        pregunta11.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_12_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta12.pregunt12[todasLasRespuestas[i]].checked == true)
       {
            pregunta12.style.display = "block";
            pregunta12.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta12.style.display = "block";
            pregunta12.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''_13_''''''''''''''''''''''''''''''''''''
       if(document.Fpregunta13.pregunt13[todasLasRespuestas[i]].checked == true)
       {
            pregunta13.style.display = "block";
            pregunta13.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta13.style.display = "block";
            pregunta13.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_14_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta14.pregunt14[todasLasRespuestas[i]].checked == true)
       {
            pregunta14.style.display = "block";
            pregunta14.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta14.style.display = "block";
            pregunta14.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''_15_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta15.pregunt15[todasLasRespuestas[i]].checked == true)
       {
            pregunta15.style.display = "block";
            pregunta15.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta15.style.display = "block";
        pregunta15.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_16_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta16.pregunt16[todasLasRespuestas[i]].checked == true)
       {
            pregunta16.style.display = "block";
            pregunta16.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta16.style.display = "block";
            pregunta16.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_17_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta17.pregunt17[todasLasRespuestas[i]].checked == true)
       {
            pregunta17.style.display = "block";
            pregunta17.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta17.style.display = "block";
            pregunta17.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_18_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta18.pregunt18[todasLasRespuestas[i]].checked == true)
       {
            pregunta18.style.display = "block";
            pregunta18.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta18.style.display = "block";
        pregunta18.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_19_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta19.pregunt19[todasLasRespuestas[i]].checked == true)
       {
            pregunta19.style.display = "block";
            pregunta19.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta19.style.display = "block";
        pregunta19.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_20_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta20.pregunt20[todasLasRespuestas[i]].checked == true)
       {
            pregunta20.style.display = "block";
            pregunta20.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta20.style.display = "block";
        pregunta20.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''_21_'''''''''''''''''''''''''''''''''''
       if(document.Fpregunta21.pregunt21[todasLasRespuestas[i]].checked == true)
       {
            pregunta21.style.display = "block";
            pregunta21.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta21.style.display = "block";
        pregunta21.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_22_''''''''''''''''''''''''''''''''''
       if(document.Fpregunta22.pregunt22[todasLasRespuestas[i]].checked == true)
       {
            pregunta22.style.display = "block";
            pregunta22.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta22.style.display = "block";
        pregunta22.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_23_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta23.pregunt23[todasLasRespuestas[i]].checked == true)
       {
            pregunta23.style.display = "block";
            pregunta23.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta23.style.display = "block";
        pregunta23.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_24_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta24.pregunt24[todasLasRespuestas[i]].checked == true)
       {
            pregunta24.style.display = "block";
            pregunta24.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta24.style.display = "block";
        pregunta24.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_25_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta25.pregunt25[todasLasRespuestas[i]].checked == true)
       {
            pregunta25.style.display = "block";
            pregunta25.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta25.style.display = "block";
            pregunta25.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''_26_'''''''''''''''''''''''''''''''''
       if(document.Fpregunta26.pregunt26[todasLasRespuestas[i]].checked == true)
       {
            pregunta26.style.display = "block";
            pregunta26.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta26.style.display = "block";
        pregunta26.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''_27_''''''''''''''''''''''''''''''''
       if(document.Fpregunta27.pregunt27[todasLasRespuestas[i]].checked == true)
       {
            pregunta27.style.display = "block";
            pregunta27.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta27.style.display = "block";
            pregunta27.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_28_''''''''''''''''''''''''''''''
       if(document.Fpregunta28.pregunt28[todasLasRespuestas[i]].checked == true)
       {
            pregunta28.style.display = "block";
            pregunta28.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta28.style.display = "block";
        pregunta28.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_29_'''''''''''''''''''''''''''''
       if(document.Fpregunta29.pregunt29[todasLasRespuestas[i]].checked == true)
       {
            pregunta29.style.display = "block";
            pregunta29.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta29.style.display = "block";
            pregunta29.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_30_''''''''''''''''''''''''''''
       if(document.Fpregunta30.pregunt30[todasLasRespuestas[i]].checked == true)
       {
            pregunta30.style.display = "block";
            pregunta30.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta30.style.display = "block";
        pregunta30.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_31_''''''''''''''''''''''''''''
       if(document.Fpregunta31.pregunt31[todasLasRespuestas[i]].checked == true)
       {
            pregunta31.style.display = "block";
            pregunta31.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta31.style.display = "block";
        pregunta31.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''_32_''''''''''''''''''''''''''''
       if(document.Fpregunta32.pregunt32[todasLasRespuestas[i]].checked == true)
       {
            pregunta32.style.display = "block";
            pregunta32.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta32.style.display = "block";
        pregunta32.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_33_'''''''''''''''''''''''''''''
       if(document.Fpregunta33.pregunt33[todasLasRespuestas[i]].checked == true)
       {
            pregunta33.style.display = "block";
            pregunta33.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta33.style.display = "block";
        pregunta33.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_34_'''''''''''''''''''''''''''''
       if(document.Fpregunta34.pregunt34[todasLasRespuestas[i]].checked == true)
       {
            pregunta34.style.display = "block";
            pregunta34.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
            pregunta34.style.display = "block";
            pregunta34.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_35_'''''''''''''''''''''''''''''
       if(document.Fpregunta35.pregunt35[todasLasRespuestas[i]].checked == true)
       {
            pregunta35.style.display = "block";
            pregunta35.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta35.style.display = "block";
        pregunta35.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_36_'''''''''''''''''''''''''''''
       if(document.Fpregunta36.pregunt36[todasLasRespuestas[i]].checked == true)
       {
            pregunta36.style.display = "block";
            pregunta36.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta36.style.display = "block";
        pregunta36.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_37_'''''''''''''''''''''''''''''
       if(document.Fpregunta37.pregunt37[todasLasRespuestas[i]].checked == true)
       {
            pregunta37.style.display = "block";
            pregunta37.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta37.style.display = "block";
        pregunta37.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_38_'''''''''''''''''''''''''''''
       if(document.Fpregunta38.pregunt38[todasLasRespuestas[i]].checked == true)
       {
            pregunta38.style.display = "block";
            pregunta38.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta38.style.display = "block";
        pregunta38.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''''_39_'''''''''''''''''''''''''''''
       if(document.Fpregunta39.pregunt39[todasLasRespuestas[i]].checked == true)
       {
            pregunta39.style.display = "block";
            pregunta39.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta39.style.display = "block";
        pregunta39.style.color = "red";
       }
       i++;//''''''''''''''''''''''''''''''_40_'''''''''''''''''''''''''''''''
       if(document.Fpregunta40.pregunt40[todasLasRespuestas[i]].checked == true)
       {
            pregunta40.style.display = "block";
            pregunta40.style.color = "Blue";
            sumaPuntos();
       }
       else
       {
        pregunta40.style.display = "block";
        pregunta40.style.color = "red";
       }
       i++;//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       notaFinal();    
   });//***************FIN btn_resultado */
   
   
});