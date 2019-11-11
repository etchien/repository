# repository

d'abord, pour aller vite afin d'avoir une structure de notre projet, nous avons utilisé express-generator

comment se fait l'installation:

-installation globale d'express-generator sur son système:
      npm install express-generator -g
      
-vérification d'express-génerator pour avoir de l'aide sur les commandes nécessaires pour la création de son projet:
        express -h
 - création de notre projet avec express-generator repository et moteur de template ejs:
 
      express --view=ejs repository
      
  Apres cette commande, vous aurez votre structure sans les dossiers models et controlleurs dont vous seriez invité à creer manuellement. 
  
  Nous signalons que express-generator nous facilite la tache en créant le necessaire par defaut telles que les routes, le fichier app.js comme d'autre nommerons server.js
