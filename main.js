const postsDiv = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    posts.slice(0, 3).forEach((post) => {
      const postEl = document.createElement("div");
      postEl.className = "post";

      postEl.addEventListener("click", () => {
        window.location.href = `post.html?post=${post.id}`;
      });

      const header = document.createElement("div");
      header.className = "post-header";
      header.textContent = "Authors name in Topics Name · 7 July";

      const content = document.createElement("div");
      content.className = "post-content";

      const title = document.createElement("h2");
      title.className = "post-title";
      title.textContent = post.title;

      const text = document.createElement("p");
      text.className = "post-text";
      text.textContent = post.body.slice(0, 200) + "...";

      const footer = document.createElement("div");
      footer.className = "post-footer";
      footer.textContent = "Java Script 12 min read · Selected for you";

      content.append(header, title, text, footer);

      const img = document.createElement("img");
      img.src = `https://picsum.photos/seed/${post.id}/300/200`;

      postEl.append(content, img);
      postsDiv.append(postEl);
    });
  });
