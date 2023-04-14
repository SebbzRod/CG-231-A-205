/**
 * paralelo: Recibew el vector constante (const) definido como "const vector = { x: n , y: n , z: n  }" un vector tridimensional en el espacio 3D
 * ENTRADAS: vector = Arreglo de variables num, es decior un arreglo de numeros enteros.
 * SALIDAS: La función retorna "true" si el vector dado es paralelo a cualquiera de los tres ejes universales. De lo contrario, devuelve "false".
*/
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
