// let priceVal = document.getElementById("price");
// let priceValue = priceVal.value;
// console.log(priceValue);

// submitFunc = (e) => {
//   e.preventDefault();
// };

// let totalPrice = document.getElementById("totalprice");

// totalPrice.innerText = priceValue;

// document.getElementById("form").addEventListener("click", function (event) {
//   event.preventDefault();
//   const element = document.getElementById("invoice");

//   html2pdf().from(element).save();
//   // alert("Hello");
// });

let shot = document.getElementById("screenshot");
shot.addEventListener("click", function () {
  html2canvas(document.querySelector(".specific"), {
    onrendered: function (canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    },
  });
});
