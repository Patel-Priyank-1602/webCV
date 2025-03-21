document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
    const body = document.body
  
    // Create menu overlay
    const menuOverlay = document.createElement("div")
    menuOverlay.classList.add("menu-overlay")
    document.body.appendChild(menuOverlay)
  
    // Function to toggle navigation
    const toggleNav = () => {
      // Toggle navigation active class
      nav.classList.toggle("nav-active")
  
      // Toggle burger animation
      burger.classList.toggle("toggle")
  
      // Toggle menu overlay
      menuOverlay.classList.toggle("active")
  
      // Toggle body scroll
      if (nav.classList.contains("nav-active")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
  
      // Animate links with delay
      navLinks.forEach((link, index) => {
        // Reset animation
        if (!nav.classList.contains("nav-active")) {
          link.style.animation = ""
          return
        }
  
        // Add animation with delay
        link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
      })
    }
  
    // Burger click event
    burger.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleNav()
    })
  
    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("nav-active")) {
          toggleNav()
        }
      })
    })
  
    // Close mobile menu when clicking on overlay
    menuOverlay.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        toggleNav()
      }
    })
  
    // Close menu on window resize if it's open
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && nav.classList.contains("nav-active")) {
        toggleNav()
      }
    })
  
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Skill Animation
    const skillItems = document.querySelectorAll(".skill-item")
  
    const animateSkills = () => {
      skillItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (itemTop < windowHeight - 50) {
          item.style.animation = "skillFade 0.5s ease forwards"
        }
      })
    }
  
    // Animate sections on scroll
    const animateSections = () => {
      const sections = document.querySelectorAll("section")
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (sectionTop < windowHeight - 100) {
          section.classList.add("visible")
        }
      })
    }
  
    // Initialize section animations
    const initSectionAnimations = () => {
      const sections = document.querySelectorAll("section:not(.hero)")
  
      sections.forEach((section) => {
        section.style.opacity = "0"
        section.style.transform = "translateY(20px)"
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  
        // Add visible class for animation
        section.addEventListener("transitionend", () => {
          if (section.classList.contains("visible")) {
            section.style.transform = ""
          }
        })
      })
    }
  
    // Project Hover Effect with smooth transitions
    const projectCards = document.querySelectorAll(".project-card")
  
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
      })
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = ""
      })
    })
  
    // Typing Animation for Hero Section
    const heroTitle = document.querySelector(".hero h1")
    const heroSubtitle = document.querySelector(".hero h2")
  
    const typeWriter = (element, text, speed) => {
      let i = 0
      element.textContent = "" // Clear any existing text
  
      const typing = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
        } else {
          clearInterval(typing)
        }
      }, speed)
    }
  
    // Active navigation highlighting based on scroll position
    const highlightNav = () => {
      const sections = document.querySelectorAll("section")
      const navItems = document.querySelectorAll(".nav-links a")
  
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id")
        }
      })
  
      navItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("href") === `#${current}`) {
          item.classList.add("active")
        }
      })
    }
  
    // Add visible class to sections in viewport
    const addVisibleClass = () => {
      const sections = document.querySelectorAll("section:not(.hero)")
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (sectionTop < windowHeight - 100) {
          section.classList.add("visible")
          section.style.opacity = "1"
          section.style.transform = "translateY(0)"
        }
      })
    }
  
    // Initialize animations
    initSectionAnimations()
  
    // Run animations on page load
    animateSkills()
    addVisibleClass()
    highlightNav()
  
    // Add scroll event listeners
    window.addEventListener("scroll", () => {
      animateSkills()
      addVisibleClass()
      highlightNav()
    })
  
    // Start typing animations
    typeWriter(heroTitle, "I'm Priyank Patel", 100)
    setTimeout(() => {
      typeWriter(heroSubtitle, "Transforming ideas into innovative technology", 80)
    }, 2000)
  })
  
  