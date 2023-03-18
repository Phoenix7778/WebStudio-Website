filterSelection('all');
function filterSelection(e) {
  let card = document.getElementsByClassName('portfolio-list__item');
  if (e == 'all') e = '';
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < card.length; i++) {
    hideInactive(card[i], 'show');
    if (card[i].className.indexOf(e) > -1) showActive(card[i], 'show');
  }
}

// Show filtered elements
function showActive(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Hide elements that are not selected
function hideInactive(element, name) {
  let arr1 = element.className.split(' ');
  let arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current control button
const btnContainer = document.getElementById('myBtnContainer');
const btns = btnContainer.getElementsByClassName('button-list__filter-button');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
