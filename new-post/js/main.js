localStorage.setItem("lastedBlog", 0);

document.querySelector("#send").addEventListener("click", () => {

    localStorage.setItem(`blogTitle${localStorage.getItem("lastedBlog")}`, document.getElementById("title").value);
    localStorage.setItem(`blogDesc${localStorage.getItem("lastedBlog")}`, document.getElementById("desc").value);

    if (localStorage.getItem("lastedBlog") > 0) {

        localStorage.setItem("lastedBlog", 1);

    } else {
        
        localStorage.setItem("lastedBlog", localStorage.getItem("lastedBlog") + 1);
    }

    window.location.href = "../";

});