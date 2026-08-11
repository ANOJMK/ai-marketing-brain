/* ==========================================================
   Brain Africa Labs
   AI Marketing Brain
   script.js
   Version 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    /* ==========================================
       HEADER SCROLL EFFECT
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================================
       SCROLL ANIMATION
    ========================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".card,.notice,.hero,.platform,.trust-card,.step")
        .forEach(item => observer.observe(item));

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if(window.scrollY>300){

            topButton.classList.add("show");

        }

        else{

            topButton.classList.remove("show");

        }

    });

    /* ==========================================
       FAQ
    ========================================== */

    document.querySelectorAll(".faq-item").forEach(item=>{

        const question=item.querySelector(".faq-question");

        const answer=item.querySelector(".faq-answer");

        if(answer){

            answer.style.display="none";

        }

        if(question){

            question.addEventListener("click",()=>{

                if(answer.style.display==="block"){

                    answer.style.display="none";

                }

                else{

                    answer.style.display="block";

                }

            });

        }

    });

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const form=document.querySelector("form");

    if(form){

        form.addEventListener("submit",(e)=>{

            const email=document.querySelector('input[type="email"]');

            const name=document.querySelector('input[name="name"]');

            const message=document.querySelector("textarea");

            if(name && name.value.trim()===""){

                alert("Please enter your name.");

                e.preventDefault();

                return;

            }

            if(email && email.value.trim()===""){

                alert("Please enter your email.");

                e.preventDefault();

                return;

            }

            if(message && message.value.trim()===""){

                alert("Please enter your message.");

                e.preventDefault();

                return;

            }

        });

    }

    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const year=document.getElementById("currentYear");

    if(year){

        year.textContent=new Date().getFullYear();

    }

});
