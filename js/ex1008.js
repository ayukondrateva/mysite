document.getElementById("volume-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var side = parseFloat(document.getElementById("side").value); // значение стороны куба
  var height = parseFloat(document.getElementById("height").value); //  значение высоты цилиндра
  var radius = parseFloat(document.getElementById("radius").value); // значение радиуса основания цилиндра
  var liquid = parseFloat(document.getElementById("liquid").value); //  значение объема жидкости

  var result = checkVolumes(side, height, radius, liquid); // Вызываю функцию для проверки объемов

  document.getElementById("result").innerText = result; // Вывожу результат на страницу
});

function checkVolumes(A, H, R, M) {
  var V1 = A * A * A; // объем кубической ёмкости
  var V2 = Math.PI * R * R * H; // объем цилиндрической ёмкости

  if (V1 >= M && V2 >= M) {
    return "Можно заполнить обе ёмкости";
  } else if (V1 >= M) {
    return "Можно заполнить только кубическую ёмкость";
  } else if (V2 >= M) {
    return "Можно заполнить только цилиндрическую ёмкость";
  } else {
    return "Нельзя заполнить ни одну ёмкость";
  }
}
