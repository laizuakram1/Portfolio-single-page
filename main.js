
var typed = new Typed('#tittle-typing', {
    strings: ['Web Developer', 'Content-creator', 'Curious Learner', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    smartBackspace: true,
    loop: true,
  });



  // banner type js 
  let tabs = document.querySelectorAll('.tab_btn');
        let all_content = document.querySelectorAll('.content');

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click',() =>{
                tabs.forEach((tab) =>{tab.classList.remove('active')});
                tab.classList.add('active');

                all_content.forEach((content) =>{content.classList.remove('active')});
                all_content[index].classList.add('active');
            })

        })


        // swipper js for testmonial slide 
        const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();


    // navbar toggle
    let toggleList = document.getElementById('toggle-list');
    let toggleBtn = document.getElementById('toggle-btn');
    
    

    function showNav(){
      toggleList.classList.toggle('toggle-height');

    }

   