//* 1.Creiamo il nostro array di 5 oggetti che rappresentano ciascun post.

//*2.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

//*3.Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

//1./2.
const posts = [
    {
        autorName: "Gigi D'Alessio",
        profileImg: 'https://picsum.photos/200',
        date: '2 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '125',
    },
    {
        autorName: "Nino D'Angelo",
        profileImg: 'https://picsum.photos/200',
        date: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '52',
    },
    {
        autorName: 'Nico Pandetta',
        profileImg: 'https://picsum.photos/200',
        date: '3 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '36',
    },
    {
        autorName: 'LIBERATO',
        profileImg: 'https://picsum.photos/200',
        date: '8 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/600/350',
        likesCounter: '75',
    },
    {
        autorName: 'Peppe Sokx',
        profileImg: 'https://picsum.photos/200',
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
