# codetest-getcurrentweather-ui

Develop

```
webpack serve
Project is running at http://localhost:8080/
```

Build
```scala
webpack --mode development
webpack --mode production
```



Docs:

##### Weather API Parameters:

- ```
  city
  ```

  - `city.id `City ID

  - `city.name` City name

  - ```
    city.coord
    ```

    - `city.coord.lon` City geo location, longitude
    - `city.coord.lat` City geo location, latitude

  - `city.country` Country code (GB, JP etc.)

  - `timezone`Shift in seconds from UTC

  - ```
    city.sun
    ```

    - `city.sun.rise` Sunrise time
    - `city.sun.set` Sunset time

- ```
  temperature
  ```

  - `temperature.value` Temperature
  - `temperature.min` Minimum temperature at the moment of calculation. This is minimal currently observed temperature (within large megalopolises and urban areas), use this parameter optionally.
  - `temperature.max` Maximum temperature at the moment of calculation. This is maximal currently observed temperature (within large megalopolises and urban areas), use this parameter optionally.
  - `temperature.unit` Unit of measurements. Possilbe valure is Celsius, Kelvin, Fahrenheit.

- ```
  feels_like
  ```

  - `feels_like.value `Temperature. This temperature parameter accounts for the human perception of weather.
  - `feels_like.unit` Unit of measurements. Possilbe valure is Celsius, Kelvin, Fahrenheit. Unit Default: Kelvin

- ```
  humidity
  ```

  - `humidity.value `Humidity value
  - `humidity.unit` Humidity units, %

- ```
  pressure
  ```

  - `pressure.value `Pressure value
  - `pressure.unit` Pressure units, hPa

- ```
  wind
  ```

  - ```
    wind.speed
    ```

    - `wind.speed.value `Wind speed
    - `wind.speed.unit `Wind speed units, m/s
    - `wind.speed.name` Type of the wind

  - ```
    wind.direction
    ```

    - `wind.direction.value `Wind direction, degrees (meteorological)
    - `wind.direction.code` Code of the wind direction. Possilbe value is WSW, N, S etc.
    - `wind.direction.name` Full name of the wind direction.

- ```
  clouds
  ```

  - `clouds.value `Cloudiness
  - `clouds.name` Name of the cloudiness

- ```
  visibility
  ```

  - `visibility.value `Visibility, meter

- ```
  precipitation
  ```

  - `precipitation.value` Precipitation, mm
  - `precipitation.mode` Possible values are 'no", name of weather phenomena as 'rain', 'snow'

- ```
  weather
  ```

  - `weather.number` Weather condition id
  - `weather.value` Weather condition name
  - `weather.icon` Weather icon id

- ```
  lastupdate
  ```

  - `lastupdate.value` Last time when data was updated