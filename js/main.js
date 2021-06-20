
document.addEventListener("DOMContentLoaded", () => {

  // ======== Slider with one handle
  
  const priceSlider = document.getElementById('r-slider');

  noUiSlider.create(priceSlider, {
      start: [30, 150],
      tooltips: false,
      connect: true,
      padding: 6,
      range: {
          'min': 0,
          'max': 200
      },
      // pips: {
      //     mode: 'values',
      //     values: [50, 100, 150],
      //     density: 4
      // }
  });

  priceSlider.noUiSlider.on('change', (values, handle) => {
      goSearch();
  });

  // ======== Slider with two handles
  
  const discountSlider = document.getElementById('m-slider');

  noUiSlider.create(discountSlider, {
      start: 50,
      tooltips: true,
      connect: [true, false],
      step: 1,
      range: {
          'min': 0,
          'max': 100
      },
      // format: {
      //     to: function (value) {
      //         return parseInt(value);
      //     },
      //     from: function (value) {
      //         return parseInt(value);
      //     }
      // }
  });

  discountSlider.noUiSlider.on('change', (values, handle) => {
      goSearch();
  });

  // ======== Search filters
  
  function goSearch() {
      let winHref = window.location.href.split('?')[0];
      winHref += `?pricerange=${priceSlider.noUiSlider.get()}`;
      winHref += `&mindiscount=${discountSlider.noUiSlider.get()}`;
      window.location.href = winHref;
  }

  // ======== Slider reset
  
  // const resetButton = document.getElementById('reset');
  // resetButton.onclick = (e) => {
  //     priceSlider.noUiSlider.reset();
  //     discountSlider.noUiSlider.reset();
  // };

  // ======== Slider set

 
  const params = new URLSearchParams(window.location.search);
  const minDiscount = params.get("mindiscount");
  const priceRange = params.get("pricerange");
 

  if (minDiscount) {
      discountSlider.noUiSlider.set(parseInt(minDiscount));
  }
  if (priceRange) {
      priceSlider.noUiSlider.set(priceRange.split(','));
  }

});


// 3-d slider

(function () {
  'use strict';

  var init = function () {

      var slider2 = new rSlider({
          target: '#slider2',
          values: [0, 1, 2, 3, 4, 5, 6, '7', 8],
          range: false,
          set: [5],
          tooltip: false,
          onChange: function (vals) {
              console.log(vals);
          }
      });

      var slider3 = new rSlider({
          target: '#slider3',
          values: {
              min: 0,
              max: 100
          },
          step: 10,
          range: true,
          set: [10, 40],
          scale: true,
          labels: false,
          onChange: function (vals) {
              console.log(vals);
          }
      });

      var slider = new rSlider({
          target: '#slider',
          values: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
          range: true,
          set: [2010, 2013],
          onChange: function (vals) {
              console.log(vals);
          }
      });

      var mySlider = new rSlider({
          target: '#sampleSlider',
          values: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
          range: true,
          tooltip: true,
          scale: true,
          labels: true,
          set: [2010, 2013]
      });
  };
  window.onload = init;
})();

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