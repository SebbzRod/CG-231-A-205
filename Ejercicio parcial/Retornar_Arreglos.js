function minimo_arreglo(arreglo) {

  minimo = arreglo[0]; 

    for (let i = 1; i < arreglo.length; i++) 
    { 
      if (arreglo[i] < minimo) 
      { 
        minimo = arreglo[i]; 
      }
    }
    return minimo; 

}



