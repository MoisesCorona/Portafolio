/* ================ Mostrar menu =============== */

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


/* ======================== Mostar Menu  ============================= */
if(navToggle){
    navToggle.addEventListener('click', () => {
       navMenu.classList.add('show-menu')
  })
}

/* ==== Menu hidden =========== */

if(navClose) {
    navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu')
    }) 
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav--link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*             ========================== Send  E-mail =======================        */


const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){

  
    //Agregar y quitar color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    //show up message
       contactMessage.textContent = 'Write all the input fields ⚠️'
   }else{

    // Service ID - TemplateID - #form - publicKey
      emailjs.sendForm('service_60jgrmu','template_bfjfc1r','#contact-form', 'SgdkE9xJms3IYxJ2Y')
           .then(() =>{

              contactMessage.classList.add('color-blue')
              contactMessage.textContent = 'Message has been sent 🙌'

              setTimeout(() =>{
                 contactMessage.textContent = '' 
              }, 5000)
          }, (error) => {
              alert('OOOPS Something has failed...', error)
          })

       contactName.value = ''
       contactEmail.value = ''
       contactProject .value = ''
    }
}
contactForm.addEventListener('submit', sendEmail);


/*   ========================= Scroll Sections Activate link ===================================== */

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*      ==========================   Mostar Scroll up  ==============================     */

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






/*                               Dark Light Theme                        */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/* ================================ Change Background Header ======================== */

const scrollHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/*        Scroll Reveal Description   */

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2800,
  delay: 500,
  // reset: true /* Animations repeat */
})

sr.reveal(`.home--data, .home--title, .home--social, projects--container, .testimonial--container, .footer--container, .projects--container`)
sr.reveal(`.home--info div`, {delay: 700, origin: 'bottom', interval: 100})
sr.reveal(`.skills--content:nth-child(1), .contact--content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills--content:nth-child(2), .contact--content:nth-child(2)` , {origin: 'right'})
sr.reveal(`.qualification--content, .services--card`, {interval: 200})





/*swiper*/ /* el maestro Andre Yorchs Jardine Romero */                             

const swiper = new Swiper(".projects--container",{
   loop: true,
   spaceBetween: 24,
    centeredSlides: true,
    slidesPerView: 1.3, // Muestra una parte de los lados
    spaceBetween: 30, // Separación entre slides
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
   
   navigation:{
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   mousewheel: true,
   keyboard: true,

   breakpoints: {
      1200: {
        slidesPerView: 1.7, // Más espacio en laptops
        spaceBetween: 50,
      },
    },
});