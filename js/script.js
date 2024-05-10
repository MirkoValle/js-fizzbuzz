const container = document.getElementById("container");


for (let i = 1; i <= 100; i++) {
    let article = document.createElement("article");
    container.appendChild(article);

    if (i % 3 == 0) {
        article.classList += "fizz"
    }
    if (i % 5 == 0) {
        article.classList += "buzz"
    }
    if (i % 3 != 0 && i % 5 != 0) {
        article.innerHTML += i
    }

}