// // Создание пустого массива для хранения точек на графике
// var data = [];

// // Функция для добавления точки на график
// function setValue(value, date) {
//   // Добавление нового объекта с значениями value и date в массив data
//   data.push({ value: value, date: date });

//   // Отсортировать массив data по времени в порядке возрастания
//   data.sort(function(a, b) {
//     return a.date - b.date;
//   });

//   // Обновление графика с использованием новых данных
//   updateChart();
// }

// // Функция для обновления графика с использованием данных из массива data
// function updateChart() {
//   // Очистка элемента графика
//   var chartContainer = document.getElementById('chart');
//   chartContainer.innerHTML = '';

//   // Создание нового графика с использованием библиотеки Plotly.js
//   Plotly.newPlot('chart', [{
//     x: data.map(function(item) {
//       return new Date(item.date);
//     }),
//     y: data.map(function(item) {
//       return item.value;
//     }),
//     mode: 'lines+markers',
//     type: 'scatter'
//   }]);
// }

// // Пример использования функции setValue
// setValue(15, 1529038860000); // добавление точки с значением 15 и датой 15 июня 2018 г., 05:01:00
