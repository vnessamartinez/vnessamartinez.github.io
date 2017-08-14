var item = document.getElementsByClassName("enlarge");
var close = document.getElementsByClassName("close");
var lightbox = document.getElementsByClassName("lightbox");
var portfolioItem = document.getElementsByClassName("portfolio-item");
var resumeButton = document.getElementsByClassName("resume");

var menuIcon = document.getElementsByClassName("material-icons");
var mobileMenu = document.getElementsByClassName("mobile-menu");

var allTopics = document.getElementsByTagName("li");
var allSections = document.querySelectorAll("[section-type]");

var displayItem = function(e) {

for (var i=0; i < lightbox.length; i++) {  
  lightbox[i].style.display = "block";
};

var imageId = this.getAttribute("element-id");
var imageFile = "./imgs/" + imageId + ".jpg";


for (var i=0; i < portfolioItem.length; i++) {  
  portfolioItem[i].setAttribute("src", imageFile);
};

};

var closeWindow = function(e) {

for (var i=0; i<lightbox.length; i++) {  
  lightbox[i].style.display = "none";
};
};

var showResume = function(e) {
  window.open("http://www.vanessa-martinez.com/wp-content/uploads/2015/04/vmartinez-resume.pdf");
};

var showSection = function(e) {
  var topicClicked = this.getAttribute("topic-type");
  var allTopics = document.querySelectorAll("[topic-type]");


  for (var i=0; i < allTopics.length ; i++) {
    allTopics[i].classList.remove("active");
  };

  this.classList.add("active");

  if (topicClicked == "design") {
    showDesign();
    hideMenu();
  } else if (topicClicked == "writing") {
    showWriting();
    hideMenu();
  } else if (topicClicked == "photography") {
    showPhotography();
    hideMenu();
  } else if (topicClicked == "home") {
    showAll();
    hideMenu();
  } else {
    showMultimedia();
    hideMenu();
  };
};

var showAll = function() {
  for (var i=0; i < allSections.length; i++) {
      allSections[i].style.display = "block";
  };
};

var showDesign = function() {
  for (var i=0; i < allSections.length; i++) {
    var sectionAttribute = allSections[i].getAttribute("section-type");
    if (sectionAttribute == "design") {
      allSections[i].style.display = "block";
    } else {
      allSections[i].style.display = "none";
    };
  };
};

var showWriting = function() {
  for (var i=0; i < allSections.length; i++) {
    var sectionAttribute = allSections[i].getAttribute("section-type");
    if (sectionAttribute == "writing") {
      allSections[i].style.display = "block";
    } else {
      allSections[i].style.display = "none";
    };
  };
};

var showPhotography = function() {
  for (var i=0; i < allSections.length; i++) {
    var sectionAttribute = allSections[i].getAttribute("section-type");
    if (sectionAttribute == "photography") {
      allSections[i].style.display = "block";
    } else {
      allSections[i].style.display = "none";
    };
  };
};

var showMultimedia = function() {
  for (var i=0; i < allSections.length; i++) {
    var sectionAttribute = allSections[i].getAttribute("section-type");
    if (sectionAttribute == "multimedia") {
      allSections[i].style.display = "block";
    } else {
      allSections[i].style.display = "none";
    };
  };
};

var toggleMenu = function() {

  for (var i=0; i < mobileMenu.length ; i++) {

    if (mobileMenu[i].className == "mobile-menu hidden") {
      mobileMenu[i].classList.remove("hidden");
    } else {
      mobileMenu[i].classList.add("hidden");
    }
  }

};

var hideMenu = function() {
    for (var i=0; i < mobileMenu.length ; i++) {
    mobileMenu[i].classList.add("hidden");
  };  
}


// EVENT LISTENERS

for (var i=0; i < mobileMenu.length; i++) {
  mobileMenu[i].addEventListener("click", null);
}

for (var i=0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", toggleMenu);
}

for (var i=0; i < allTopics.length; i++) {
  allTopics[i].addEventListener("click", showSection);
}


for (var i=0; i < resumeButton.length; i++) {
  resumeButton[i].addEventListener("click", showResume);
}

for (var i=0; i < close.length; i++) {
  close[i].addEventListener("click", closeWindow);
}

for (var i=0; i < item.length; i++) {
  item[i].addEventListener("click", displayItem);
}