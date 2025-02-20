import { Condition } from "./condition.model";

export interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    condition: Condition;
}

