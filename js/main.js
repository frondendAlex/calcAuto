'use strict'

const headerTopCitesText = document.querySelectorAll('.header__top-cites-text');
const headerTopCites = document.querySelectorAll('.header__top-cites-text');
const headerTopCitesSelectText = document.querySelectorAll('.header__top-cites-select-text');

// Search
const inputSearchIcon = document.querySelectorAll('.header__top-info-icon');
const headerTopFormWrap = document.querySelector('.header__top-form-wrap');
const headerTopFormItem = document.querySelector('.header__top-form-item');
const headerTopFormSearchInput = document.querySelector('.header__top-form-search');

// Выбор элемента автомобиля
const iconSvgElems = document.querySelectorAll('.element__icon');
const inputCheckElems = document.querySelectorAll('.element__label-input-fake');

// Доп. уровни
const choiceDifferencesText = document.querySelector('.choice__differences-text');
const choiceDifferencesWrap = document.querySelector('.choice__differences-wrap');

const introHeaderTextOpen = document.querySelector('.intro__header-text-open');

const headerBottomMenu = document.querySelector('.header__bottom');

const burgerMenu = document.querySelector('.burger__menu');

 // List Footer
 const footerInfoTitleMedia = document.querySelectorAll('.footer__info-title-media');
 const footerInfoContent = document.querySelectorAll('.footer__info-content');

// Form
const sectionHidden = document.querySelectorAll('.section-hidden');

//~~~~~~
let modalAutoList = document.querySelector('.yourcar__form-select-model');
let modalText = document.querySelector('.yourcar__form-select-model-text');
// ~~~~~


// Выбор города
headerTopCitesText.forEach(element => {
  element.addEventListener('click', () => {
    const selectCites = document.querySelectorAll('.header__top-cites-select');
    const arrowCites = document.querySelectorAll('.header__top-cites-icon');

    selectCites.forEach(element => {
      element.classList.toggle('active'); 
    });

    arrowCites.forEach(element => {
      element.classList.toggle('active'); 
    });
  })
});

// Запись в Локальное хранилище
headerTopCites.forEach(elem => {
  
  if (localStorage.getItem('cites')) {
  elem.textContent = localStorage.getItem('cites');
  }
})

headerTopCitesSelectText.forEach(element => {
  element.addEventListener('click', (e) => {
    let targetTextCites = e.target.textContent;

    const headerTopCitesSelect = document.querySelectorAll('.header__top-cites-select');
    const headerTopCitesIcon = document.querySelectorAll('.header__top-cites-icon');

    headerTopCitesText.forEach(element => {
      element.textContent = targetTextCites;
      localStorage.setItem('cites', targetTextCites);
    });

    headerTopCitesSelect.forEach(element => {
      element.classList.remove('active');
    });

    headerTopCitesIcon.forEach(element => {
      element.classList.remove('active');
    });
  })
})

// Показывать поиск
inputSearchIcon.forEach(element => {
  element.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    headerTopFormWrap.classList.toggle('active');
    headerTopFormItem.classList.toggle('active');
    headerTopFormSearchInput.classList.toggle('active');
    headerTopFormWrap.closest('.header__top-form').style.zIndex = 100;

    if (!e.target.classList.contains('active')) {
      headerTopFormSearchInput.value = '';
      headerTopFormWrap.closest('.header__top-form').style.zIndex = '';
    }

  })
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const model = [
  'Kia',
  'Mazda',
  'Chevrolet'
];


const yourcarFormSelectBtns = document.querySelectorAll('.yourcar__form-select-btn');
const yourcarFormSelectBtn = document.querySelector('.yourcar__form-select-btn');
const yourcarFormOptionAuto = document.querySelectorAll('.yourcar__form-option-auto');
const yourcarFormOptionText = document.querySelectorAll('.yourcar__form-option');
const yourcarFormSelectModelList = document.querySelector('.yourcar__form-select-model');

const yourcarTextRight = document.querySelectorAll('.yourcar__form-select-model-text');


// Выбор авто
  yourcarFormSelectBtns.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.target.nextElementSibling.classList.toggle('active');
    })
  });

yourcarFormOptionText.forEach(element => {

  element.addEventListener('click', (e) => {
    let tragetTitle = e.target.textContent;

    yourcarFormSelectBtn.textContent = tragetTitle;
    e.target.closest('.yourcar__form-select').classList.remove('active');

    for ( let object in model) {

      let list = `
        <li class="yourcar__form-option yourcar__form-select-model-text">${model[object]}</li>`;
        yourcarFormSelectModelList.insertAdjacentHTML('beforeend', list);

        sectionHidden.forEach(elem => {
          elem.classList.add('active');
        })
        
        document.querySelector('.form').style.height = '';
    }
  })
})

  yourcarFormSelectModelList.addEventListener('click', (e) => {
    let titleRight = e.target.textContent;
    let textSelect = document.querySelector('.yourcar__form-select-btn-right');
    textSelect.textContent = titleRight;
    yourcarFormSelectModelList.classList.remove('active');
  })

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!









// Выбор элемента на авто по чекбоксу
  for (let i = 0; i < inputCheckElems.length; i++) {
    inputCheckElems[i].addEventListener('click', (e) => {
      let targetInput = e.target.previousElementSibling.dataset.auto;
      for (let y = 0; y < iconSvgElems.length; y++) {
        let targetIcon = iconSvgElems[y].dataset.detal;
        if (targetInput === targetIcon) {
          iconSvgElems[y].classList.toggle('active');
        }
      }
    })
  }
  // Выбор элемента на авто по иконке
  for (let i = 0; i < iconSvgElems.length; i++) {
    iconSvgElems[i].addEventListener('click', (e) => {
      let targetIconSvgAuto = e.target.dataset.detal;
      for (let y = 0; y < inputCheckElems.length; y++) {
        let input = inputCheckElems[y].previousElementSibling.dataset.auto;
        let targetCheck = inputCheckElems[y].previousElementSibling;
        if (targetIconSvgAuto === input) {
          targetCheck.classList.toggle('active');
          e.target.classList.toggle('active');
        }
      }
    })
  }

  // Переключение радио кнопок Комфорт, Премиум, Экстра
  const radioBtnFake = document.querySelectorAll('.choice__label-input-fake');
  const choinceColumn = document.querySelectorAll('.choice__column');

  radioBtnFake.forEach(element => {
    element.addEventListener('click', (e) => {
      let targetRadioInput = e.target.previousElementSibling.value;

      choinceColumn.forEach(item => {
        let targetColumn = item.dataset.column;
        if (targetRadioInput === targetColumn) {
          item.classList.add('active');
          item.querySelector(".choice__apply").classList.add('active');
          document.querySelector('.choice__hit').classList.add('active');
        } else {
          item.classList.remove('active');
          item.querySelector(".choice__apply").classList.remove('active');
          document.querySelector('.choice__hit').classList.remove('active');
        }

      });
    })
  });

  // Доп. уровни
  choiceDifferencesText.addEventListener('click', (e) => {
    choiceDifferencesWrap.classList.toggle('active');
    e.target.classList.toggle('active');
  });

  // Дополнительные материалы
  const priceContentInfoBtn = document.querySelector('.price__content-info');
  const priceContentWrapHidden = document.querySelectorAll('.price__content-wrap-hidden');
  
  priceContentInfoBtn.addEventListener('click', (e) => {
    const targetIconSvg = e.target.nextElementSibling;

    targetIconSvg.classList.toggle('active');

    priceContentWrapHidden.forEach(element => {
      element.classList.toggle('active');
    });
  })

  // Открытие текста в Intro
  introHeaderTextOpen.addEventListener('click', (e) => {
    const introHeaderText = document.querySelector('.intro__header-text');
    e.target.classList.add('active');
    introHeaderText.classList.add('active');
  })

  // Menu 768px
  window.addEventListener('resize', function() {
  
    if (window.innerWidth < 768) {
      headerBottomMenu.classList.add('header__bottom-media');
    } else {
      headerBottomMenu.classList.remove('header__bottom-media');
    }

  })

  // Burger Menu
  burgerMenu.addEventListener('click', (e) => {
    const tragetBurger = e.target.closest('.burger');
    tragetBurger.classList.toggle('active');
    headerBottomMenu.classList.toggle('active');
    document.querySelector('body').style.overflowY = 'hidden';

    if (tragetBurger.classList.contains('active')) {
      document.querySelector('body').style.overflowY = 'hidden';
    } else {
      document.querySelector('body').style.overflowY = '';
    }
  })

  // Spoiler footer media
  for (let i = 0; i < footerInfoTitleMedia.length; i++) {
    const element = footerInfoTitleMedia[i];
    element.addEventListener('click', function(e) {
      const content = e.target.nextElementSibling;

      for (let y = 0; y < footerInfoTitleMedia.length; y++) {
        const element = footerInfoTitleMedia[y];

        element.classList.remove('active');

        for (let j = 0; j < footerInfoContent.length; j++) {
          const element = footerInfoContent[j];
          element.classList.remove('active'); 
        }
      }

      content.classList.add('active');
      e.target.classList.add('active');
    })
  }

  // Model
  const modelAuto = document.querySelector('.model');

  setTimeout(() => {
    modelAuto.classList.add('active');
  }, 3000);

  modelAuto.addEventListener('click', function(e) {
    const target = e.target;
    if (target.closest('.model__overlow') && !target.closest('.model__wrap')) {
      this.classList.remove('active');
    }
    
    if (target.closest('.model__btn')) {
      this.classList.remove('active');
    }

  })