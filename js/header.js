// let lis = document.querySelectorAll(".header-center .first li");
// console.log(lis);
// lis.forEach(function (li, i) {
//   li.click(function () {
//     console.log(i);
//     this.ClassAdd("active");
//     this.siblings().ClassRemove("active");
//   });
// });
$(".first li").hover(function () {
  // console.log($(this).index());
  var $v = $(this).parent(".first").attr("id");
  $($v).hide();
  $(this).parent(".first").find("li").removeClass("active");
  $(this).addClass("active");
});

// 用户登录注册下拉框
function showInfo() {
  $(".dropdown").css("display", "block"); //显示
}
$(".dropdown").mouseleave(function () {
  $(".dropdown").css("display", "none"); //隐藏
});
