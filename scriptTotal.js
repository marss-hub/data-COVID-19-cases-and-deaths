/**
 * Выводит общее к-во случаев и смертей по указанной стране
 * сверить данные можно по значению cumulative_count за последнюю неделю
 * @param {function} callback
 * @param {string} country
 * @param {string} path
 * @returns {undefined} "функция работает через callback"
 * @example "runGetData((data) => console.log(data), "Russia", "data.json")"
 */

function runGetData(callback, country, path) {
  const totalDataCallback = function (arr) {
    const total = {};
    for (index = 0; arr[index] !== undefined; index++) {
      const currentIndicator = arr[index].indicator;
      if (total[currentIndicator] === undefined)
        total[currentIndicator] = { events: 0, weeks: 0 };

      total[currentIndicator].events += arr[index].weekly_count;
      total[currentIndicator].weeks++;
    }

    total.country = country;
    const totalStats = total;

    callback(totalStats);
  };

  runGetDataWeeks(totalDataCallback, country, path);
}
