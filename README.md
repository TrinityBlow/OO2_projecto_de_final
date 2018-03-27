Tarea

Hacer una extensión que:

1. Agregue un botón (con su icono) en el toolbar.
 
2. Al oprimir el botón, se obtendrá el texto de todos los elementos H1 de la página actual.

3. Tomar el texto de los elementos H1 y quedarse solo con las palabras de más de 5 letras. 

4. Con esas palabras hacer un request GET a Wikipedia: https://es.wikipedia.org/w/index.php?search=palabra1+palabra2+palabra3...

5. Wikipedia nos va a contestar con una página HTML. De esa hay que quedarse con los títulos de las páginas wikipedia del resultado de la búsqueda. 

6. Crear un panel blanco, flotante, sobre la página actual y ahí dentro mostrar los títulos extraídos, en una lista punteada. Stolo hacemos modificando el DOM (no utilizando el panel nativo del navegado)


Todo la tarea fue realiza con la documentacion de web-extension de mozilla y sin usar ningun tipo de libreria externa para javascript.
Para conseguir la informacion de wikipedia se uso la funcion "fetch" y despues se analiza la respuesta para saber que tipo de respuesta es y mostrarla en la pagina.  
