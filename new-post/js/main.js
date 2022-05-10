let send = document.getElementById("send");
let title = document.getElementById("title");
let desc = document.getElementById("desc");

if (localStorage.length == 0) {

    let titles = [];
    let descs = [];

    send.addEventListener("click", () => {

        titles.push(title.value);
        descs.push(desc.value);

        localStorage.setItem("titles", JSON.stringify(titles));
        localStorage.setItem("descs", JSON.stringify(descs));

        window.location.href = "../"

    });

} else {

    const object1 = localStorage.getItem("titles");
    const object2 = localStorage.getItem("descs");
    let titles = JSON.parse(object1);
    let descs = JSON.parse(object2);

    send.addEventListener("click", () => {

        titles.push(title.value);
        descs.push(desc.value);

        localStorage.setItem("titles", JSON.stringify(titles));
        localStorage.setItem("descs", JSON.stringify(descs));

        window.location.href = "../"

    });

}

document.getElementById("dark-mode").addEventListener("change", () => {

    if (!document.getElementById("dark-mode").checked) {

        document.body.style.backgroundColor = "#fff";

        for (let i = 0; i <= 1; i++) {

            document.querySelectorAll("label")[i].style.color = "#000";
            document.getElementById("title").style.color = "#000"
            document.getElementById("title").style.background = "#fff"
            document.getElementById("title").style.outline = "2.5px solid var(--color-primary)"
            document.getElementById("desc").style.color = "#000"
            document.getElementById("desc").style.background = "#fff"
            document.getElementById("desc").style.outline = "2.5px solid var(--color-primary)"
            document.getElementById("send").style.color = "#000"
            document.getElementById("send").style.background = "var(--color-secundary)"

        }

    } else {

        document.body.style.backgroundColor = "#141414";

        for (let i = 0; i <= 1; i++) {

            document.querySelectorAll("label")[i].style.color = "#fff";
            document.getElementById("title").style.color = "#fff"
            document.getElementById("title").style.background = "#282828"
            document.getElementById("title").style.outline = "2.5px solid var(--color-secundary)"
            document.getElementById("desc").style.color = "#fff"
            document.getElementById("desc").style.background = "#282828"
            document.getElementById("desc").style.outline = "2.5px solid var(--color-secundary)"
            document.getElementById("send").style.color = "#fff"
            document.getElementById("send").style.background = "var(--color-primary)"

        }

    }

});