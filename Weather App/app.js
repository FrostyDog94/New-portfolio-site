let weather = {
    apiKey: "d955ff4d76e1387b90866c9469aced3b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then(res => res.json())
            .then(data => this.displayWeather(data))


    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mph";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

const but = document.querySelector(".search button");
if (but) {
    but.addEventListener("click", function () {
        weather.search();
    })
};
