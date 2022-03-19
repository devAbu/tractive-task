$("#calculate").click(function () {
  let name = $("#name").val();
  let sex = $("input[name=sex]:checked").val();
  let height = $("#height").val();
  let weight = $("#weight").val();
  let arrowMargin = 0;

  let bmi = (weight / (height * height)) * 703;
  bmi = Math.round(bmi * Math.pow(10, 2)) / Math.pow(10, 2);

  if (bmi < 0 || bmi > 120) {
    $("#err").html(
      "Please enter a valid height and weight. BMI can not be more than 120"
    );
    return;
  } else if (bmi < 30) {
    $("#normal").css("background-color", "gray");
    $("#over").css("background-color", "gray");
    $("#under").css("background-color", "green");

    arrowMargin = bmi * 1.05;
  } else if (bmi < 90) {
    $("#under").css("background-color", "gray");
    $("#over").css("background-color", "gray");
    $("#normal").css("background-color", "green");

    if (bmi < 45) arrowMargin = bmi * 0.91;
    else if (bmi < 60) arrowMargin = bmi * 0.8;
    else arrowMargin = bmi / 1.4;
  } else if (bmi >= 90) {
    $("#normal").css("background-color", "gray");
    $("#under").css("background-color", "gray");
    $("#over").css("background-color", "green");

    arrowMargin = bmi - 23;
  }

  $(".arrow span").css("margin-left", `${arrowMargin}%`);

  $("#bmi").html(bmi);

  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (sex == "male") {
    $("#user").html(`Mr. ${name}'s pet is`);
  } else {
    $("#user").html(`Mrs. ${name}'s pet is`);
  }
});
