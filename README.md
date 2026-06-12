Para trabajar con ramas entre nosotros es necesario para que no haya "interferencia" al momento de subir los cambios al repositorio, para crear una rama debes de usar el siguiente comando

git branch "y el nombre que quieras poner a tu rama" (no debe de llevar comillas)

para saber cuántas ramas hay solo escribe git branch y con eso te muestra las ramas disponibles. Para entrar en tu rama debes de escribir el siguiente comando

git switch "el nombre de la rama que quieres entrar" (recuerda no lleva las comillas solo las pongo para darte un ejemplo).

te dejo la siguiente información para que te ayude, si tienes duda me puedes decir

# Crear rama

git branch "nombre de la rama"

# Entrar a una rama

git switch "nombre de la rama

# Guardar cambios...

git add .
git commit -m "aquí va tu mensaje para reconocer quién hizo qué cambio"

# Subir rama

git push -u origin "nombre de la rama"

# Volver a main

git switch main

# Fusionar cambios

git merge "nombre de la rama"

# Subir main

git push origin main
