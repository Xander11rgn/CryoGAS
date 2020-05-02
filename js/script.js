new WOW().init();

$(document).ready(function () {
  $('.slider').slick();
});

// logo anim
anime({
  targets: '.first-screen-logo',
  opacity: [0, 1],
  duration: 15000
});

// navigation anim
anime({
  targets: '.first-screen-nav .nav-item',
  translateY: [-100, 0],
  delay: anime.stagger(100),
  duration: 1300
});

// contacts anim
anime({
  targets: '.first-screen-contacts',
  scale: [0, 1],
  duration: 2000
});

// left button anim
document.querySelector('.button-left').addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.1,
      duration: 0
    });
  }
);

document.querySelector('.button-left').addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      duration: 0
    });
  }
);

document.querySelector('.button-left').addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.1, 0.3],
      duration: 80,
      direction: 'alternate',
      easing: 'easeOutElastic'
    });
  }
);

// right button anim
document.querySelector('.button-right').addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.1,
      duration: 0
    });
  }
);


document.querySelector('.button-right').addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      duration: 0
    });
  }
);

document.querySelector('.button-right').addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.1, 0.3],
      duration: 80,
      direction: 'alternate',
      easing: 'linear'
    });
  }
);



// document.querySelector('.button-left').addEventListener('click',
//   function () {
//     anime({
//       targets: '.wow-text',
//       translateX: {
//         value: '-2000px',
//         duration: 9000,
//         easing: 'easeOutCirc'
//       },
//       opacity: {
//         value: [1, 0],
//         duration: 1500,
//         easing: 'easeOutCirc'
//       },
      
//     });
//     anime({
//       targets: '.right .picture',
//       delay: 100,
//       translateX: {
//         value: '-3000px',
//         duration: 12000,
//         easing: 'easeOutCirc'
//       },
//       opacity: {
//         value: [1, 0],
//         duration: 2000,
//         easing: 'easeOutCirc'
//       },
//     });
//   }
// );


// document.querySelector('.button-right').addEventListener('click',
//   function () {
//     anime({
//       targets: '.wow-text',
//       delay: 100,
//       translateX: {
//         value: '3000px',
//         duration: 9000,
//         easing: 'easeOutSine'
//       },
//       opacity: {
//         value: [1, 0],
//         duration: 1500,
//         easing: 'easeOutSine'
//       },
//     });
//     anime({
//       targets: '.right .picture',
      
//       translateX: {
//         value: '2000px',
//         duration: 12000,
//         easing: 'easeOutSine'
//       },
//       opacity: {
//         value: [1, 0],
//         duration: 2000,
//         easing: 'easeOutSine'
//       },
//       // complete: function(){
//       //   document.querySelector('.right .picture').css({'display':'none'});
//       //   document.querySelector('.wow-text').css({'display':'none'});
//       // }
//     });
//   }
// );




// more-button anim
var moreButtons = document.querySelectorAll('.more-button');
moreButtons.forEach(el => el.addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.1,
      duration: 800
    });
  }
));


moreButtons.forEach(el => el.addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      duration: 800
    });
  }
));


moreButtons.forEach(el => el.addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.1, 0.9],
      duration: 120,
      direction: 'alternate',
      easing: 'linear'
    });
  }
));


// all-news-button anim
document.querySelector('.all-news-button').addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.1,
      duration: 800
    });
  }
);


document.querySelector('.all-news-button').addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      duration: 800
    });
  }
);

document.querySelector('.all-news-button').addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.1, 0.9],
      duration: 120,
      direction: 'alternate',
      easing: 'linear'
    });
  }
);