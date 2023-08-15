const articleList = document.querySelectorAll("article");

window.addEventListener("scroll", (e) => {
  toggleArticles();
});

function toggleArticles() {
  articleList.forEach((article) => {
    if (
      article.getBoundingClientRect().bottom <
      document.documentElement.clientHeight
    ) {
      article.style.transform = "translateX(0)";
    } else {
      article.removeAttribute("style");
    }
  });
}

toggleArticles();
