1.- ¿Es recomendable usar estilos en línea y en la etiqueta <style></style> en el <head></head>?
No es recomendable, lo mejor es usar hojas de estilo .css externas para mantener una organización óptima del proyecto. Además, usar estilos en línea provoca que la especificidad de los elementos se vea alterada, siendo más difícil modificar elementos anteriormente modificados.

2.- ¿Cómo se pueden redefinir los estilos de un elemento CSS?
Aumentando su especificidad. Por ejemplo, un elemento al que se le han añadido estilos usando su nombre de clase (.container), se le puede aumentar la especificidad añadiendo su etiqueta correspondiente (div.container). En este ejemplo, el selector con el nombre de clase simplemente tiene una especificidad de 0,1,0 mientras que usando la etiqueta + la clase, tiene una especificidad de 0,1,1.

[ACLARACIONES SOBRE TOMA DE DECISIONES]
Sobre el punto 3.7 de la práctica {Crear una hoja de estilos alternativa para la página de inicio. (Dark version / Light version )}, he realizado el modo claro y oscuro dentro del mismo documento de estilos .css y he usado el atributo data-theme del elemento <html>, y distintas versiones de las variables de CSS.

En relación con este punto, también quiero aclarar cómo y dónde se cambia el tema de la aplicación entre claro y oscuro. Tenía pensado incluir un switch o checkbox para cambiar esta opción dentro de la página "Configuración". Por falta de tiempo no he podido hacer esta página así que no tenía sitio para poner el switch, de modo que el propio botón "Configuración" que se encuentra en el menú lateral izquierdo (Desktop) y en el menú de navegación inferior (Mobile) es el que cambia entre modos de interfaz cuando es clicado. (Clic en el botón configuración para cambiar entre modo claro y oscuro).

El menú de hamburguesa en móvil se despliega haciendo clic en el icono de las tres líneas (botón de menú). Pero para plegarlo, solo basta con hacer clic fuera del menú (en la parte oscurecida de la pantalla).

Toda la hoja de estilo .css ha sido validada en https://jigsaw.w3.org/css-validator/ y el resultado ha sido satisfactorio.

He añadido una segunda media query para dispositivos de menos de 1200px de ancho con la que hago el tamaño de letra del footer más pequeño. Esto no perjudica a los dispositivos de menos de 900px ya que en estos el footer se oculta por completo.