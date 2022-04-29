document.querySelector(".add").addEventListener ("click", () => {

    window.location.href = "new-post/";

});

for (let i = 0; i <= localStorage.getItem("lastedBlog") - 0; i++) {

    const blog = document.createElement("section");

    blog.innerHTML = `

        <section>
            <h2>${localStorage.getItem(`blogTitle${i}`)}</h2>
            <p>${localStorage.getItem(`blogDesc${i}`)}</p>
        </section>

    `;

    document.querySelector("main").appendChild(blog);

}