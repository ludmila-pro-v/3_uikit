
// Custom slider
// width 1 handle

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