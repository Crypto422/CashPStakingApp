import React  from "react";
// import * as CryptoCharts from "cryptocharts";

const Chart = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [latestPrice, setLatestPrice] = useState(0);
  // CryptoCharts.roiComparison({
  //   chart_id: "mychart",
  //   cryptocompare_tickers: ["FTM"],
  //   last_days: 30,
  //   options: {
  //     colors: ["#88AA24", "#EF1273", "#122673", "#000000"],
  //     title: true,
  //     chart: {
  //       type: "line",
  //     },
  //   },
  // });
  // useEffect(() => {
  //   fetchData().then((chartData) => {
  //     setIsLoading(false);
  //     setLatestPrice(
  //       parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2)
  //     );
  //   });
  //   const timerID = setInterval(() => {
  //     fetchData().then((chartData) => {
  //       setLatestPrice(
  //         parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2)
  //       );
  //     });
  //   }, 1000 * 30);
  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, []);

  // const fetchData = async () => {
  //   let data = { index: [], price: [], volumes: [] };
  //   let result = await callAPI(
  //     "https://api.coingecko.com/api/v3/coins/fantom/market_chart?vs_currency=usd&days=1&interval=1m"
  //   );
  //   for (const item of result.prices) {
  //     data.index.push(item[0]);
  //     data.price.push(item[1]);
  //   }
  //   for (const item of result.total_volumes) data.volumes.push(item[1]);
  //   return data;
  // };

  // const callAPI = async (url) => {
  //   let response = await fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  //   return response.json();
  // };

  return (
    <div className="container-chart">
      {/* <div
        className="px-3 mt-1"
        style={{ textAlign: "center", color: "#03a9f4" }}
      >
        {isLoading ? (
          <h2 className="value animate__animated animate__flash animate__slow text-center text-primary">
            {" "}
            loading ...
          </h2>
        ) : (
          <>
            <h2
              id="last-price"
              className="text-center text-primary animate__animated"
            >
              $ {latestPrice}
            </h2>
          </>
        )}
     
      </div> */}
      <iframe
      title="chart"
        style={{width:"100%",height:"500px"}}
          className="iframe-trading"
          id="tradingview_6b256"
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_6b256&amp;symbol=FTMUSD&amp;interval=1&amp;symboledit=1&amp;saveimage=1&amp;details=1&amp;calendar=1&amp;studies=%5B%5D&amp;theme=Light&amp;style=1&amp;timezone=Etc%2FUTC&amp;withdateranges=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.hydrainvestmentcompany.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=FTMUSD"
        ></iframe>
    </div>
  );
};

export default Chart;
