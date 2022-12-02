import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 날씨정보가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태
// 3. 5개의 지역 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭 할 때 마다 도시별 날씨가 나타난다.
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
    const [weather, setWeather] = useState(null);
    const cities = ["Seoul", "Busan", "Berlin", "London"];
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=208d6df68832849c117349ddafcaee5d&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        setLoading(false);
    };
    const getWeatherByCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=208d6df68832849c117349ddafcaee5d&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        setLoading(false);
    };

    const handleCityChange = (city) => {
        if (city === "current") {
            setCity("");
        } else {
            setCity(city);
        }
    };

    useEffect(() => {
        if (city == "") {
            getCurrentLocation();
        } else getWeatherByCity();
    }, [city]);

    return (
        <div>
            {loading ? (
                <div className="container">
                    <ClipLoader color="#ff0000" loading={loading} size={150} />
                </div>
            ) : (
                <div className="container">
                    <WeatherBox weather={weather} />
                    <WeatherButton
                        cities={cities}
                        handleCityChange={handleCityChange}
                        selectedCity={city}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
