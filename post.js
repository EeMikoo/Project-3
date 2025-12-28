const container = document.getElementById("single-post");

const params = new URLSearchParams(window.location.search);
const postId = params.get("post");

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((res) => res.json())
  .then((post) => {
    const div = document.createElement("div");
    div.className = "single";

    const img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${post.id}/800/400`;

    const title = document.createElement("h2");
    title.textContent = post.title;

    const text = document.createElement("p");
    text.textContent = post.body;

    div.append(img, title, text);
    container.append(div);
  });
