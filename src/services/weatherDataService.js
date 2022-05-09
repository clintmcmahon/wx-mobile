const dataUrl = "https://data.rcc-acis.org/StnData";
const metaUrl = "https://data.rcc-acis.org/StnMeta";

export const getRecords = async (selectedStation, startDate, endDate) => {
  const recordsQuery = {
    sid: selectedStation,
    elems: [
      {
        name: "maxt",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "max",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
      {
        name: "mint",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "min",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
      {
        name: "maxt",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "min",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
      {
        name: "mint",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "max",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
      {
        name: "snow",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "max",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
      {
        name: "pcpn",
        interval: "dly",
        duration: "dly",
        smry: {
          reduce: "max",
          add: "date",
        },
        smry_only: 1,
        groupby: ["year", startDate, endDate],
      },
    ],
    sDate: "por",
    eDate: "por",
    meta: ["name", "state", "valid_daterange", "sids"],
  };

  const response = await fetch(dataUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(recordsQuery),
  });
  const json = await response.json();

  const records = {
    highTemp: json.smry[0][0][0],
    highDate: json.smry[0][0][1] ? new Date(json.smry[0][0][1]) : "",
    lowTemp: json.smry[1][0][0],
    lowDate: json.smry[1][0][1] ? new Date(json.smry[1][0][1]) : "",
    coldHigh: json.smry[2][0][0],
    coldDate: json.smry[2][0][1] ? new Date(json.smry[2][0][1]) : "",
    warmLow: json.smry[3][0][0],
    warmDate: json.smry[3][0][1] ? new Date(json.smry[3][0][1]) : "",
    mostSnow: json.smry[4][0][0],
    mostSnowDate: json.smry[4][0][1] ? new Date(json.smry[4][0][1]) : "",
    mostPrecip: json.smry[5][0][0],
    mostPrecipDate: json.smry[5][0][1] ? new Date(json.smry[5][0][1]) : "",
  };

  return records;
};
