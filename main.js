//* 1.Creiamo il nostro array di 5 oggetti che rappresentano ciascun post.

//*2.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

//*3.Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

//1./2.
const posts = [
    {
        autorName: "Gigi D'Alessio",
        profileImg: 'https://picsum.photos/180',
        date: '2 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/500/350',
        likesCounter: '125',
    },
    {
        autorName: "Nino D'Angelo",
        profileImg: 'https://picsum.photos/190',
        date: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/400',
        likesCounter: '52',
    },
    {
        autorName: 'Nico Pandetta',
        profileImg: 'https://picsum.photos/210',
        date: '3 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/550/350',
        likesCounter: '36',
    },
    {
        autorName: 'LIBERATO',
        profileImg: 'https://picsum.photos/200',
        date: '8 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/300',
        likesCounter: '75',
    },
    {
        autorName: 'Peppe Sokx',
        profileImg: 'https://picsum.photos/220',
        date: '125 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '1',
    },
];

//3.

//*Ref
const postsContainer = document.getElementById('container');
const profileImg = document.querySelector('.profile-pic');
const postAutor = document.querySelector('.post-meta__author');
const postDate = document.querySelector('.post-meta__time');
const postText = document.querySelector('.post__text');
const postImg = document.querySelector('.post__image');
const postLikes = document.getElementById('like-counter-1');

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

        //Layout selected
        indexRef.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${arrayElement.profileImg}" alt="${arrayElement.autorName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${arrayElement.autorName}</div>
                        <div class="post-meta__time">${arrayElement.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${arrayElement.postText}</div>
            <div class="post__image">
                <img src="${arrayElement.imgPost}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${arrayElement.likesCounter}</b> persone
                    </div>
                </div>
            </div>
        </div>
        `;
    }
};