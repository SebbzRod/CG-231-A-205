function minimo_arreglo(arreglo) 
{

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

function paralelo(vector) 
{
    if (vector.x == 0 && vector.y == 0) 
    {
        return true;
    }
  
    else if (vector.x == 0 && vector.z == 0) 
    { 
        return true;
    }
  
    else if (vector.y == 0 && vector.z == 0) 
    {
        return true;
    }
  
    else
    {
        return false;
    }
}



