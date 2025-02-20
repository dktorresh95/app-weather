import { CurrentWeather } from "./weather.model";
import { Location } from "./location.model";

export interface WeatherResponse {
    location: Location;
    current: CurrentWeather;
}