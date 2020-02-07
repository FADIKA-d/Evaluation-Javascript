 
 //EXERCICE 1 / Total d'une commande
function exo1()
{
  //DECLARATION DES VARIABLES
        let PU ; // Prix unitaire
        let QTECOM ; // Quantité commandée

    //DEMANDE DE SAISIE
        PU = parseInt(prompt("Quel est le prix du produit ? ")) ; 
        QTECOM = parseInt(prompt("Quel est la quantité commandée ? ")) ; 
        
        exercice1 = document.getElementById("exo1A").innerHTML = "Le prix unitaire du produit est de " + PU + " euros. "+ "La quantité commandée est de : " + QTECOM + " unité(s)." ;
     
    //CALCUL
        TOT = PU * QTECOM ; // Calcul du total 
        REM5 = TOT*0.05 ; // Calcul de la remise de 5 %
        REM10 = TOT*0.10 ; // Calcul de la remise de 10 %
        PORT = TOT*0.02 ; // Calcul des frais de port  

    //CONDITION
        if (TOT>100) // Si le total est supérieur à 100 euros
        {
            if (TOT<200) // Si le total est inférieur à 200 euros
            {
                PORT<6 ? PORT=6 : PORT = (TOT*0.02) ; // Si le calcul dess frais de port est inférieurs à 6 euros le montant des frais de port sera de 6 euros sinon le montant des frais de port sera de 2%
                PAP = TOT - REM5 + PORT ; // Calcul du prix à payer 
                alert("Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 5%.  Les frais de port sont de " + PORT ) ;
                document.getElementById("exo1B").innerHTML = "Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 5%.  Les frais de port sont de " + PORT +".";
            }
            else if (TOT>500) // Sinon si le total est supérieur à 500 euros
            {
                PAP = TOT - REM10 ; // Calcul du prix à payer 
                alert("Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 10%.  Les frais de port sont gratuits.") ;
                document.getElementById("exo1C").innerHTML = "Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 10%.  Les frais de port sont gratuits." ;
            }
            else // Sinon le total est compris entre 200 euros et 400 euros
            {
                PORT<6 ? PORT=6 : PORT = (TOT*0.02) ;
                // Si le calcul dess frais de port est inférieurs à 6 euros le montant des frais de port sera de 6 euros sinon le montant des frais de port sera de 2%
                PAP = TOT - REM10 + PORT ; // Calcul du prix à payer 
                alert("Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 10%.  Les frais de port sont de " + PORT ) ;
                document.getElementById("exo1D").innerHTML = "Le montant à payer est de : " + PAP + " euros. Le montant tient compte d'une remise de 10%.  Les frais de port sont de " + PORT +"." ;
            } ;
        }  
        else // Si le total est inférieur à 100 euros
        {
            PORT<6 ? PORT=6 : PORT = (TOT*0.02) ;
            // Si le calcul dess frais de port est inférieurs à 6 euros le montant des frais de port sera de 6 euros sinon le montant des frais de port sera de 2%
            PAP = TOT + PORT ; // Calcul du prix à payer 
            alert("Le montant à payer est de : " + PAP + " euros. Les frais de port sont de " + PORT ) ;
            document.getElementById("exo1E").innerHTML = "Le montant à payer est de : " + PAP + " euros. Les frais de port sont de " + PORT +"." ;
        } ;
} ;
  
//EXERCICE 2 : Somme des entiers inférieurs à N
function exo2()
{
    //DECLARATION DES VARIABLES
    let saisieExo2 ; // Variable de saisie du nombre de l'exercice 2
    let nombreExo2 ; // Variable entier du nombre saisie
    let iExo2 ; //Variable itérations
    iExo2 = 0 ;
    let somme ; //Variable somme
    somme = 0 ;

    //DEMANDE DE SAISIE
    saisieExo2 = prompt("Saisissez un nombre pour avoir la somme des entiers qui lui sont inférieurs.") ;
    nombreExo2 = parseInt(saisieExo2) ; // Conversion de la saisie en un entier
    document.getElementById("exo2A").innerHTML = "Le nombre saisie est : " + nombreExo2 + "." ;

    // BOUCLE WHILE (TANT QUE)
    while (Number.isNaN(nombreExo2)) // Tant que la saisie n'est pas un chiffre, la demande de saisie est renvoyée
    {
        alert("La saisie n'est pas un nombre") ;
        saisieExo2 = prompt("Saisissez un nombre pour avoir la somme des entiers qui lui sont inférieurs.") ;
        nombreExo2 = parseInt(saisieExo2) ;
    }
         // BOUCLE FOR
        for (iExo2=0; iExo2<nombreExo2; iExo2++) // Pour un nombre d'itération commençant à zéro et inférieur à l'entier du nombre saisie.
        {
            somme+=iExo2 ; //Calcul de la somme
        } ;
        
    //AFFICHAGE
    console.log("Il y a " + (iExo2-1) + " entiers inférieur à " + nombreExo2 + ". La somme des nombres inférieur à " + saisieExo2 + " est de : " + somme) ;    
    document.getElementById("exo2B").innerHTML = "Il y a " + (iExo2-1) + " entiers inférieur à " + nombreExo2 + ". La somme des nombres inférieur à " + saisieExo2 + " est de : " + somme ;
} ;
//EXERCICE 3 : Mini et maxi 
function exo3()
{
    //DECLARATION DES VARIABLES
    let saisieExo3 ; // Variable de saisie du nombre de l'exercice 3
    let nombreExo3 ; // Variable entier du nombre saisie
    let min ; // Variable minimum
    let max ; // Variable maximum
    max = 0 ; //Affectation d'une valeur "0" au maximum
    let iExo3 ; // Variable d'itération
    iExo3=0 ; //Affectation d'une valeur "0" à la variable itération
    
    // BOUCLE WHILE (TANT QUE)
    saisieExo3 = prompt("Saisissez un nombre pour avoir une liste de nombre avec un minimum et un maximum.  La saisie s'arrete à la valeur 0.") ; //Première demande de saisie d'un nombre
    nombreExo3 = parseInt(saisieExo3) ; // Conversion de la saisie en un entier
    let liste ; // Variable liste
    liste = nombreExo3 + " ; " ; // Liste des nombres saissies
    console.log("Le nombre saisie est : " + nombreExo3) ; // Affichage du nombre saisie en entier
    min = nombreExo3 ; // Affectation du premier nombre saisie à la variable minimum
    do
    {    
          
        if (Number.isNaN(nombreExo3)==true) // Condition : Si le nombre saisie n'est pas un chiffre, la demande de saisie est renvoyée
        {
        alert("La saisie n'est pas un nombre") ; //Message d'alerte informant que le saisie n'est pas un nombre
        }
        else if (nombreExo3>max) // Condition :  Si le nombre saisie est supérieur au maximum
        {
            max = nombreExo3 ; // Le nombre saisie devient le maximum
        }
        else if (nombreExo3<max && nombreExo3!=0) // Condition :  Si le nombre saisie est inférieur à la variable maximum
        {
            min ; // La valeur minimum ne change pas
            if (nombreExo3<min) // Condition :  Si le nombre saisie est inférieur à la variable minimum
            {
                min = nombreExo3 ; // Le nombre saisie devient le minimum
            };
        }
        saisieExo3 = prompt("Saisissez un nombre pour avoir une liste de nombre avec un minimum et un maximum.  La saisie s'arrete à la valeur 0.") ; //Demande de saisie d'un nombre
        nombreExo3 = parseInt(saisieExo3) ; // Conversion de la saisie en un entier
        console.log("Le nombre saisie est : " + nombreExo3) ; // Affichage du nombre saisie en entier
        
        liste += saisieExo3 + " ; " ;
        iExo3++ ; // Incrémentation
        
    } while (nombreExo3!=0) // Condition de sortie : Tant que le nombre est différent de 0

    document.getElementById("exo3A").innerHTML = "La liste des nombres saisies est : <br>" + liste ;
    alert("Le nombre maximum saisie est : " + max) ; // Boite d'alerte qui affiche le maximum
    document.getElementById("exo3B").innerHTML = "Le maximum est : " + max + "." ;
    alert("Le nombre minimum saisie est : " + min) ; // Boite d'alerte qui affiche le minimum
    document.getElementById("exo3C").innerHTML = "Le minimum est : " + min + "." ;
} ;
// EXERCICE 4 : Calcul du nombre de jeunes, de moyens et de vieux
function exo4()
{
//DECLARATION DES VARIABLES
let nombreExo4 ; // Variable de saisie du nombre de l'exercice 4
let ageInf20 ; // Variable pour les âges inférieurs à 20
let ageSup40 ; // Variable pour les âges supérieur à 40
let ageEntre20Et40 ; // Variable pour les âges compris entre 20 et 40
ageInf20 = 0 ; // Affectation d'une valeur "0" à la variable "âges inférieurs à 20"
ageEntre20Et40 = 0 ; // Affectation d'une valeur "0" à la variable "âges compris entre 20 et 40"
ageSup40 = 0 ; // Affectation d'une valeur "0" à la variable "âges supérieur à 40"
let iExo4 ; // Variable d'itération
iExo4=0 ; //Affectation d'une valeur "0" à la variable itération
//
do //Boucle do (Faire...tant que)
{
    nombreExo4 = prompt("Renseignez l'âge d'une personne. La saisie s'arrete dès la saisie d'un centenaire."); // Demande de saisie de l'âge de la personne
    console.log("L'âge donné est : " + nombreExo4 + ".")
    if (nombreExo4<20) // Condition :  Si le nombre saisie est inférieur à 20
    {
        ageInf20+=1 ; // Augmentation de 1, du compte des âges inférieurs à 20
    }
    else if (nombreExo4>40) // Condition :  Si le nombre saisie est supérieur à 40
    {
        ageSup40+=1; // Augmentation de 1, du compte des âges supérieur à 40
    }
    else // Condition :  Si le nombre saisie est compris entre 20 et 40
    {
        ageEntre20Et40 += 1; // Augmentation de 1, du compte des âges compris entre 20 et 40
    }
    iExo4++ ; // Incrémentation
} while (nombreExo4<100) // Condition de sortie : Tant que le nombre est strictement inférieur à 100
alert("Le nombre total de personne est de : " + iExo4) ; // Boite d'alerte qui affiche le nombre total
document.getElementById("exo4A").innerHTML = "Le nombre total de personne est de : " + iExo4 + "." ;
alert("Sur " + iExo4 + " personne(s). Le nombre de personne agé de moins de 20 ans est de : " + ageInf20) ; // Boite d'alerte qui affiche les âges 
document.getElementById("exo4B").innerHTML = "Sur " + iExo4 + " personne(s). Le nombre de personne agé de moins de 20 ans est de : " + ageInf20 + "." ;
alert("Sur " + iExo4 + " personne(s). Le nombre de personne dont l'âge est compris entre 20 ans et 40 ans est de : " + ageEntre20Et40) ; // Boite d'alerte qui affiche les âges compris entre 20 et 40
document.getElementById("exo4C").innerHTML = "Sur " + iExo4 + " personne(s). Le nombre de personne dont l'âge est compris entre 20 ans et 40 ans est de : " + ageEntre20Et40 + "." ;
alert("Sur " + iExo4 + " personne(s). Le nombre de personne agé de plus de 40 ans est de : " + ageSup40) ; // Boite d'alerte qui affiche les âges supérieur à 40 
document.getElementById("exo4D").innerHTML = "Sur " + iExo4 + " personne(s). Le nombre de personne agé de plus de 40 ans est de : " + ageSup40 + "." ;
} ;
//EXERCICE 5 : Table de multiplication 
function exo5()
{
//DECLARATION DES VARIABLES
let nombreExo5 ; // Variable de saisie du nombre de l'exercice 5
let resultat ; // Variable du résultat
let iExo5 ; // Variable d'itération
// DEMANDE DE SAISIE
nombreExo5 = prompt("Saisissez un nombre pour en afficher la table de multiplication") ;
document.getElementById("exo5A").innerHTML = "La table de multiplication de " + nombreExo5 + " jusqu'à " + nombreExo5 + " est : " ;
//DEFINITION DE LA FONCTION
function TableMultiplication(nombreExo5) // Fonction
{
    for (iExo5=1; iExo5<=nombreExo5; iExo5++) // Boucle For
    {
        resultat = iExo5 * nombreExo5 ; // Résultat
        document.getElementById("exo5B").innerHTML += iExo5 + " x " + nombreExo5 + " = " + resultat + ".<br>" ;
    } ;
} ;
//APPEL DE LA FONCTION
TableMultiplication(nombreExo5) ; 
} ;
// EXERCICE 6 : Recherche d'un prénom
function exo6()
{
//DECLARATION DES VARIABLES
let nombreEssaiTableau ; //Variable du nombre de fois où le prénom est comparé aux valeurs du tableau 
nombreEssaiTableau = 0 ; //Affectation d'une valeur "0" à la variable "nombreEssaiTableau"
//DEMANDE DE SAISIE
prenomSaisie = prompt("Saisissez un prénom, pour savoir s'il est dans le tableau") ;
document.getElementById("exo6A").innerHTML = "Le prénom saisie est : " + prenomSaisie + "." ; 
premiereLettre = prenomSaisie.charAt(0);  // Première lettre du prénom saisie
modificationPremierLettre = prenomSaisie.charAt(0).toUpperCase() ; // Modification de la première lettre du prénom saisie en une lettre majuscule
prenom = prenomSaisie.replace(premiereLettre, modificationPremierLettre) ; // Remplacement de la première lettre du prénom saisie

//DECLARATION DU TABLEAU
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara" , "Salem", "Samuel", "Stéphane"] ; // Tableau
long = tab.length ; // Longeur du tableau

for (iExo6=0; iExo6<long; iExo6++) // Boucle for
{
    if (prenom==tab[iExo6]) // Condition : Si le prénom est égal à la valeur i du tableau
    {
    console.log("Le prenom "+ tab[iExo6] + " est dans le tableau") ; 
    document.getElementById("exo6A").innerHTML = "Le prénom "+ tab[iExo6] + " est dans le tableau." ;
    console.log("Le prenom est à la "+ (iExo6+1)+ "ème place.") ;
    document.getElementById("exo6B").innerHTML = "Le prenom est à la "+ (iExo6+1)+ "ème place." ;
    supression = tab.splice(iExo6, 1) ; // prénom supprimé du tableau
    nouveauTableau = tab.slice(0,long) ; // Tableau sans le prénom supprimé
    tab.push(" ... ") ; // Ajout d'une dernière case vide
    console.log("Le nouveau tableau est : " + tab) ;
    document.getElementById("exo6C").innerHTML = "Le nouveau tableau est : " + tab + "." ;
    } 
    else // Condition : Sinon comptabilisation du nombre de fois où le prénom n'est pas égal à la valeur i du tableau 
    {
        nombreEssaiTableau+=1 ; 
        if (nombreEssaiTableau==long) // Condition : Si le nombre de fois où le prénom est comparé aux valeurs du tableau est égal à la longeur du tableau (il n'y a aucune correspondance)
        {
            console.log("Le prenom "+ prenomSaisie + " n'est pas dans le tableau.") ;
            document.getElementById("exo6D").innerHTML = "Le prenom "+ prenomSaisie + " n'est pas dans le tableau." ;
        } ;
    } ;
} ;
}

// EXERICE 7 : Vérification d'un formulaire

function exo7 ()
{
    document.getElementById("voirFormulaire").innerHTML= "Voir le formulaire Jarditout. "
} ;

//DECLARATION DES VARIABLES
let controleLettres = /^[A-Za-z]+\s?(-)?[A-Za-z]*$/ ;

function controleLettreNom() // Fonction de contrôle de saisie du champ "Nom"
{
    let reponseNom = document.getElementById("nom").value ;
    while (controleLettres.test(reponseNom)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurNom").innerHTML= reponseNom + " n'est pas une réponse valide. <br> Veuillez saisir votre nom !" ; 
    document.getElementById("erreurNom").style.color = "red" ;
    document.getElementById("nom").value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Nom : " + reponseNom) ;
    document.getElementById("erreurNom").innerHTML= "" ;
    //document.getElementById("exo7A").innerHTML ="Nom : " + reponseNom ;
} ;
function controleLettrePrenom() // Fonction de contrôle de saisie du champ "Prénom"
{
    let reponsePrenom = document.getElementById("prénom").value ;
    while (controleLettres.test(reponsePrenom)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurPrenom").innerHTML = reponsePrenom + " n'est pas une réponse valide. <br> Veuillez saisir votre prénom !" ; 
    document.getElementById("erreurPrenom").style.color = "red" ;
    document.getElementById("prénom").value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Prénom : " + reponsePrenom) ;
    document.getElementById("erreurPrenom").innerHTML = "" ;
    // document.getElementById("exo7B").innerHTML= "Prénom : " + reponsePrenom ;
} ;
function valeurGenre() 
{
    document.getElementById("erreurGenre").innerHTML = "" ;
    let reponseGenre = document.getElementsByName("genre");
    cocheFemme = reponseGenre[0].checked ; 
    cocheHomme = reponseGenre[1].checked ;
    if (cocheFemme==true) 
    {
        console.log("Sexe : femme" ) ;
        // document.getElementById("exo7C").innerHTML= "Sexe : " + cocheFemme ;
    }
    else if (cocheHomme==true)
    {
        console.log("Sexe : homme" ) ;
        // document.getElementById("exo7D").innerHTML= "Sexe : " + cocheHomme ;
    }
} ;
function controleGenre() // Fonction de contrôle de saisie du champ "Prénom"
{
    let reponseGenre = document.getElementsByName("genre")
    while (reponseGenre[1].checked==false && reponseGenre[0].checked==false) // Boucle (Tant.. que...) 
    { 
    document.getElementById("erreurGenre").innerHTML= "Vous devez cocher une valeur !" ;
    document.getElementById("erreurGenre").style.color= "red" ;
    return false ; // Retourne la valeur "faux"
    }
    document.getElementById("erreurGenre").innerHTML= "" ;    
} ;
function controleDateNaissance() // Fonction de contrôle de saisie du champ "Date de naissance"
{
    let controleDateNaissance = /^[0-9][0-9][0-9][0-9](\/|-|\.)[0-9][0-9](\/|-|\.)[0-9][0-9]?$/ ;
    let reponseDateNaissance = document.getElementById("naissance").value ;  
    while (controleDateNaissance.test(reponseDateNaissance)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurDateNaissance").innerHTML= "La date de naissance " + reponseDateNaissance + " n'est pas valide. <br> Veuillez saisir votre date de naissance !" ; 
    document.getElementById("erreurDateNaissance").style.color= "red" ;
    return false ; // Retourne la valeur "faux"
    }
    console.log("Date de naissance : " + reponseDateNaissance) ;
    document.getElementById("erreurDateNaissance").innerHTML= "" ;
    // document.getElementById("exo7E").innerHTML= "Date de naissance : " + reponseDateNaissance ;
} ;
function controleCodePostal() // Fonction de contrôle de saisie du champ "Code postal"
{
    let controleCodePostal = /^[0-9][0-9][0-9][0-9][0-9]*$/;
    let reponseCodePostal = document.getElementById("code postal").value ;  
    while (controleCodePostal.test(reponseCodePostal)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurCodePostal").innerHTML= "Le code postal " + reponseCodePostal + " n'est pas valide. <br> Veuillez saisir un code postal complet !" ;
    document.getElementById("erreurCodePostal").style.color= "red" ;
    document.getElementById("code postal").value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Code postal : " + reponseCodePostal) ;
    document.getElementById("erreurCodePostal").innerHTML = "" ;
    // document.getElementById("exo7F").innerHTML= "Code postal : " + reponseCodePostal ;
} ;
function controleAdresse() // Fonction de contrôle de saisie du champ "Adresse"
{
    let controleAdresse = /^(\d)+(\s)?[A-Za-z]+(\s)?(-)?[A-Za-z]*[0-9]*(\s)?(-)?[A-Za-z]*[0-9]*(\s)?(-)?[A-Za-z]*[0-9]*(\s)?(-)?[A-Za-z]*[0-9]*$/;
    let reponseAdresse = document.getElementById("adresse").value ;
    while (controleAdresse.test(reponseAdresse)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurAdresse").innerHTML= "L'adresse n'est pas valide. <br> Veuillez saisir une adresse complète !" ; 
    document.getElementById("erreurAdresse").style.color= "red" ;
    document.getElementById("adresse").value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Adresse : " + reponseAdresse) ;
    document.getElementById("erreurAdresse").innerHTML= "" ;
    // document.getElementById("exo7G").innerHTML= "Adresse : " + reponseAdresse ;
} ;
function controleLettreVille() // Fonction de contrôle de saisie du champ "Ville"
{
    let reponseVille = document.getElementById("ville").value ;
    while (controleLettres.test(reponseVille)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurVille").innerHTML= reponseVille + " n'est pas une réponse valide. <br> Veuillez saisir le nom d'une ville !" ;
    document.getElementById("erreurVille").style.color= "red" ;
    document.getElementById("ville").value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Ville : " + reponseVille) ;
    document.getElementById("erreurVille").innerHTML= "" ;
    // document.getElementById("exo7H").innerHTML= "Ville : " + reponseVille ;
} ;
function controleEmail() // Fonction de contrôle de saisie du champ "Email"
{
    let controleEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?/
    let reponseEmail = document.getElementById("email").value ;  
    while (controleEmail.test(reponseEmail)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurEmail").innerHTML= "L'adresse email " + reponseEmail + " n'est pas valide. <br> Veuillez saisir une adresse email complète !" ; 
    document.getElementById("erreurEmail").style.color= "red" ;
    document.getElementById("email").value = "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Email : " + reponseEmail) ;
    document.getElementById("erreurEmail").innerHTML= "" ;
    // document.getElementById("exo7I").innerHTML= "Email : " + reponseEmail ;
} ;
function valeurQuestion() 
{
    let typeQuestion = document.getElementById("sujet");
    sujet = typeQuestion[typeQuestion.selectedIndex].value;  
    console.log("Sujet : "+ sujet)
    
}
function controleLettreQuestion() // Fonction de contrôle de saisie du champ "Question"
{
    let controleQuestion = /^[A-Za-z]+\d*$/ ;
    let reponseQuestion = document.getElementsByName("question") ;
    while (controleQuestion.test(reponseQuestion[0].value)==false) // Boucle (Tant.. que...) 
    {
    document.getElementById("erreurQuestion").innerHTML= "Votre question n'est pas valide. Veuillez reformuler votre question !" ;
    document.getElementById("erreurQuestion").style.color= "red" ;
    reponseQuestion[0].value= "";
    return false ; // Retourne la valeur "faux"
    }
    console.log("Question : " + reponseQuestion[0].value) ;
    document.getElementById("erreurQuestion").innerHTML= "";
    // document.getElementById("exo7J").innerHTML= "Question : " + reponseQuestion ;
} ;
let envoi=document.getElementById("valider") ;  // variable de validation du formulaire
envoi.addEventListener("click", validation) ; // Evènement lié au click "envoyé" du formulaire

function validation (A) // Fonction de contrôle de la saisie de tout les champs du formulaire
{ 
    let erreur = 0 ; // Variable qui contabilise le nombre d'erreur dans le formulaire
    let functionControleLettreNom = controleLettreNom() ; // Variable retour de la fonction 
    let functionControleLettrePrenom = controleLettrePrenom() ; // Variable retour de la fonction 
    let functionControleGenre = controleGenre() ; // Variable retour de la fonction 
    let functionControleDateNaissance = controleDateNaissance() ; // Variable retour de la fonction 
    let functionControleCodePostal = controleCodePostal() ; // Variable retour de la fonction 
    let functionControleAdresse = controleAdresse() ; // Variable retour de la fonction 
    let functionControleLettreVille = controleLettreVille() ; // Variable retour de la fonction 
    let functionControleEmail = controleEmail() ; // Variable retour de la fonction 
    let functionControleLettreQuestion = controleLettreQuestion() ; // Variable retour de la fonction 
    if (functionControleLettreNom==false) 
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleLettrePrenom===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleGenre===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleDateNaissance===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleCodePostal===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleAdresse===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleLettreVille===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleEmail===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    if (functionControleLettreQuestion===false) // Condition Si la fonction retourne la valeur "faux"
    {
        erreur+=1; // Variable comptabilisant le nombre d'erreur
    } ;
    console.log(erreur) ;
    if (erreur>0)
    {
        alert ("Le formulaire n'est pas complet ! Il y a "+ erreur + "erreur(s).") // Boite d'alerte
        A.preventDefault () ;  
    } ;  
};
