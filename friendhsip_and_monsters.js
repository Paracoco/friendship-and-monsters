let dogFound = false;

function achieveStartDog() {
    dogFound = true;
    goToChapter("chapitre5")
    localStorage.setItem("keyDog", dogFound)
};

function startDog() {
    if (dogFound == true) {
        goToChapter("chapitre13");
    } else {
        goToChapter("chapitre16");
    }
};

let knowledge = false;

function achieveStartKnowledge(){
    knowledge = true;
    goToChapter("chapitre11")
    localStorage.setItem("keyKnowledge", knowledge)
};

function startKnowledge (){
    if (knowledge == true) {
        goToChapter("chapitre14");
    } else {
        goToChapter("chapitre15");
    }
};
 
function reset(){
    dogFound = false;
    knowledge = false;
    goToChapter("chapitre1")
};


let chaptersObj = {
    chapitre1: {
        subtitle: 'Réveil',
        text:'Vous vous réveillez dans votre bunker et penser à votre meilleur(e) ami(e) qui est loin dans un bunker différent.',
        img: 'assets/reveil.jpg',
        options: [
            {
                text: "Sortir dehors aller rejoindre son ami(e)",
                action: "goToChapter('chapitre3')",
            },
            {   
                text: "Rester dans son bunker",
                action: "goToChapter('chapitre2')",
            }
        ]
    },

    chapitre2: {
        subtitle: 'Mort par invasion de monstres',
        text:"Des monstres ont réussi à s'infiltrer dans votre bunker et tuer tout le monde.",
        img: 'assets/bunker_monster.jpg',
        options: [
            {
                text: "Recommencer",
                action: "reset()"
            }
        ]
    },

    chapitre3: {
        subtitle: 'Part en aventure',
        text: 'Vous prenez votre courage à deux mains et commencez votre séjour en direction du bunker de votre ami.',
        img: 'assets/aventure.jpg',
        options: [
            {
                text: "Suivant",
                action: "goToChapter('chapitre4')",
            }
        ]
    },

    chapitre4: {
        subtitle: 'Trouve une van',
        text:'En se promenant, vous trouvez une van abandoné parmis des maisons en ruines.',
        img: 'assets/van.jpg',
        options: [
            {
                text: "Chercher la van",
                action: "achieveStartDog()",
            },
            {   
                text: "Continuer sa route",
                action: "goToChapter('chapitre6')",
            }
        ]
    },

    chapitre5: {
        subtitle: 'Trouve un chien',
        text:'En cherchant la van, vous trouvez un chien.',
        img: 'assets/dog.jpg',
        options: [
            {
                text: "Suivant",
                action: "goToChapter('chapitre6')",
            }
        ]
    },

    chapitre6: {
        subtitle: 'Monstre sur votre chemin',
        text:'En continuant votre chemin, vous rencontrez un monstre sur votre chemin.',
        img: 'assets/fige.jpg',
        video: "assets/bunker_video.mp4",
        options: [
            {
                text: "Courire vite sans regarder derrière",
                action: "goToChapter('chapitre7')",
            },
            {   
                text: "Utiliser votre arbalète que vous ignoré les fonctions",
                action: "goToChapter('chapitre18')",
            },
            {   
                text: "Resté figé",
                action: "goToChapter('chapitre9')",
            }
        ]
    },

    chapitre7: {
        subtitle: 'Tombe dans un nid',
        text:'Vous courrez sans regarder ou vous allez et tomber dans un nid de sand gobblers.',
        img: 'assets/sand_gobblers.jpg',
        options: [
            {
                text: "Suivant",
                action: "goToChapter('chapitre8')",
            }
        ]
    },

    chapitre8: {
        subtitle: 'Mort nid',
        text: 'Il y avait aucune possibilité de sortir du nid seul. Vous êtes devenu le dinner des sand gobblers',
        img: 'assets/mort.jpg',
        options: [
            {
                text: "Recommencer",
                action: "goToChapter('chapitre6')",
            }
        ]
    },

    chapitre9: {
        subtitle: 'Monstre part.',
        text:'Vous resté figé sur place et le monstre désinteressé continue sa route.',
        img: 'assets/snail.jpg',
        options: [
            {
                text: "Continuer votre chemin à droite",
                action: "goToChapter('chapitre10')",
                    },
            {   
                text: "Continuer votre chemin à gauche",
                action: "achieveStartKnowledge()",
            }
        ]
    },

    chapitre10: {
        subtitle: 'Attaque surprise.',
        text:'En marchant paisiblement vous vous faites soudainement attaquer par surprise par une énorme grenouille.',
        img: 'assets/frog.jpg',
        video: "assets/frog_video.mp4",
        options: [
            {
                text: "Suivant",
                action: "startDog()",
            },
        ]
    },
    
    chapitre11: {
        subtitle: 'Rencontre de 2 étrangers.',
        text:'En marchant vous rencontrez 2 étrangers qui vous accompagne pour quelques jours pendant votre séjour vous apprenant de nouvelles choses sur les monstres.',
        img: 'assets/strangers.jpg',
        options: [
            {
                text: "Continuer avec eux",
                action: "goToChapter('chapitre12')",
            },
            {   
                text: "Continuer seul",
                action: "goToChapter('chapitre17')",
            }
        ]
    },

    chapitre12: {
        subtitle: 'Part dans le nord.',
        text:'Vous restez avec les 2 inconnus que vous avez rencontrer et partez vers le nord avec eux en lieu plus sure.',
        img: 'assets/mountains.jpg',
        options: [
            {
                text: "Fin",
                action: "reset()",
            }
        ]
    },           

    chapitre13: {
        subtitle: 'Attaque Bunker de son ami(e).',
        text:'Par chance le chien à effrayer la grenouille et vous avez pu vous échapper tout les deux. Vous arrivez enfin au bunker de votre ami(e). Par contre, la colonie est attaquer par des pirates qui on enchainer un crabe géant pour le controler.',
        img: 'assets/dog_frog.jpg',
        options: [
            {
            text: "Suivant",
            action: "startKnowledge()",
            },
           
        ]
    },

    chapitre14: {
        subtitle: 'Part dans le nord avec son ami(e).',
        text:'Vous et votre ami(e) décider de partir vers le nord ou les monstre y sont moins nombreux.',
        img: 'assets/ending.jpg',
        options: [
        {
            text: "Fin",
            action: "reset()"
        }
        ]
    },

    chapitre15: {
        subtitle: 'Mort crabe',
        text:'Vous avez essayer de tuer le crabe mais sans succès.',
        img: 'assets/crabe.jpg',
        options: [
            {
                text: "Recommencer",
                action: "goToChapter('chapitre9')"
            }
           
        ]
    },

    chapitre16: {
        subtitle: 'Mort grenouille',
        text:'Vous avez été trop lent pour échapper à la grenouille géante.',
        img: 'assets/frog.jpg',
        options: [
            {
                text: "Recommencer",
                action: "goToChapter('chapitre4')"
            }
           
        ]
    },

    chapitre17: {
        subtitle: 'Attaque Bunker de son ami(e).',
        text:'Vous arrivez enfin au bunker de votre ami(e). Par contre, la colonie est attaquer par des pirates qui on enchainer un crabe géant pour le controler.',
        img: 'assets/crabe.jpg',
        options: [
            {
            text: "Suivant",
            action: "startKnowledge()",
            },
           
        ]
    },

    chapitre18: {
        subtitle: 'Monstre part',
        text:'Vous manquer votre cible, mais le monstre le continue sa route désinterressé par vous.',
        img: 'assets/snail.jpg',
        options: [
            {
                text: "Continuer votre chemin à droite",
                action: "goToChapter('chapitre10')",
                    },
            {   
                text: "Continuer votre chemin à gauche",
                action: "achieveStartKnowledge()",
            }
           
        ]
    },
};

const audio = new Audio("assets/mixkit-guitar-string-tone-2326.mp3")
function goToChapter(chapterName) {
    let choice = "";
    let chapter = chaptersObj[chapterName];
    let balise ="";
    
    let volume = 0.8;
    audio.volume = volume
    audio.play();

    document.querySelector(".chapitre").innerText= chapter.subtitle;
    document.querySelector(".text").innerText= chapter.text;
    
    if(chapter.video != undefined){
        balise =`<video src="${chapter.video}" autoplay loop muted>`
    } else {
        balise=`<img src="${chapter.img}">`
    }
       
    document.querySelector(".image").innerHTML = balise;

    const optionArr = chapter.options.length;
    for (let index = 0; index < optionArr; index++){
        choice += `<input type="button" class="button" value='${chapter.options[index].text}' onclick="${chapter.options[index].action}"/>`;
    }
    
    document.querySelector(".options").innerHTML = choice;
    
    localStorage.setItem("chapterUser", chapterName);
};
   
if(localStorage.getItem("chapterUser") != null){
    goToChapter(`${localStorage.getItem("chapterUser")}`)
} else {
    goToChapter("chapitre1")
}

if(localStorage.getItem("keyDog") != undefined){
    dogFound = Boolean(localStorage.getItem("keyDog"))
    console.log(dogFound)
} else {
    dogFound = false
}

if(localStorage.getItem("keyKnowledge") != undefined){
    knowledge = Boolean(localStorage.getItem("keyKnowledge"))
    console.log(knowledge)
} else {
    knowledge = false
}
