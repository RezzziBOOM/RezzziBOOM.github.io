document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbarr = document.querySelector('.navbar');
  
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('X');
      navbarr.classList.toggle('active');
    };
  
    /*========== Toggle icon navbar ===========*/
  
    /*========== Navigasi ===========*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
  
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
          });
        }
      });
  
      /*============ sticky navbar =============*/
      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };
  
    /*========== remove toogle icon and navbar when click navar link===========*/




    menuIcon.classList.remove('X');
    navbarr.classList.remove('active');
  


    // Inisialisasi ikon Feather
    feather.replace();



  });
  ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200 
  });
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });



/*========== Tulisan Gerak gerak===========*/
const typed = new Typed('.multiple-text', {
  strings: [ 'Graphic Designer' , 'Social Media Specialist','Cyber Security' , 'Front-End Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*========== Read More ===========*/
document.getElementById("read-more-btn").addEventListener("click", function(event) {
  event.preventDefault();
  toggleMoreText();
});

function toggleMoreText() {
  var moreText = document.getElementById("more-text");
  var btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.textContent = "Tutup";
  } else {
      moreText.style.display = "none";
      btn.textContent = "Baca Selengkapnya";
  }
}




/* ========== Read More Cyber Security ========== */
document.getElementById("read-more-btn-cyber").addEventListener("click", function(event) {
  event.preventDefault();
  toggleMoreTextCyber();
});

function toggleMoreTextCyber() {
  var moreText = document.getElementById("more-text-cyber");
  var btn = document.getElementById("read-more-btn-cyber");

  if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.textContent = "Tutup";
  } else {
      moreText.style.display = "none";
      btn.textContent = "Baca Selengkapnya";
  }
}


/* ========== Read More Graphic Design ========== */
document.getElementById("read-more-btn-design").addEventListener("click", function(event) {
  event.preventDefault();
  toggleMoreTextDesign();
});

function toggleMoreTextDesign() {
  var moreText = document.getElementById("more-text-design");
  var btn = document.getElementById("read-more-btn-design");

  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      btn.textContent = "Tutup";
  } else {
      moreText.style.display = "none";
      btn.textContent = "Baca Selengkapnya";
  }
}



/* ========== Read More Web Developer ========== */
document.getElementById("read-more-btn-web").addEventListener("click", function(event) {
  event.preventDefault();
  toggleMoreTextWeb();
});

function toggleMoreTextWeb() {
  var moreText = document.getElementById("more-text-web");
  var btn = document.getElementById("read-more-btn-web");

  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      btn.textContent = "Tutup";
  } else {
      moreText.style.display = "none";
      btn.textContent = "Baca Selengkapnya";
  }
}










