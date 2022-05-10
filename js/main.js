document.querySelector(".add").addEventListener ("click", () => {

    window.location.href = "new-post/";

});


for (let i = 0; i <= JSON.parse(localStorage.getItem("titles")).length - 1; i++) {

    const blog = document.createElement("article");

    blog.innerHTML = `

        <h2>${JSON.parse(localStorage.getItem("titles"))[i]}</h2>
        <hr>
        <p>${JSON.parse(localStorage.getItem("descs"))[i]}</p>

    `;

    document.querySelector("main").appendChild(blog);

}

document.getElementById("dark-mode").addEventListener("change", () => {

    if (!document.getElementById("dark-mode").checked) {

        document.body.style.backgroundColor = "#fff";

        for (let i = 0; i <= JSON.parse(localStorage.getItem("titles")).length - 1; i++) {

            document.querySelectorAll("article")[i].style.backgroundColor = "#fff";
            document.querySelectorAll("article")[i].style.boxShadow = "3px 3px 5px 0px #000a";
            document.querySelectorAll("h2")[i].style.color = "#000";
            document.querySelectorAll("p")[i].style.color = "#000";
            document.querySelectorAll("hr")[i].style.border = "1px solid #444";

        }

    } else {

        document.body.style.backgroundColor = "#141414";

        for (let i = 0; i <= JSON.parse(localStorage.getItem("titles")).length - 1; i++) {

            document.querySelectorAll("article")[i].style.backgroundColor = "#282828";
            document.querySelectorAll("article")[i].style.boxShadow = "3px 3px 5px 0px #fffa";
            document.querySelectorAll("h2")[i].style.color = "#fff";
            document.querySelectorAll("p")[i].style.color = "#fff";
            document.querySelectorAll("hr")[i].style.border = "1px solid #fff";

        }

    }

});
