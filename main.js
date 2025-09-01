//if someone taps div expand the box
let box = document.querySelector('.expandable-box-container');
if (box) {
  let list = document.querySelector('.box-list');
  let toggleWording = document.querySelector('.expand-minimize');
  box.addEventListener('click', expandBox, false);
  // box.addEventListener('touchstart', expandBox, false);

  function expandBox() {
    list.classList.toggle('show');
    if (toggleWording.innerHTML === '+') {
      toggleWording.innerHTML = '-';
    } else {
      toggleWording.innerHTML = '+';
    }
  }
}

//if someone taps div expand the box - photo
let box2 = document.querySelector('.expandable-box-container-2');
if (box2) {
  let list2 = document.querySelector('.box-list-2');
  let toggleWording2 = document.querySelector('.expand-minimize-2');
  box2.addEventListener('click', expandBox2, false);
  // // box.addEventListener('touchstart', expandBox, false);

  function expandBox2() {
    list2.classList.toggle('show-2');
    if (toggleWording2.innerHTML === '+') {
      toggleWording2.innerHTML = '-';
    } else {
      toggleWording2.innerHTML = '+';
    }
  }
}

// RESUME BUTTON
let showResume = function(e) {
  window.open("http://vanessa-martinez.com/pdfs/vmartinez-resume.pdf");
};

// MOBILE MENU
let menuIcon = document.querySelector(".material-icons");
let mobileMenu = document.querySelector(".desktop-ul");

let menuOptions = mobileMenu.querySelectorAll("a");


let updateAriaPressed = function(menuIcon) {
  console.log(menuIcon);
  let currentState = menuIcon.getAttribute('aria-pressed');
  return (currentState == 'false') ? menuIcon.setAttribute('aria-pressed', 'true') : menuIcon.setAttribute('aria-pressed', 'false');
}

let toggleMenu = function() {
  mobileMenu.classList.toggle("active");
  updateAriaPressed(menuIcon);
};
// when you click on an li, close the menu
let hideMenu = function() {
    mobileMenu.classList.remove("active");
    updateAriaPressed(menuIcon);
}

// EVENT LISTENERS

menuIcon.addEventListener('click', function(){
  toggleMenu();
});
menuIcon.addEventListener('keydown', function(e) {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    toggleMenu();
  }
});


for (const options of menuOptions) {
  options.addEventListener("click", function(event) {
    hideMenu();
  });
  options.addEventListener("keydown", function(e) {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      hideMenu();
    };
  });
};