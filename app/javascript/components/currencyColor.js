const Color = require("color");

const USD = "rgb(255, 99, 132)";
const SGD = "rgb(255, 159, 64)"
const EUR = "rgb(0, 0, 0)";
const AUD = "rgb(54, 162, 235)";

const legend = (rgb) => Color(rgb)
.alpha(0.5)
.rgb() 
const colors = {
  USD: {
    backgroundColor: legend(USD),
    borderColor: USD
  },
  SGD: {
    backgroundColor: legend(SGD),
    borderColor: SGD
  },
  EUR: {
    backgroundColor: legend(EUR),
    borderColor: EUR
  },
  AUD: {
    backgroundColor: legend(AUD),
    borderColor: AUD
  }
};

export default function currencyColor(currencyCode) {
  return colors[currencyCode];
}
