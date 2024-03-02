import partlyCloudy from "./assets/images/icons/partly-cloudy.svg";
import sunnyBlack from "./assets/images/icons/sunny-black.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-left">AAA</div>
            <div className="App-right">
                <div className="top">
                    <div className="item">
                        <div className="label">PRECIPITATION</div>
                        <div className="value">0%</div>
                    </div>
                    <div className="item">
                        <div className="label">HUMIDITY</div>
                        <div className="value">42%</div>
                    </div>
                    <div className="item">
                        <div className="label">WIND</div>
                        <div className="value">3 km/h</div>
                    </div>
                </div>

                <div className="days-weather">
                    <div className="weather-item active">
                        <div className="weather-icon">
                            <img src={sunnyBlack} width={54} alt="Sunny" />
                        </div>
                        <div className="weather-day">Tue</div>
                        <div className="weather-temperature">30°C</div>
                    </div>
                    <div className="weather-item">
                        <div>
                            <img src={partlyCloudy} width={54} alt="Cloudy" />
                        </div>
                        <div>Tue</div>
                        <div>30°C</div>
                    </div>
                    <div className="weather-item">
                        <div>
                            <img src={partlyCloudy} width={54} alt="Cloudy" />
                        </div>
                        <div>Tue</div>
                        <div>30°C</div>
                    </div>
                    <div className="weather-item">
                        <div>
                            <img src={partlyCloudy} width={54} alt="Cloudy" />
                        </div>
                        <div>Tue</div>
                        <div>30°C</div>
                    </div>
                </div>

                <div className="change-location">
                    <button className="icon-before">Change Location</button>
                </div>
            </div>
        </div>
    );
}

export default App;
