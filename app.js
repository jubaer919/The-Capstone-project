const header = document.querySelector('.header');
const body = document.querySelector('body');
const speakerContainer = document.querySelector('.speaker-container');

// Set the screen width threshold
const MOBILE_WIDTH = 768;

function disableScroll() {
  body.style.overflow = 'hidden';
}

function enableScroll() {
  body.style.overflow = 'auto';
}

// Function to add or remove the "mobile" class based on the screen width
function setMobileClass() {
  if (window.innerWidth < MOBILE_WIDTH) {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      // Toggle scroll
      if (header.classList.contains('active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
  }
}
// Call the function on page load
setMobileClass();

const speakers = [
  {
    title: 'Yochai Benkler',
    des: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    img: './images/s1.svg',
    paragraph: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    title: 'SohYeong Noh',
    des: 'Director of Art Centre Nabi and a board member of CC Korea',
    img: './images/s2.svg',
    paragraph: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    title: 'Lila tretikov',
    des: 'Executive Director of the Wikimedia Foundation',
    img: './images/s3.svg',
    paragraph: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    title: 'Kilnam Chon',
    des: 'Executive Director of the Wikimedia Foundation',
    img: './images/s4.svg',
    paragraph: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    title: 'Julia Leda',
    des: 'President of Young Pirates of Europe',
    img: './images/s5.svg',
    paragraph: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    title: 'Ryan Merkley',
    des: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    img: './images/s6.svg',
    paragraph: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  // creating the speaker-img
  const speakerImg = document.createElement('img');
  speakerImg.classList.add('speaker-img');
  speakerImg.src = speakers[i].img;
  speakerImg.alt = speakers[i].title;
  speaker.appendChild(speakerImg);

  // creating the speaker-content
  const speakerContent = document.createElement('div');
  speakerContent.classList.add('speaker-content');
  speaker.appendChild(speakerContent);

  // creating the speaker-name
  const speakerName = document.createElement('h3');
  speakerName.classList.add('speaker-name');
  speakerName.innerText = speakers[i].title;
  speakerContent.appendChild(speakerName);

  // creating the speaker-des
  const speakerDes = document.createElement('p');
  speakerDes.classList.add('speaker-des');
  speakerDes.innerText = speakers[i].des;
  speakerContent.appendChild(speakerDes);

  // creating the speaker-dash
  const speakerDash = document.createElement('span');
  speakerDash.classList.add('speaker-dash');
  speakerContent.appendChild(speakerDash);

  // creating the speaker-paragraph
  const speakerParagraph = document.createElement('p');
  speakerParagraph.classList.add('speaker-paragraph');
  speakerParagraph.innerText = speakers[i].paragraph;
  speakerContent.appendChild(speakerParagraph);

  if (window.innerWidth < 768 && i > 1) {
    speaker.classList.add('invisible');
  }

  // add the speaker to the conatainer
  speakerContainer.appendChild(speaker);
}

// creating the button
const moreCta = document.createElement('a');
moreCta.classList.add('more-cta');
moreCta.innerText = 'More';
speakerContainer.appendChild(moreCta);

// creating icon
const downArrow = document.createElement('img');
downArrow.src = './images/arrow-down.svg';
downArrow.alt = 'down arrow icon';
downArrow.style.marginLeft = '1rem';
moreCta.appendChild(downArrow);
