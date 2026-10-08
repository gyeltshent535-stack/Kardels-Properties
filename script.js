const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });

}
}


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



const locationFilter =
    document.getElementById("locationFilter");

const typeFilter =
    document.getElementById("typeFilter");

const purposeFilter =
    document.getElementById("purposeFilter");

const searchButton =
    document.getElementById("searchButton");

const propertyCards =
    document.querySelectorAll(".property-card");


function filterProperties() {

    const selectedLocation =
        locationFilter.value;

    const selectedType =
        typeFilter.value;

    const selectedPurpose =
        purposeFilter.value;


    let visibleCount = 0;


    propertyCards.forEach(function (card) {

        const cardLocation =
            card.dataset.location;

        const cardType =
            card.dataset.type;

        const cardPurpose =
            card.dataset.purpose;


        const locationMatch =
            selectedLocation === "all" ||
            selectedLocation === cardLocation;


        const typeMatch =
            selectedType === "all" ||
            selectedType === cardType;


        const purposeMatch =
            selectedPurpose === "all" ||
            selectedPurpose === cardPurpose;


        if (
            locationMatch &&
            typeMatch &&
            purposeMatch
        ) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    const propertySection =
        document.getElementById("properties");


    propertySection.scrollIntoView({
        behavior: "smooth"
    });


    if (visibleCount === 0) {

        alert(
            "No properties match your search. Please try different filters."
        );

    }

}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        filterProperties
    );

}

const favoriteButtons =
    document.querySelectorAll(".favorite-button");


favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");


        if (button.classList.contains("active")) {

            button.innerHTML = "♥";

        } else {

            button.innerHTML = "♡";

        }

    });

});



const modal =
    document.getElementById("propertyModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalLocation =
    document.getElementById("modalLocation");

const modalType =
    document.getElementById("modalType");

const modalPrice =
    document.getElementById("modalPrice");


const propertyData = {

    "Modern Family Residence": {

        location: "Thimphu, Bhutan",

        type: "House",

        price: "Nu. 18,500,000",

        description:
            "A spacious modern family residence designed for comfortable family living. The property features four bedrooms, three bathrooms, a large living area and convenient access to nearby facilities."

    },


    "Luxury City Apartment": {

        location: "Paro, Bhutan",

        type: "Apartment",

        price: "Nu. 35,000 / month",

        description:
            "A comfortable and modern apartment suitable for professionals and families. Located in a convenient area with easy access to shops, services and transportation."

    },


    "Beautiful Development Land": {

        location: "Punakha, Bhutan",

        type: "Land",

        price: "Nu. 8,500,000",

        description:
            "A spacious piece of land suitable for residential or development purposes. The property offers road access and a peaceful surrounding environment."

    },


    "Premium Commercial Space": {

        location: "Phuentsholing, Bhutan",

        type: "Commercial",

        price: "Nu. 32,000,000",

        description:
            "A premium commercial property suitable for offices, retail businesses or investment. The building offers multiple floors and parking facilities."

    },


    "Contemporary Apartment": {

        location: "Thimphu, Bhutan",

        type: "Apartment",

        price: "Nu. 11,800,000",

        description:
            "A contemporary three-bedroom apartment with a practical layout and modern interior. Ideal for families or property investors."

    },


    "Mountain View Family Home": {

        location: "Paro, Bhutan",

        type: "House",

        price: "Nu. 24,500,000",

        description:
            "A spacious family home with beautiful mountain surroundings. The property offers five bedrooms, four bathrooms and generous living space."

    }

};


const detailButtons =
    document.querySelectorAll(".details-button");


detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const propertyName =
            button.dataset.property;


        const property =
            propertyData[propertyName];


        if (!property) {

            return;

        }


        modalTitle.textContent =
            propertyName;

        modalDescription.textContent =
            property.description;

        modalLocation.textContent =
            property.location;

        modalType.textContent =
            property.type;

        modalPrice.textContent =
            property.price;


        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


/* Close modal */

if (modalClose) {

    modalClose.addEventListener("click", closeModal);

}


const modalOverlay =
    document.querySelector(".modal-overlay");


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* Close modal with ESC */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {

        closeModal();

    }

});




const loadMoreButton =
    document.getElementById("loadMoreButton");


if (loadMoreButton) {

    loadMoreButton.addEventListener(
        "click",
        function () {

            alert(
                "More properties can be added here. You can add additional property cards to index.html."
            );

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please fill in all required fields.";

                formMessage.style.color =
                    "#d65c5c";

                return;

            }


            formMessage.textContent =
                "Thank you! Your message has been received.";

            formMessage.style.color =
                "#3b8b5b";


            contactForm.reset();

        }
    );

}



const counters =
    document.querySelectorAll(".counter");


let countersStarted = false;


function startCounters() {

    if (countersStarted) {

        return;

    }


    countersStarted = true;


    counters.forEach(function (counter) {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 60));


        const timer =
            setInterval(function () {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                counter.textContent =
                    current + "+";

            }, 25);

    });

}


/* Start counter when stats section is visible */

const statsSection =
    document.querySelector(".stats-section");


if (statsSection) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounters();

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    observer.observe(statsSection);

}



const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                anchor.getAttribute("href");


            if (
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {

                return;

            }


            event.preventDefault();


            document.querySelector(targetId)
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});