import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchweather } from "../redux/slice";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const weather = useSelector((state) => state.weatherapp.data);
  const Dispatch = useDispatch();
  const handlesearch = () => {
    Dispatch(fetchweather(searchInput));
  };
  useEffect(() => {
    Dispatch(fetchweather());
  }, []);
  return (
    <>
      <section className="background">
        <div class="cardContainer">
          <div class="card1 card1position">
            <p1 class="placename">{weather.data?.name}</p1>
            <p class="temperature">{weather.data?.main?.temp}</p>
            <span class="tempdescription">
              {weather.data?.weather[0].description}
            </span>
          </div>
          <div class="card2 card2position">
            <div className="container text-center">
              <div className="searchbar">
                <div class="coolinput">
                  <input
                    type="text"
                    placeholder="Search Your City"
                    name="input"
                    class="input"
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
                <div>
                  <button className="button3" onClick={handlesearch}>
                    Search
                  </button>
                </div>
              </div>
              <div className="row rowposition">
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">Wind</span>
                    <span className="spandesign2">
                      {weather.data?.wind?.speed}
                    </span>
                    <img src="/3.png" alt="" className="imagesize" />
                  </div>
                </div>
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">Humidity</span>
                    <span className="spandesign2">
                      {weather.data?.main?.humidity}
                    </span>
                    <img src="/4.png" alt="" className="imagesize1" />
                  </div>
                </div>
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">Sunrise and Sunset</span>
                    <span className="spandesign2">
                      {weather.data?.sys?.sunrise} & {weather.data?.sys?.sunset}
                    </span>
                    <img src="/5.png" alt="" className="imagesize1" />
                  </div>
                </div>
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">MaxTemp</span>
                    <span className="spandesign2">
                      {weather.data?.main?.temp_max}
                    </span>
                    <img src="/7.png" alt="" className="imagesize1" />
                  </div>
                </div>
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">Min Temp</span>
                    <span className="spandesign2">
                      {weather.data?.main?.temp_min}
                    </span>
                    <img src="/6.png" alt="" className="imagesize1" />
                  </div>
                </div>
                <div className="col-4 colpadding">
                  <div class="card3 card3position">
                    <span className="spandesign">Pressure</span>
                    <span className="spandesign2">
                      {weather.data?.main?.pressure}
                    </span>
                    <img src="/8.png" alt="" className="imagesize1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
