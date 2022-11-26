let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) =>
    menu.addEventListener("click", (event) => getNewsByTopic(event))
);
const getLatestNews = async () => {
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10`
    );
    let header = new Headers({
        "x-api-key": "1_bgNj0YXjhQBMlu8JXlbQzZ-rNpUAUehOL8KopGC_E",
    });
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    news = data.articles;
    console.log(news);

    render();
};

const getNewsByTopic = (event) => {
    console.log("클릭됨", event.target.textContent);

    let topic = event.target.textContent.toLowerCase();
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?contries=US&page_size=10&topic=${topic}`
    );
};

const render = () => {
    let newsHTML = "";
    newsHTML = news
        .map((item) => {
            return `<div class="row news">
        <div class="col-lg-4">
            <img
                class="news-img-size"
                src="${
                    news.media ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
                }"/>
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
            news.summary == null || news.summary == ""
            ? "내용없음"
            : news.summary.length > 200
            ? news.summary.substring(0, 200) + "..."
            : news.summary
            </p>
            <div>${news.rights || "no source"}  ${moment(
                news.published_date
            ).fromNow()}</div>
        </div>
    </div>`;
        })
        .join("");

    console.log(newsHTML);

    document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
