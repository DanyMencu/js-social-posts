//* 1.Creiamo il nostro array di 5 oggetti che rappresentano ciascun post.

//*2.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

//*3.Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

//1./2.
const posts = [
    {
        autor: {
            name: "Gigi D'Alessio",
            avatar: 'https://picsum.photos/180',
        },
        date: '2 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/500/350',
        likesCounter: '125',
    },
    {
        autor: {
            name: "Nino D'Angelo",
            avatar: 'https://picsum.photos/190',
        },
        date: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/400',
        likesCounter: '52',
    },
    {
        autor: {
            name: 'Nico Pandetta',
            avatar: 'https://picsum.photos/210',
        },
        date: '3 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/550/350',
        likesCounter: '36',
    },
    {
        autor: {
            name: 'LIBERATO',
            avatar: 'https://picsum.photos/200',
        },
        date: '8 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/300',
        likesCounter: '75',
    },
    {
        autor: {
            name: 'Peppe Sokx',
            avatar: 'https://picsum.photos/220',
        },
        date: '125 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '1',
    },
];

//3.

//*Ref
const postsContainer = document.getElementById('container');

createLayout(posts, postsContainer);

/****************************************
**FUNCTIONS
******************************************/

// Gen layout with array elements

function createLayout (array, indexRef) {
    //Index cleaning
    indexRef.innerHTML = '';

    //Loop to create a single post layout
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];

        //Destrocturing
        const {autor, date, postText, imgPost, likesCounter} = arrayElement;

        //Layout selected
        indexRef.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${autor.avatar}" alt="${autor.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${autor.name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${imgPost}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter}</b> persone
                    </div>
                </div>
            </div>
        </div>
        `;
    }
};