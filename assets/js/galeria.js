$(document).ready(function () {
    const kepek = [];
    const kepSzam = 28;
    let aktivIndex = 0;

    const betoltesek = [];
    for (let i = 1; i <= kepSzam; i++) {
        const path =  `assets/img/galeria/kep${i}.jpg`;
        const img = new Image();
        const promise = new Promise((resolve) => {
            img.onload = () => resolve(path);
            img.onerror = () => resolve(null);
        });
        img.src = path;
        betoltesek.push(promise);
    }

    Promise.all(betoltesek).then((result) => {
        const validKepek = result.filter((p) => p !== null);

        validKepek.forEach((src, i) => {
            $(".galeria").append(`<img src="${src}" class="kisKep" data-index="${i}">`);
        });

        $(document).on("click", ".kisKep", function () {
            aktivIndex = parseInt($(this).attr("data-index"));
            $("#nagyKep").attr("src", validKepek[aktivIndex]);
            $("#felugro").fadeIn();
        });

        $(document).on("click", "#zaras", function () {
            $("#felugro").fadeOut();
        });

        $(document).on("click", "#bal", function () {
            aktivIndex = (aktivIndex - 1 + validKepek.length) % validKepek.length;
            $("#nagyKep").attr("src", validKepek[aktivIndex]);
        });

        $(document).on("click", "#jobb", function () {
            aktivIndex = (aktivIndex + 1) % validKepek.length;
            $("#nagyKep").attr("src", validKepek[aktivIndex]);
        });
        $(document).on("click", "#felugro", function (e) {
            if (
                e.target.id === "felugro"
            ) {
                $("#felugro").fadeOut();
            }
        });
    });
});