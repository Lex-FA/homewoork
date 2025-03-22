(function () {

   // бургер

   document.addEventListener('click', burgerInit)

   function burgerInit(e) {
      const burgerIcon = e.target.closest('.burger-icon')
      const burgerNavLink = e.target.closest('.nav__link')

      if (!burgerIcon && !burgerNavLink) return
      if (document.documentElement.clientWidth > 900) return
      if (!document.body.classList.contains('body--opened-menu')) {
         document.body.classList.add('body--opened-menu')
      } else {
         document.body.classList.remove('body--opened-menu')
      }
   }

   // Модалка

   const modal = document.querySelector('.modal')
   const modalButton = document.querySelector('.about__img-button')

   modalButton.addEventListener('click', openModal)
   modal.addEventListener('click', closeModal)

   function openModal(e) {
      e.preventDefault()
      document.body.classList.toggle('body--opened-modal')
   }

   function closeModal(e) {
      e.preventDefault()

      const target = e.target

      if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
         document.body.classList.remove('body--opened-modal')
      }

   }

   // Табы

   const tabControls = document.querySelector('.tab-controls')

   tabControls.addEventListener('click', toggleTab)

   function toggleTab(e) {

      const tabControl = e.target.closest('.tab-controls__link')

      if (!tabControl) return
      e.preventDefault()
      if (tabControl.classList.contains('tab-controls__link--active')) return

      const tabContentID = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentID)
      const activeControl = document.querySelector('.tab-controls__link--active')
      const activeContent = document.querySelector('.tab-content--show')

      activeContent.classList.remove('tab-content--show')
      activeControl.classList.remove('tab-controls__link--active')

      tabContent.classList.add('tab-content--show')
      tabControl.classList.add('tab-controls__link--active')

   }

   // Аккордеон

   const accordeonLists = document.querySelectorAll('.accordeon-list');

   accordeonLists.forEach(el => {

      el.addEventListener('click', (e) => {

         const accordeonList = e.currentTarget
         const accordeonOpenedItem = accordeonList.querySelector('.accordeon-list__item--opened')
         const accordeonOpenedContent = accordeonList.querySelector('.accordeon-list__item--opened .accordeon-list__content')

         const accordeonControl = e.target.closest('.accordeon-list__control');
         if (!accordeonControl) return
         const accordeonItem = accordeonControl.parentElement;
         const accordeonContent = accordeonControl.nextElementSibling;

         if (accordeonOpenedItem && accordeonItem != accordeonOpenedItem) {
            accordeonOpenedItem.classList.remove('accordeon-list__item--opened');
            accordeonOpenedContent.style.maxHeight = null;
         }
         accordeonItem.classList.toggle('accordeon-list__item--opened');

         if (accordeonItem.classList.contains('accordeon-list__item--opened')) {
            accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
         } else {
            accordeonContent.style.maxHeight = null;
         }

      });

   });

   // Слайдер геллерея

   new Swiper('.gallery__slider', {

      spaceBetween: 15,
      slidesPerView: 1.5,

      pagination: {
         el: '.gallery__pagination',
         type: 'fraction',
      },

      navigation: {
         nextEl: '.gallery__next',
         prevEl: '.gallery__prev',
      },

      breakpoints: {
         601: {
            slidesPerView: 3,
         },
         801: {
            spaceBetween: 32,
         },
         1101: {
            slidesPerView: 4,
         }
      }
   });

   // Слайдер отзывы

   new Swiper('.testimonials__slider', {

      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: true,


      navigation: {
         nextEl: '.testimonials__next',
         prevEl: '.testimonials__prev',
      },

      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },

      breakpoints: {
         901: {
            slidesPerView: 1.5,
         },
         1201: {
            slidesPerView: 2.1,
         }
      }
   });

   // Маска для телефона 

const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telInputs)


})()