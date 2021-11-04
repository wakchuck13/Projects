// $(".myProjects").on("click", function () {
//   const showPortfolio = "[data-portfolio=" + $(this).attr("class") + "]";
//   $("body, html").animate(
//     {
//       scrollTop: $(showPortfolio).offset().top,
//     },
//     500
//   );
// });

$(".myProjects").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".portfolio").offset().top,
    },
    500
  );
});
