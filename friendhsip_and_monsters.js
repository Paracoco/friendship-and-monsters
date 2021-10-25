let dogFound = false;

function startDog() {
    if (dogFound == true) {
        goToChapter("chapitre5");
    } else {
        goToChapter("");
    }
};

let knowledge = false;
function startKnowledge (){
    if (knowledge == true) {
        goToChapter("chapitre13");
    } else {
        goToChapter("");
    }
};

let chaptersObj = {
    chapitre1: {
        subtitle: 'Réveil',
        text:'Vous vous réveillez dans votre bunker et penser à votre meilleur(e) ami(e) qui est loin dans un bunker différent',
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
        text:'.',
        img: 'assets/bunker_monster.jpg',
        options: [
            {
                text: "Suivant",
                action: "goToChapter('chapitre1')",
            }
        ]
    },

    chapitre3: {
        subtitle: 'Part en aventure',
        text: '.',
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
        text:'En se promenant, vous trouvez une van abandoné parmis des maison en ruine.',
        img: 'assets/van.jpg',
        options: [
            {
                text: "Chercher la van. En cherchant la van vous trouvez un chien.",
                action: "goToChapter('chapitre5')",
            },
            {   
                text: "Continuer sa route.",
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
                text: "Suivant.",
                action: "goToChapter('chapitre6')",
            }
        ]
    },

    chapitre6: {
        subtitle: 'Monstre sur votre chemin',
        text:'En continuant votre chemin, vous rencontrez un monstre sur votre chemin.',
        img: 'assets/fige.jpg',
        options: [
            {
                text: "Courire vite sans regarder derrière.",
                action: "goToChapter('chapitre7')",
            },
            {   
                text: "Utiliser votre arbalète que vous ignoré les fonctions.",
                action: "goToChapter('chapitre8')",
            },
            {   
                text: "Resté figé.",
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
                text: "Suivant.",
                action: "goToChapter('chapitre8')",
            }
        ]
    },

    chapitre8: {
        subtitle: 'Mort',
        text: '.',
        img: 'assets/mort.jpg',
        options: [
            {
                text: "Suivant.",
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
                text: "Continuer votre chemin à droite.",
                action: "goToChapter('chapitre10')",
                    },
            {   
                text: "Continuer votre chemin à gauche.",
                action: "goToChapter('chapitre11')",
            }
        ]
    },

    chapitre10: {
        subtitle: 'Attaque surprise bonus chien.',
        text:'En marchant paisiblement vous vous faites soudainement attaquer par surpsise par une énorme grenouille.',
        img: 'assets/frog.jpg',
        options: [
            {
                text: "Sans chien.",
                action: "goToChapter('chapitre8')",
            },
            {   
                text: "Avec chien.",
                action: "goToChapter('chapitre13')",
            }
        ]
    },
    
    chapitre11: {
        subtitle: 'Rencontre de 2 étrangers.',
        text:'En marchant vous rencontrez 2 étrangers qui vous accompagne pour quelques jours pendant votre séjour vous apprenant de nouvelles choses sur les monstres.',
        img: 'assets/strangers.jpg',
        options: [
            {
                text: "Partir avec eux.",
                action: "goToChapter('chapitre12)",
            },
            {   
                text: "Continuer seul.",
                action: "goToChapter('chapitre13')",
            }
        ]
    },

    chapitre12: {
        subtitle: 'Part dans le nord.',
        text:'Vous restez avec les 2 inconnus que vous avez rencontrer et partez vers le nord avec eux en lieu plus sure.',
        img: 'assets/mountains.jpg',
        options: [
            {
                text: "Sans chien.",
                action: "goToChapter('chapitre8')",
            },
            {   
                text: "Avec chien.",
                action: "goToChapter('chapitre13')",
            }
        ]
    },           

    chapitre13: {
        subtitle: 'Attaque Bunker de son ami(e).',
        text:'Vous arrivez enfin au bunker de votre ami(e). Par contre, la colonie est attaquer par des pirates qui on enchainer un crabe géant pour le controler.',
        img: 'assets/crabe.jpg',
        options: [
            {
            text: "L'attquer et essayer de le tuer.",
            action: "goToChapter('chapitre8')",
            },
            {   
                text: "Regarder ses yeux et le libérer.",
                action: "goToChapter('chapitre14')",
            }
        ]
    },

    chapitre14: {
        subtitle: 'Part dans le nord avec son ami(e).',
        text:'Vous et votre ami(e) décider de partir vers le nord ou les monstre y sont moins nombreux.',
        img: 'assets/ending.jpg',
        options: []
    }
}

function goToChapter(chapterName) {
    let choice = "";
    let chapter = chaptersObj[chapterName];

    document.querySelector(".chapitre").innerText= chapter.subtitle;
    document.querySelector(".text").innerText= chapter.text;
    document.querySelector(".image").innerHTML=`<img src="${chapter.img}"/>`;
   
    const optionArr = chapter.options.length;
    for (let index = 0; index < optionArr; index++){
        choice += `<input type="button" class="button" value='${chapter.options[index].text}' onclick="${chapter.options[index].action}"/>`;
    }
    document.querySelector(".options").innerHTML = choice;
}

goToChapter('chapitre1')
