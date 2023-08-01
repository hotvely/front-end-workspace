$("#userPwd").on("click", function (e) {
  if ($(e.target)) {
    $("#passInfo").text("영문자 대/소문자 특수문자, 숫자 포함 8~32자");
  }
});

let password = null;
// 영문자 대소문자 특수문자 숫자 포함 8 ~ 32
$("#userPwd").keyup(function (e) {
  const regExp = /[a-zA-Z0-9!-/:-@[-`{-~]{8,32}/;

  const pass = $(e.target).val();
  console.log(regExp.test(pass));
  if (regExp.test(pass)) {
    password = pass;
    $("#passInfo").css("color", "green");
  } else {
    $("#passInfo").css("color", "red");
  }
});

$("#userPwd2").keyup(function (e) {
  const passCheck = $(e.target).val();
  console.log(passCheck === password);
  if (passCheck === password) {
    $("#passCheckInfo").css("color", "green").text("비밀번호가 일치합니다.");
  } else {
    $("#passCheckInfo")
      .text("비밀번호가 일치하지 않습니다.")
      .css("color", "red");
  }
});
