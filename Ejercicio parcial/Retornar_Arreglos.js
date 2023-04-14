  /**
   * minimo_arreglo(): Recibe un arreglo de variables enteros y retorna la variable con el menor valor
   * ENTRADAS: numeros = Arreglo de variables num, es decior un arreglo de numeros enteros.
   * SALIDAS: minimo = Entero con menor valor del arreglo.
  **/
  function minimo_arreglo(numeros) 
  {

    minimo = numeros[0]; 

      for (let i = 1; i < numeros.length; i++) 
      { 
        if (numeros[i] < minimo) 
        { 
          minimo = numeros[i]; 
        }
      }
    return minimo; 

  }




