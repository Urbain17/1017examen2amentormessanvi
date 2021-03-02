# 1017examen2_amentormessanvi
Plateforme de déploiement pour rendre disponible le site (GitHub Pages) : https://urbain17.github.io/1017examen2amentormessanvi/

-Repository sur gitHub
-GitHub Pages offre la possible de rendre le site disponible alors autant utiliser la même plateforme
-Faire un run build et pousser le code sur GitHub


Projet Final

Pour ce projet, on reprendra le projet de l’examen 2 pour le bonifier.
On pourra garder le même repository.
Les dates des commits permettront de différencier les nouveaux développements.
Nous pourrons voir pour faire une version de votre examen 2 grâce à la fonctionnalité de release.
Idéalement préfixé le titre du commit avec Projet Final - pour permettre de savoir quels sont les nouveaux changements dans votre projet.

1 - On ajoutera des commentaires s’ils n’ont pas été mis dans le projet d’examen 2 dans notre code. 

2 - On ajoutera pour ce projet des tests unitaires avec jest pour chacun des composants que vous aurez créé:

●	Accueil
●	Header
●	Footer

●	Projet
●	Contact

●	Ainsi que le test de la directive pour la traduction des libellés.

3 - On ajoutera une license à notre application, en utilisant un de ces sites pour faire le choix de sa licence:
https://choosealicense.com/
https://gist.github.com/francoisromain/b8877f595062952e1842de862a26fe8b
https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#disclaimer
Cette license sera contenu dans le repository dans un fichier LICENSE dans notre repository
On fera un lien sur cette licence sur le footer du site. Et on justifira son choix dans le document.


4 - On réalisera une page de présentation de notre projet. Ce document peut etre le fichier README.md voir documentation pour la syntaxe markdown du fichier README
https://www.ionos.fr/digitalguide/sites-internet/developpement-web/fichier-readme/
https://blog.wax-o.com/2014/04/tutoriel-un-guide-pour-bien-commencer-avec-markdown/

Ou un fichier word qui se trouvera dans tous les cas dans le repository.



5 - On créera un document des besoins fonctionnels du site. Une description des différentes fonctionnalités pour comprendre comment le site fonctionne et son utilité.




6 - On ajoutera une grille de validation. Cette grille sera spécifié comme suit:


ID Cas de Test		Description du cas de test	
Crée par		Revue par		Version du produit	
										
QA Tester’s Log									
										
Nom du testeur		date du test	1-Jan-2017	Cas de test (Passe/Echoue/Non éxécuté)	
										
S #			S #		
1	Accès au navigateur chrome		1	Userid = mg12345
2			2	Pass = df12@434c
3			3	
4			4	
										
Test Scenario	Verification de la saisie du bon login mdp, l'utilisateur peut se logger									
										
Etape #	Details		Resultats attendus		Resultats actuels			Passe / Echouer / Non éxécuté / Suspendu		
1				
2				
3				
4				

Cette grille correspond aux différents scénarios de test que l’on aura besoin de réaliser pour s’assurer du bon fonctionnement du site. Ce test vérifira, le scénario de bon fonctionnement (Happy Path) ainsi que les cas d’erreur possible. On créera une feuille excel pour chaque cas de test. On ajoutera ce fichier Excel dans notre repository dans un dossier casdetest à la racine de notre projet.


7 - On utilisera une plateforme de déploiement pour rendre disponible votre site. On pourra utiliser GitHub OnePage, Heroku ou une autre plateforme de votre choix.
On ajoutera une documentation des différentes étapes pour faire le déploiement sur la plateforme choisie. Ce document pourra être un fichier word ou un fichier au même format que le fichier README.md on indiquera la plateforme, le choix de celle-ci ainsi que l’URL pour accéder au site.

 
Critère d'évaluation:
3 points....

Question 1:
6.5 points {
	Le code doit contenir au minimum une vingtaine de lignes de commentaire 0.3 par ligne de commentaire et de leur pertinence.
	0.5 Correction du français
}
Question 2:
12 points{
	1 point de test
Le test doit contenir au moins un cas de succès et un cas d’erreur.
On en souhaitera minimum 12 pour les 6 éléments à tester.
}
Question 3:
5 points{
	1 point pour l’ajout du fichier
	3 points pour la licence
1 point pour la rendu du fichier de la license
0.5 Correction du français
}
Question 4:
6.5 points {
	1 point pour le fichier
	4 points pour la présentation
1 point pour la rendu du fichier de la présentation
	0.5 Correction du français
}
Question 5:
5.5 points {
	1 point pour le fichier
	3 points pour la liste des fonctionnalités
	1 point pour la rendu du fichier des besoins fonctionnels
	0.5 Correction du français
}
Question 6:
8 points{
	On doit avoir au moins 10 scénarios test chacun note sur 0.75
	0.5 Correction du français
}
Question 7:
6.5 points {
	3 points pour le déploiement fonctionnel
2 points pour le fichier les étapes
1 point pour la justification de l’utilisation de la plateforme
	0.5 Correction du français
}


Les commandes nécessaires pour créer l'application.

npm install -g @vue/cli

vue create 1017examen2amentormessanvi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
