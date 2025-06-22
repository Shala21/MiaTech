const container = document.getElementById("scrollSquare");
        const square = container.querySelector(".square");

        window.addEventListener("scroll", () => {
            const scrollBottom = window.scrollY + window.innerHeight;
            const documentHeight = document.body.offsetHeight;

            // Se sei in basso (ultimi 200px), mostra il quadrato
            if (scrollBottom >= documentHeight - 200) {
            square.classList.remove("hide");
            } else {
            square.classList.add("hide");
            }
        });