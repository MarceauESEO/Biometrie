// Get the HTML canvas by its id
plots = document.getElementById("plots");
// Example datasets for X and Y-axes
var weeks = ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4", "Semaine 5", "Semaine 6", "Semaine 7"]; //Stays on the X-axis
var SM = [32, 35, 41, 57, 56, 54, 52]
var AV = [31, 46, 46, 59, 77, 65, 68]
var FD = [38, 42, 52, 59, 50,  55, 56]
var MM = [43, 50, 60, 70, 65, 60, 59]
var SM_moyenne = [46.71428571]
var AV_moyenne = [56]
var FD_moyenne = [50.28571429]
var MM_moyenne = [58.14285714]
// Create an instance of Chart object:
new Chart(plots, {
type: 'line', //Declare the chart type
data: {
  labels: weeks, //X-axis data
  datasets: [{
      label: 'Samuel Marianne',
      data: SM, //Y-axis data
      backgroundColor: 'crimson',
      borderColor: 'crimson',
      fill: false, //Fills the curve under the line with the babckground color. It's true by default
    },
    {
      label: 'Alexis Vitse',
      data: AV, //Y-axis data
      backgroundColor: 'navy',
      borderColor: 'navy',
      fill: false, //Fills the curve under the line with the babckground color. It's true by default
    },
    {
      label: 'Francois Doniol',
      data: FD, //Y-axis data
      backgroundColor: 'green',
      borderColor: 'green',
      fill: false, //Fills the curve under the line with the babckground color. It's true by default
    },
    {
      label: 'Marceau Moulin',
      data: MM, //Y-axis data
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      fill: false, //Fills the curve under the line with the babckground color. It's true by default
    }

    ]

},
});
