const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");

const surprise = document.getElementById("surprise");

const confettiContainer =
    document.getElementById("confetti-container");


console.log("SCRIPT BERHASIL TERBACA!");



openButton.addEventListener("click", function () {

    console.log("TOMBOL OPEN DIKLIK!");

    // Sembunyikan halaman awal
    opening.classList.add("hidden");

    // Tampilkan halaman surprise
    surprise.classList.remove("hidden");

    // Jalankan confetti
    createConfetti();

});



function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");


        // Posisi horizontal random
        confetti.style.left =
            Math.random() * 100 + "vw";


        // Ukuran random
        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 8 + 5 + "px";


        // Delay random
        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        confettiContainer.appendChild(confetti);


        // Hapus setelah animasi selesai
        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}