const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');
const golfCardSkeleton = document.querySelector('#golf-card-skeleton');
const featuredGolfes = document.querySelector('#featured-golfs ul');
const body = document.querySelector('body');
const FEATURED_GOLFES = [
    {
      name: 'The Belfry',
      highlights: '72 and measuring 7255 yards February 19, 2017',
      description: 'The Belfry is an iconic venue located in Sutton Coldfield, North Warwickshire.',
      img: './media/g1.jpeg',
    },
    {
      name: 'Augusta National Golf Club',
      highlights: 'TB, A, N, April 08, 2018',
      description: 'Six times G1 winner. Total career earnings $3.400.000. The fans\' favorite to this year title.',
      img: './media/g2.jpeg',
    },
    {
      name: 'Golfasian Co',
      highlights: 'TB, DK B/, C, foaled March 01, 2018',
      description: 'Two times G1 winner. Total career earnings $613.000. The rookie of the year coming with great expectations.',
      img: './media/g3.jpeg',
    },
    {
      name: 'Vattanac Golf Resort(Cambodia)',
      highlights: 'TB, GR/RO, H, foaled January 15, 2016',
      description: 'Ten times G1 winner. Total career earnings $2.700.000. The most experience contender for this year\'s event.',
      img: './media/g4.jpeg',
    },
    {
      name: 'Sentosa Golf Club (Singapore)',
      highlights: 'TB, CH, C, foaled March 01, 2019',
      description: 'Three times G1 winner. Total career earnings $860.000. Coming from Argentina as a top golf players.',
      img: './media/g5.jpeg',
    },
    {
      name: 'Abu Dhabi Golf Club (UAE)',
      highlights: 'TB, DK AB/, C, foaled February 9, 2019',
      description: 'Three times G1 winner. Total career earnings $550.000. Son of the greatest Into Mischief, with a bright future.',
      img: './media/g6.jpeg',
    },
  ];

  const toggleMenu = () => {
    if (header.classList.length === 0) {
      header.classList.add('mobile-show');
      body.classList.add('lock-scroll');
    } else if (header.classList.contains('mobile-hidden')) {
      header.classList.add('mobile-show');
      body.classList.add('lock-scroll');
      header.classList.remove('mobile-hidden');
    } else {
      header.classList.remove('mobile-show');
      body.classList.remove('lock-scroll');
      header.classList.add('mobile-hidden');
    }
  };


if (golfCardSkeleton) {
    for (let i = 0; i < FEATURED_GOLFES.length; i += 1) {
      const card = golfCardSkeleton.cloneNode(true);
      card.querySelector('img').src = FEATURED_GOLFES[i].img;
      card.querySelector('img').alt = FEATURED_GOLFES[i].name;
      card.querySelector('h3').textContent = FEATURED_GOLFES[i].name;
      card.querySelector('h5').textContent = FEATURED_GOLFES[i].highlights;
      card.querySelector('h6').textContent = FEATURED_GOLFES[i].description;
      featuredGolfes.append(card);
    }
    golfCardSkeleton.remove();
  }
  
  menuBtn.onclick = toggleMenu;
  closeMenuBtn.onclick = toggleMenu;
  