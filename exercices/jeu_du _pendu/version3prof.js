function game() {
    let mots_8 = ["accident", "acrobate", "adjectif", "adverbes", "aeroport", "africain", "aiguille", "allemand", "allonger", "alphabet", "amerique", "analogie", "anarchie", "anatomie", "appareil", "apporter", "aquarium", "araignee", "archipel", "arracher", "arrosoir", "assiette", "atheisme", "attacher", "attendre", "atterrir", "attraper", "bacterie", "bagarrer", "baguette", "balancer", "banlieue", "banquise", "barboter", "barrette", "baseball", "beaucoup", "biologie", "bonhomme", "bordeaux", "bouillir", "bourgeon", "boutique", "bracelet", "bretelle", "brouette", "camarade", "campagne", "caniveau", "caravane", "caresser", "cartable", "cassette", "ceinture", "chanteur", "chasseur", "chauffer", "chausser", "chausson", "cheminee", "chenille", "chercher", "cheville", "chimique", "chocolat", "chouette", "coiffeur", "colorier", "compagne", "comparer", "conduire", "connasse", "consoler", "consomme", "coquille", "couleurs", "couronne", "courrier", "crevasse", "crevette", "cueillir", "cuillere", "cuisiner", "cyclisme", "deborder", "decembre", "dechirer", "decoller", "decouper", "defendre", "deguiser", "dejeuner", "demander", "demarrer", "dentiste", "depasser", "depecher", "deranger", "derriere", "desobeir", "desordre", "dessinee", "dessiner", "detester", "detruire", "deuxieme", "dimanche", "discuter", "disputer", "distance", "divorcee", "douillet", "echanger", "echapper", "echasses", "eclairer", "ecologie", "ecorcher", "ecriture", "ecrivain", "ecureuil", "electron", "elephant", "eloigner", "emmerder", "empecher", "emporter", "enceinte", "endormir", "enfermer", "enfoncer", "ensemble", "entendre", "enterrer", "entourer", "eplucher", "equation", "escabeau", "escalade", "escalier", "escargot", "espagnol", "eteindre", "eternuer", "europeen", "explosif", "fascisme", "fauteuil", "fontaine", "football", "fouiller", "francais", "geologie", "gourmand", "habiller", "handball", "herisson", "histoire", "identite", "imaginer", "immeuble", "immobile", "incendie", "instable", "internet", "japonais", "jardiner", "journaux", "judaisme", "jugement", "jumelles", "kinshasa", "longueur", "lunettes", "machoire", "magazine", "magicien", "maladies", "mammouth", "mandarin", "marchand", "marecage", "medecine", "medicaux", "meilleur", "melanger", "mensonge", "mercredi", "milliard", "mineraux", "molecule", "monsieur", "montagne", "monument", "mouchoir", "mouiller", "muraille", "musicien", "natation", "nettoyer", "noisette", "novembre", "oceanien", "ordinaux", "oreiller", "orphelin", "pantalon", "panthere", "papillon", "parcours", "partager", "patauger", "peinture", "periodes", "personne", "petitami", "physique", "plaindre", "pleuvoir", "plombier", "pluvieux", "poitrine", "policier", "portiere", "position", "poubelle", "pourquoi", "preferer", "preparer", "promener", "proteger", "pullover", "pyramide", "quarante", "quartier", "quatorze", "question", "raconter", "ramasser", "rappeler", "raquette", "reaction", "realisme", "recevoir", "recoudre", "regarder", "religion", "remettre", "repasser", "repondre", "respirer", "retarder", "rondelle", "saladier", "sanskrit", "sciences", "septante", "soixante", "sonnette", "sorciere", "souffler", "souffrir", "soulever", "souvenir", "surprise", "synthese", "tabouret", "tagueule", "terminer", "terrible", "toboggan", "toilette", "tonnerre", "toujours", "tracteur", "traineau", "trembler", "triangle", "tricoter", "tricycle", "trottoir", "trounoir", "uniforme", "vacances", "variable", "vehicule", "vendredi", "vetement"];
    let mots_9 = ["abandonne", "accoucher", "accrocher", "allumette", "altruisme", "aluminium", "ambulance", "americain", "ascenseur", "asiatique", "asteroide", "astronome", "attention", "avalanche", "badminton", "biochimie", "botanique", "boucherie", "boulanger", "bousculer", "bouteille", "bricolage", "camescope", "cantonais", "cardinaux", "carrefour", "casquette", "casserole", "catalogue", "cauchemar", "changeant", "chataigne", "chaussure", "chirurgie", "chuchoter", "cigarette", "cimetiere", "cinquante", "cinquieme", "clignoter", "coloriage", "commencer", "compagnon", "concombre", "confiture", "continent", "continuer", "contraire", "coquetier", "corbeille", "couvercle", "crocodile", "dangereux", "decoupage", "degonfler", "delicieux", "demenager", "descendre", "dictature", "different", "difficile", "dimension", "dinosaure", "directeur", "doucement", "elastique", "embrasser", "entonnoir", "enveloppe", "epluchure", "equilibre", "escalader", "esclavage", "esperanto", "etiquette", "existence", "expliquer", "exterieur", "fabriquer", "feminisme", "fleuriste", "framboise", "geometrie", "grammaire", "grignoter", "guirlande", "handicape", "humanisme", "important", "infirmier", "installer", "interieur", "intestins", "inventeur", "jonquille", "kangourou", "maitresse", "maladroit", "mammifere", "maquiller", "marseille", "mecanique", "monarchie", "moustache", "moustique", "mouvement", "nucleaire", "orchestre", "paludisme", "pansement", "parapluie", "patissier", "perroquet", "personnes", "pharmacie", "plastique", "plongeoir", "politique", "portugais", "poussette", "poussiere", "princesse", "printemps", "promenade", "promettre", "propriete", "quatrieme", "questions", "radiateur", "remercier", "remplacer", "renverser", "retourner", "retrouver", "reveiller", "satellite", "sculpture", "septembre", "serviette", "shampoing", "souhaiter", "souligner", "spectacle", "squelette", "telephone", "telescope", "tournevis", "traverser", "troisieme", "trompette", "vaisselle", "xylophone", ""];
    let mots_10 = ["acoustique", "adolescent", "aspirateur", "astronomie", "athletisme", "automobile", "avortement", "backgammon", "balancoire", "barbouille", "bicyclette", "biographie", "bouddhisme", "brouillard", "calendrier", "champignon", "chaussette", "citrouille", "clementine", "coccinelle", "communisme", "comprendre", "conscience", "construire", "coquelicot", "coquillage", "couverture", "crocodiles", "cuisiniere", "definition", "democratie", "dentifrice", "difference", "diplomatie", "directrice", "distribuer", "dysenterie", "electrique", "enseignant", "esthetique", "fairechier", "filsdepute", "fourchette", "geographie", "grenouille", "hindouisme", "hirondelle", "impossible", "indonesien", "infirmiere", "inondation", "instrument", "inventions", "invitation", "magnetisme", "maintenant", "maquillage", "marguerite", "maternelle", "mecanicien", "medicament", "nourriture", "oligarchie", "ordinateur", "ordonnance", "pantheisme", "paquerette", "passerelle", "patisserie", "periodique", "peripherie", "petiteamie", "pharmacien", "phenomenes", "politicien", "poursuivre", "profession", "profondeur", "rapidement", "rechauffer", "recreation", "relativite", "rencontrer", "republique", "ressembler", "restaurant", "revolution", "rhinoceros", "semantique", "socialisme", "strasbourg", "surveiller", "syllogisme", "telephoner", "television", "trampoline", "tranquille", "transpirer", "travailler", "vietnamien", "voielactee"];

    let mot = "";
    let tableauLettre = [];
    let score = 10;
    let lettreJoueur = "";
    let trouvé = false;
    let reponse = 0;



    // IL MANQUE UNE FONCTION DIFFICULTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




    function newGame() {
        //tirer une valeur au hasard pour capturer un mot dans mon tableau
        let hasard = parseInt(Math.random() * (mots_7.length - 0) + 0);
        //j'assigne la valeur récupérée par mon nombre aléatoire à ma variable mot
        mot = mots_7[hasard];
        console.log(mot);
        //Envoyer pour chaque lettre de mon mot à trouver, un - dans le tableauLettre.
        for (i = 0; i < mot.length; i++) {
            tableauLettre[i] = "-";
        }
        choisirLettre();
    }

    function choisirLettre() {
        //Boucle do... while
        do {
            lettreJoueur = prompt(`le mot à trouver est ${tableauLettre.join(" ")}\nIl vous reste ${score} essais, \nChoisissez une lettre`);
        } while (lettreJoueur.length > 1 || lettreJoueur == "" || !isNaN(lettreJoueur));

        vérifierLettre(lettreJoueur);
    }

    function vérifierLettre(x) {

        for (i = 0; i <= 6; i++) {
            if (mot[i] == x) {
                trouvé = true;
                tableauLettre[i] = x;
            }
        }

        if (trouvé == false) {
            score--;
        }
        checkTableau();
    }


    function checkTableau() {
        trouvé = false;
        if (score == 0) {
            alert(`Vous avez perdu, le mot à trouver était ${mot}`);
            confirm(`Voulez-vous rejouer?`) ? game() : alert(`Au Revoir`);
        } else {
            reponse = 0;
            for (i = 0; i < tableauLettre.length; i++) {
                if (tableauLettre[i] != '-') {
                    reponse++;
                }
            }

            if (reponse == mot.length) {
                alert(`Bravo, vous avez gagné, le mot à trouver était bien ${mot}`);
                confirm(`Voulez-vous rejouer?`) ? game() : alert(`Au Revoir`);
            } else {
                choisirLettre();
            }
        }
    }

    //Je démare ma partie en tirant un nombre au hasard
    newGame();
}

game();