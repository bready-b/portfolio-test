// using arrays of objects

let reviews = [
  {
    id: 1,
    name: 'Tech guy',
    job: 'pro linux',
    img: './images/854.jpg',
    text: 'Very Good.',
  },
  {
    id: 2,
    name: 'kanye',
    job: 'Chocolate guy',
    img: './images/kanye.jpg',
    text: 'Nice',
  },
  {
    id: 3,
    name: 'Tupac',
    job: 'fornite guy',
    img: './images/cover2.jpg',
    text: 'Yes.',
  },
  {
    id: 4,
    name: 'Mr.James',
    job: 'CEO',
    img: './images/e1c.jpg',
    text: 'Yea.'
  },
];

// selecting DOM , select items
let img = document.getElementById('person-img');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let randomBtn = document.querySelector('.random-btn');

// Starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

});