//if someone taps div expand the box
var box = document.querySelector('.expandable-box-container');
if (box) {
  var list = document.querySelector('.box-list');
  var toggleWording = document.querySelector('.expand-minimize');
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
var box2 = document.querySelector('.expandable-box-container-2');
if (box2) {
  var list2 = document.querySelector('.box-list-2');
  var toggleWording2 = document.querySelector('.expand-minimize-2');
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
var showResume = function(e) {
  window.open("http://vanessa-martinez.com/pdfs/vmartinez-resume.pdf");
};

// MOBILE MENU
var menuIcon = document.querySelector(".material-icons");
var mobileMenu = document.querySelector(".mobile-menu");
var menuOptions = document.querySelectorAll(".mobile-menu a");

var toggleMenu = function() {
    if (mobileMenu.className == "mobile-menu hidden") {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
};
// when you click on an li, close the menu
var hideMenu = function() {
    mobileMenu.classList.add("hidden");
}

// EVENT LISTENERS

menuIcon.addEventListener('click', function(){
  toggleMenu();
});

for (const options of menuOptions) {
  options.addEventListener("click", function(event) {
    hideMenu();
  })
};