// V-calender

// import Vue from 'vue';
// import { createApp } from 'vue';
// import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
// Vue.use(VCalendar, {
//   componentPrefix: 'vc',
// });

// new Vue({
//     el: '#app',
//     data: {
//       selectedDate: null,
//     }
//   });



// Custom slider
// width 1 handle


// sliders

var sliders = document.getElementsByClassName('sliders');

for ( var i = 0; i < sliders.length; i++ ) {

    noUiSlider.create(sliders[i], {
        start: 100,
        step: 1,
        tooltips: true,
        connect: [true, false],
        padding: 6,
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 200
        },
    });

    sliders[i].noUiSlider.on('slide', addValues);
}

function addValues(){
    var allValues = [];

    for (var i = 0; i < sliders.length; i++) {
        allValues.push(sliders[i].noUiSlider.get());
    };
    
    for (var j = 0; j < allValues.length; j++) {
    document.getElementsByClassName('slider-value')[j].innerHTML = allValues[j];
    }

}

// width 2 handles

var slidersOne = document.getElementsByClassName('sliders-1');

for ( var i = 0; i < slidersOne.length; i++ ) {

    noUiSlider.create(slidersOne[i], {
        start: [30, 100],
        step: 1,
        tooltips: false,
        connect: true,
        padding: 6,
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 200
        },
    });

    slidersOne[i].noUiSlider.on('slide', addValues);
}

function addValues(){
    var allValues = [];

    for (var i = 0; i < slidersOne.length; i++) {
        allValues.push(slidersOne[i].noUiSlider.get());
    };
    
    for (var j = 0; j < allValues.length; j++) {
    document.getElementsByClassName('slider-value')[j].innerHTML = allValues[j];
    }

}


// End of custom slider




let select = function () {
  selectHeader = document.querySelectorAll('.select__header');
  selectItem = document.querySelectorAll('.select__item');
  selectHeader.forEach(item=> {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item=> {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle () {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoose () {
    text = this.innerText;
    select = this.closest('.select');
    changeText = select.querySelector('.select__change');
    changeText.innerText = text; 
    changeText.classList.remove('select__start');
    select.classList.remove('is-active');
    
  }

};


select();


// tabs

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');

for (const tab of tabsHandlerElems) {
  tab.addEventListener('click', () => {
    var container = tab.parentElement.parentElement;
    var contauinerItems = container.querySelectorAll('[data-tabs-handler]');
    contauinerItems.forEach(item => {
      if (tab === item) {
        item.classList.add('current__item-active');
      } else {
        item.classList.remove('current__item-active');
      }
    });

  });
}

// Step by Step Navigation

const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelectorAll('.multisteps-form__progress'),
};


//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  var progressBar = elem.parentElement;
  var progressItems = progressBar.querySelectorAll('.multisteps-form__progress-btn');
  return Array.from(progressItems).indexOf(elem);
};


//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.forEach(elem => {
  elem.addEventListener('click', e => {

    //check if click target is a step button
    const eventTarget = e.target;
  
    
  
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }


    var progressItems = elem.querySelectorAll('.multisteps-form__progress-btn');
    
  
    //get active button step number
    const activeStep = getActiveStep(eventTarget);

    //set all steps before clicked (and clicked too) to active
  
    removeClasses(progressItems, 'js-active');
    removeClasses(progressItems, 'js-next');

    //set picked items to active
    progressItems.forEach((elem, index) => {
  
      if (index <= activeStep) {
        elem.classList.add('js-active');
      }
        
    });
    var nextIndex = activeStep + 1;
    if (nextIndex < progressItems.length) {
      progressItems[nextIndex].classList.add('js-next')
    }
  });
}); 
// End of step by step Navigation

// Pagination

// const pageLinkElems = document.querySelectorAll('[data-page-link]');
// console.log('pageLinkElems: ', pageLinkElems);

// for (const tab of pageLinkElems) {
//   console.log('tab: ', tab);
//   tab.addEventListener('click', () => {
//     console.log('tab: ', tab);
//     var container = tab.parentElement.parentElement;
//     var contauinerItems = container.querySelectorAll('[data-page-link]');
//     contauinerItems.forEach(item => {
//       if (tab === item) {
//         item.classList.add('page-link-active');
//       } else {
//         item.classList.remove('page-link-active');
//       }
//     });

//   });
// }


// Alert

const alertElems = document.querySelectorAll('.alert__close');

alertElems.forEach(item => {
  item.addEventListener('click', () => {
    const wrapper = item.parentElement;
    wrapper.classList.toggle('hidden');
    wrapper.classList.remove('alert__item');
    wrapper.classList.remove('modal__wrapper');
  });
});

// Modal

const modal = document.querySelector('.modal');


modal.addEventListener('click', (event) => {
  const target = event.target;
  const modalOpen = modal.querySelector('.modal__window');
  if(target.classList.contains('overlay') || target.classList.contains('modal__close')  ) {
    modalOpen.classList.toggle('hidden');
    modalOpen.classList.toggle('modal__wrapper');
  };
  
});


// Progress circle

const circle = document.querySelector('.progress-ring');
const radius = circle.r.baseVal.value;
const circleLine = 2 * Math.PI * radius;
const input = document.querySelector('.percent');

const start = setProgress(input.value);

input.addEventListener('change', () => {
  setProgress(input.value);
});

circle.style.strokeDasharray = `${circleLine} ${circleLine}`;
circle.style.strokeDashoffset = `${circleLine - start / 100 * circleLine}`;

function setProgress(percent) {
  const offset = circleLine - percent / 100 * circleLine;
  circle.style.strokeDashoffset = offset;
}

// Progress bar

const progressPercent = document.querySelector('.progress-percent');
var progressValue = document.querySelector('.progress-value');

progressPercent.addEventListener('change', () => {
  const newValue = progressPercent.value;
  progressValue.value = newValue;
});