/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import useFetch from "../useFetch";

const Weather = () => {
  const API_UNITS = "metric";
  const API_KEY = "e369bb56175f8c0a1afc8997af79886f";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=55.676098&lon=12.568337&appid=${API_KEY}&units=${API_UNITS}`;
  const { data, isPending, error } = useFetch(API_URL);
 

  const styles = {
    weather: css`
      width: 200px;
    `,
    weather__component: css`
      display: flex;
      align-items: center;
      justify-content: end;
    `,
    weatherContainerIcon: css`
      color: #fff;
      width: 30%;
    `,
    weatherContainerTemp: css`
      color: #fff;
      font-size:0.80rem;
    `,
    weatherContainerLocation: css`
      color: #fff;
      font-size:0.80rem;
    `,
  };

  return (
    <div css={styles.weather}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div css={styles.weather__component}>
          <img
            css={styles.weatherContainerIcon}
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""
          />
          <div>
            <div css={styles.weatherContainerTemp}>
              {Math.round(data.main.temp)} °C
            </div>
            <div css={styles.weatherContainerLocation}>{data.name} °C</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
