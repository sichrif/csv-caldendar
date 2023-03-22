import Papa from "papaparse";

export default function convertToJson() {
  let jsonArray = [];
  // Load the CSV file using Fetch API
  fetch("/data/data.csv")
    .then((response) => response.text())
    .then((csvString) => {
      // Parse CSV data into an array of objects using Papa Parse
      jsonArray = Papa.parse(csvString, { header: true }).data;
      console.log('"jsonString"', jsonArray);
    });
}
