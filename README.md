CONCEPTOS BASICOS DE GIT 


-Configurar el usuario de github

Git config user.name
Git config user.email

-Cambiarse de rama

Git checkout <nombre de la rama>

-Crear una rama

Git checkout -b <nombre de la rama>

-Eliminar una rama
 
Git checkout main
Git branch <ver las ramas>
Git branch -D <nombre de la rama>

-agregar cambios y hacer un commit y un push

Git status 
Git add --all
Git commit -m “mensaje del commit”
Git push origin <nombre de la rama>

-descargar cambios del repositorio remoto a el local

Git fetch
Git pull origin <nombre rama>  o  git pull 

-git rebase 
 
    Git rebase -i 
Git rebase --continue / git rebase --abort

-git cherry pick


