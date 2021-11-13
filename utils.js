/**
 *
 * @param {*} filename - path to datafile
 * @param {*} callback - callable after decode
 * @example getData("data.json", (data) => console.log(data));
 */

async function getData(filename, callback) {
  const contentType = "application/json";
  const response = await fetch(filename, {
    headers: {
      "Content-Type": contentType,
      Accept: contentType,
    },
  });
  callback(await response.json());
}