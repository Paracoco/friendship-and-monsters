const chaptersObj = {
    reveil: {
    subtitle: 'RÉveil',
    text:'Vous vous réveillez dans votre bunker et penser à votre meilleur(e) ami(e) qui est loin dans un bunker différent',
    img: 'reveil.jpg',
    options: [
    {
        text: "Sortir dehors aller rejoindre son ami(e)",
        action: "goToChapter('Part en aventure')",
            },
    {   
        text: "Rester dans son bunker",
        action: "goToChapter('Mort par invasion de monstres')",
            },
        ]
    },


chapitre2: {
    subtitle: 'Mort par invasion de monstres',
    text:'.',
    img: 'bunker_monster.jpg',
    options: [
        {
            text: "Suivant",
            action: "goToChapter('Réveile')",
                },
        
            ]
    },

chapitre3: {
    subtitle: 'Part en aventure',
    text:'.',
    img: 'chapitre2.jpg',
    options: [
        {
            text: "Suivant",
            action: "goToChapter('Trouve une van')",
                },
        
            ]
    },

chapitre4: {
    subtitle: 'Trouve une van',
    text:'En se promenant, vous trouvez une van abandoné parmis des maison en ruine.',
    img: 'van.jpg',
    options: [
        {
            text: "Chercher la van. En cherchant la van vous trouvez un chien.",
            action: "goToChapter('Trouve un chien')",
                },
        {   
            text: "Continuer sa route.",
            action: "goToChapter('Un monstre sur votre chemin')",
                },
            ]
    },

chapitre5: {
    subtitle: 'Trouve un chien',
    text:'En cherchant la van, vous trouvez un chien.',
    img: 'dog.jpg',
    options: [
        {
            text: "Suivant.",
            action: "goToChapter('Un monstre sur votre chemin')",
                },
      
            ]
    },


chapitre6: {
        subtitle: 'Monstre sur votre chemin',
        text:'En continuant votre chemin, vous rencontrez un monstre sur votre chemin.',
        img: 'fige.jpg',
        options: [
            {
                text: "Courire vite sans regarder derrière.",
                action: "goToChapter('Tombe dans un nid')",
                    },
            {   
                text: "Utiliser votre arbalète que vous ignoré les fonctions.",
                action: "goToChapter('Mort')",
                    },

                {   
                    text: "Resté figé.",
                    action: "goToChapter('Monstre part')",
                    },
                ]
        },

chapitre7: {
        subtitle: 'Tombe dans un nid',
        text:'Vous courrez sans regarder ou vous allez et tomber dans un nid de sand gobblers.',
        img: 'sand_gobblers.jpg',
        options: [
            {
                text: "Suivant.",
                action: "goToChapter('Mort')",
                    },
            
                ]
        },

chapitre8: {
        subtitle: 'Mort',
        text:'.',
        img: 'mort.jpg',
        options: [
            {
                text: "Suivant.",
                action: "goToChapter('Monstre sur votre chemin')",
                    },
            
                ]
        },

chapitre9: {
        subtitle: 'Monstre part.',
        text:'Vous resté figé sur place et le monstre désinteressé continue sa route.',
        img: 'snail.jpg',
        options: [
            {
                text: "Continuer votre chemin à droite.",
                action: "goToChapter('Attaque surprise bonus chien')",
                    },
            {   
                text: "Continuer votre chemin à gauche.",
                action: "goToChapter('Renconctre 2 étranger bonus connaissance')",
                    },
    
                ]
            },
chapitre10: {
        subtitle: 'Attaque surprise bonus chien.',
        text:'En marchant paisiblement vous vous faites soudainement attaquer par surpsise par une énorme grenouille.',
        img: 'frog.jpg',
        options: [
            {
                text: "Sans chien.",
                action: "goToChapter('Mort')",
                    },
            {   
                text: "Avec chien.",
                action: "goToChapter('Attaque au bunker de son ami(e)')",
                    },
    
                ]
            },
    
chapitre11: {
        subtitle: 'Rencontre de 2 étrangers.',
        text:'En marchant vous rencontrez 2 étrangers qui vous accompagne pour quelques jours pendant votre séjour vous apprenant de nouvelles choses sur les monstres.',
        img: 'strangers.jpg',
        options: [
            {
                text: "Partir avec eux.",
                action: "goToChapter('Part dans le nord')",
                    },
            {   
                text: "Continuer seul.",
                action: "goToChapter('Attaque bunker de son ami(e)')",
                    },
    
                ]
            },

chapitre12: {
        subtitle: 'Part dans le nord.',
        text:'Vous restez avec les 2 inconnus que vous avez rencontrer et partez vers le nord avec eux en lieu plus sure.',
        img: 'mountains.jpg',
        options: [
            {
                text: "Sans chien.",
                action: "goToChapter('Mort')",
                    },
            {   
                text: "Avec chien.",
                action: "goToChapter('Attaque au bunker de son ami(e)')",
                    },
    
                ]
            },           

chapitre13: {
        subtitle: 'Attaque Bunker de son ami(e).',
        text:'Vous arrivez enfin au bunker de votre ami(e). Par contre, la colonie est attaquer par des pirates qui on enchainer un crabe géant pour le controler.',
        img: 'crabe.jpg',
        options: [
                {
                text: "L'attquer et essayer de le tuer.",
                    action: "goToChapter('Mort')",
                        },
                {   
                    text: "Regarder ses yeux et le libérer.",
                    action: "goToChapter('Part dans le nord avec son ami(e)')",
                        },
            
                    ]
                },

chapitre14: {
        subtitle: 'Part dans le nord avec son ami(e).',
        text:'Vous et votre ami(e) décider de partir vers le nord ou les monstre y sont moins nombreux.',
        img: 'ending.jpg',
        
                },
            }

function goToChapter(chapterName) {
    const chapter = chapterObj[chapterName];
    console.log(chapter);
}