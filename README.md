
Trabajo Práctico: Lenguaje Simple con ANTLR4 y JavaScript
Guía de ejecución y verificación para el docente

Estimado/a profesor/a:

A continuación le presento una guía paso a paso para la correcta ejecución del trabajo práctico desarrollado con ANTLR4 y JavaScript, junto con ejemplos funcionales que permiten comprobar tanto el funcionamiento correcto del analizador como el manejo de errores sintácticos.

Archivos del proyecto

El proyecto contiene los siguientes archivos clave:

Lenguaje.g4: archivo de gramática utilizada.

index.js: archivo principal que coordina el análisis, impresión de tokens, construcción del árbol y ejecución del visitor.

CustomCalculatorVisitor.js: implementación de la semántica del lenguaje.

input1.txt, input2.txt, input3.txt, input4.txt: ejemplos de prueba para ejecutar.

Modo de ejecución
Para ejecutar cada caso de prueba, se debe abrir la terminal dentro de la carpeta del proyecto y escribir el siguiente comando:
node index.js input.txt
(se puede reemplazar input.txt por input2.txt, input3.txt, input4.txt)
En el ejemplo de input.txt y input2.txt son dos ejemplos correctos. 
En el input3.txt tiene errores de la palabra clave inicio al comienzo , los puntos y coma (;) al final de cada instrucción, aparecera que hay error de sintaxis. En el input4.txt, también es incorrecto, ya que falta abrir y cerrar llaves { ... } para delimitar el bloque de instrucciones, tampoco comienza con inicio.
 

Lucia Vazquez 50191


