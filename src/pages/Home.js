import { useContext } from "react";
import AppContext from "../core/context/appContext";

const Home = () => {
  const state = useContext(AppContext);
  const { cryptoData } = state;
  console.log("crypto:", cryptoData);

  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="homePage">
      <div className="cryptoCont">
        {cryptoData &&
          cryptoData.map((i, key) => {
            const hourlyPriceChange =
              i["1h"] && Number(i["1h"].price_change).toFixed(4);

            const monthlyPriceChange =
              i["30d"] && Number(i["30d"].price_change).toFixed(4);
            const yearlyPriceChange =
              i["365d"] && Number(i["365d"].price_change).toFixed(4);
            return (
              <div key={key} className="cryptoItem">
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>{i.rank}</p>
                  <p>{i.name}</p>
                  <p>{i.symbol}</p>
                </div>
                <img
                  src={i.logo_url}
                  alt="cryptocurrency logo"
                  height="50"
                  width="50"
                />

                <p>Price: ${addComma(Number(i.price).toFixed(2))}</p>
                <p>Market Cap: {addComma(i.market_cap)}</p>

                <div>
                  <h3>Changes</h3>
                  <div className="changes">
                    <div
                      style={{
                        backgroundColor:
                          hourlyPriceChange > 0 ? "#43AE21" : "#DA2A27",
                      }}
                    >
                      <p>1 Hour</p>
                      {hourlyPriceChange}
                    </div>
                    <div
                      style={{
                        backgroundColor:
                          monthlyPriceChange > 0 ? "#43AE21" : "#DA2A27",
                      }}
                    >
                      <p>1 Month</p>
                      {monthlyPriceChange}
                    </div>
                    <div
                      style={{
                        backgroundColor:
                          yearlyPriceChange > 0 ? "#43AE21" : "#DA2A27",
                      }}
                    >
                      <p>1 Year</p>
                      {yearlyPriceChange}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
