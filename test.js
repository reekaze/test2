import moment from "moment";

const API_URL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=6.200000&lon=106.8166661&appid=5f242829c6e5da00eb4673068a27fed5&units=metric";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    let tempDate = "";
    console.log("Weather Forecast:");
    for (let i = 0; i < data.list.length; i++) {
      let formattedDate = moment(data.list[i].dt_txt).format(
        "ddd, DD MMM yyyy"
      );
      if (tempDate != formattedDate) {
        tempDate = formattedDate;
        console.log(formattedDate + ": " + data.list[i].main.temp + "\u00B0C");
      }
    }
  })
  .catch((error) => console.error("Something went wrong", error));
