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