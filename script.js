/* =====================================================
   TANGGAL PERTAMA BERTEMU
===================================================== */

/*
    GANTI BAGIAN INI
    sesuai tanggal pertama kali bertemu.
*/

const correctDate = {

    day: 10,

    month: 8,

    year: 2026

};



/* =====================================================
   PASSWORD ELEMENTS
===================================================== */

const memoryLock =
    document.getElementById("memoryLock");


const dayInput =
    document.getElementById("day");


const monthInput =
    document.getElementById("month");


const yearInput =
    document.getElementById("year");


const unlockButton =
    document.getElementById("unlockButton");


const lockMessage =
    document.getElementById("lockMessage");


const lockCard =
    document.querySelector(".lock-card");

/* =====================================================
   MUSIC
===================================================== */

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicControl =
    document.getElementById("musicControl");

/* =====================================================
   CHECK DATE
===================================================== */

function checkDate() {

    const day =
        Number(dayInput.value);

    const month =
        Number(monthInput.value);

    const year =
        Number(yearInput.value);



    /* =========================
       INPUT KOSONG
    ========================= */

    if (
        !day ||
        !month ||
        !year
    ) {

        showMessage(
            "Isi dulu tanggalnya kakak!"
        );

        shakeCard();

        return;
    }



    /* =========================
       PASSWORD BENAR
    ========================= */

   if (
    day === correctDate.day &&
    month === correctDate.month &&
    year === correctDate.year
) {

    lockMessage.textContent =
        "You remembered... Welcome to our story ✿";

    lockMessage.classList.add("show");


    /* =========================
       PLAY MUSIC
    ========================= */

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(function() {

            musicControl.classList.add(
                "playing"
            );

        })
        .catch(function(error) {

            console.log(
                "Musik belum dapat diputar:",
                error
            );

        });


    /* =========================
       OPEN WEBSITE
    ========================= */

    setTimeout(
        function() {

            memoryLock.classList.add(
                "unlocked"
            );

            musicControl.classList.add(
                "show"
            );

        },
        1000
    );

}

    /* =========================
       PASSWORD SALAH
    ========================= */

    else {

        showMessage(
            "Hmm... coba ingat lagi hari itu ♡"
        );

        shakeCard();

    }

}



/* =====================================================
   SHOW MESSAGE
===================================================== */

function showMessage(message) {

    lockMessage.textContent =
        message;


    lockMessage.classList.add(
        "show"
    );

}



/* =====================================================
   WRONG PASSWORD ANIMATION
===================================================== */

function shakeCard() {

    lockCard.classList.remove(
        "wrong"
    );


    /*
        Restart CSS animation
    */

    void lockCard.offsetWidth;


    lockCard.classList.add(
        "wrong"
    );

}



/* =====================================================
   BUTTON CLICK
===================================================== */

unlockButton.addEventListener(
    "click",
    checkDate
);



/* =====================================================
   ENTER KEY
===================================================== */

[
    dayInput,
    monthInput,
    yearInput

].forEach(function(input) {

    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkDate();

            }

        }
    );

});



/* =====================================================
   AUTO MOVE INPUT
===================================================== */

/*
    Setelah mengisi tanggal,
    otomatis pindah ke bulan.
*/

dayInput.addEventListener(
    "input",
    function() {

        if (
            dayInput.value.length >= 2
        ) {

            monthInput.focus();

        }

    }
);


/*
    Setelah mengisi bulan,
    otomatis pindah ke tahun.
*/

monthInput.addEventListener(
    "input",
    function() {

        if (
            monthInput.value.length >= 2
        ) {

            yearInput.focus();

        }

    }
);



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "active"
                            );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );



revealElements.forEach(
    function(element) {

        observer.observe(
            element
        );

    }
);


/* =====================================================
   PLAY / PAUSE MUSIC BUTTON
===================================================== */

musicControl.addEventListener(
    "click",
    function() {

        /* Jika musik sedang berhenti */

        if (backgroundMusic.paused) {

            backgroundMusic.play();

            musicControl.classList.add(
                "playing"
            );

        }

        /* Jika musik sedang berjalan */

        else {

            backgroundMusic.pause();

            musicControl.classList.remove(
                "playing"
            );

        }

    }
);