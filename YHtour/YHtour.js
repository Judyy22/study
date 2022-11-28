let news = [];

const getLatestNews = async () => {
    let url = new URL(
        `http://apis.data.go.kr/B500001/myportal/travel/travellist?searchTypeCd=01&regionCd=HA&numOfRows=10&pageNo=1&serviceKey=clM3IqqvOv%2FWQJZMFZBMn2V0aRFYQchVQ6cQAc8Qfj7HcJECnBta7m5AZg3VKUgjnQrZGcC%2Fh7eWOIQcdVyiVg%3D%3D&_type=json`
    );
    let response = await fetch(url);
    let data = await response.json();
    news = data.articles;
    console.log(news);
};

var xhr = new XMLHttpRequest();
var url = "http://apis.data.go.kr/B500001/myportal/travel/travellist"; /*URL*/
var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "clM3IqqvOv%2FWQJZMFZBMn2V0aRFYQchVQ6cQAc8Qfj7HcJECnBta7m5AZg3VKUgjnQrZGcC%2Fh7eWOIQcdVyiVg%3D%3D"; /*Service Key*/
queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
queryParams +=
    "&" +
    encodeURIComponent("searchTypeCd") +
    "=" +
    encodeURIComponent("01"); /**/
queryParams +=
    "&" + encodeURIComponent("regionCd") + "=" + encodeURIComponent("HA"); /**/
queryParams +=
    "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(
            "Status: " +
                this.status +
                "nHeaders: " +
                JSON.stringify(this.getAllResponseHeaders()) +
                "nBody: " +
                this.responseText
        );
    }
};

console.log(this.course);

xhr.send("");
