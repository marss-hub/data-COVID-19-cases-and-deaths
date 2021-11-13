/**
 * Выводит массив еженедельных объектов по указанной стране
 * @param {function} callback
 * @param {string} country
 * @param {string} path
 * @returns {undefined} "функция работает через callback"
 * @example "runGetDataWeeks((data) => console.log(data), "Russia", "data.json")"
 */
function runGetDataWeeks(callback, country, path) {
  getData(path, function (data) {
    const userCountry = country;
    let arr = [];
    for (index = 0; data[index] !== undefined; index++) {
      if (data[index].country === userCountry) {
        let count = 0;
        for (let i = 0; arr[i] !== undefined; i++) {
          count++;
        }
        arr[count] = data[index];
      }
    }
    callback(arr);
  });
}
