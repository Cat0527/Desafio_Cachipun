# pasos 
pasos para iniciar package.json y sass 
-npm init instala package json 
-npm install instala package-lock.json 
-npm install bootstrap 
-npm install -g sass instala global en el computador
-npx sass assets/sass/main.scss:assets/css/styles.css aqui depende en donde esten tus carpetas y los nombres fijate que este bien escrita la ruta 
-npx sass --watch assets/sass/main.scss:assets/css/styles.css nos sirve para ir guardando automaticamente los cambios npx nos sirve por si npm no nos toma los cambios-->

<!--hicimos los cambios y quedo bien-->
para volver a compilar volvemos a colocar este comando: npx sass --watch assets/sass/main.scss:assets/css/styles.css

# Comandos para Github

-git init 
-git remote add origin "url de repositorio" 
-git status 
-git add . 
-git commit -m "subiendo-archivos" 
-git branch 
-git branch -m master main 
-git branch 
-git push origin main 
-git status

# Font

.pt-mono-regular {
  font-family: "PT Mono", monospace;
  font-weight: 400;
  font-style: normal;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}