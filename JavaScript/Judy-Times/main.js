let news = [];
const getLatestNews = async () => {
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10`
    );
    let header = new Headers({
        // "x-api-key": "1_bgNj0YXjhQBMlu8JXlbQzZ-rNpUAUehOL8KopGC_E",
    });
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    news = data.articles;
    console.log(news);
};

getLatestNews();
