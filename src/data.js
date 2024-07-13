import socialMediaImg from './assets/SSSocialMedia.png';
import currencyChop from './assets/SSCurrencyChop.png';
import MN from './assets/SSMathCalculator.png';

export const projects = {
  web: [
    {
      title: "Project 1",
      description: "Social media",
      details: "PostSpace is a simple social media that integrates various APIs to enhance user experience. Profile pictures and posts are enriched with external data sources, making user profiles vibrant and personalized. The platform offers core social media functionalities such as liking and sharing posts.",
      imgSrc: socialMediaImg,
      url: "https://github.com/LeonelCeballos18/BlogWeb_Project",
    },
    {
      title: "Project 2",
      description: "Cryptocurrency Converter Calculator",
      details: "Currency Chop is a web application designed for converting various cryptocurrency values, utilizing the powerful CoinGecko API. This project provides real-time exchange rates and conversion functionalities for a wide range of cryptocurrencies. Users can effortlessly compare and convert their crypto assets, ensuring they have up-to-date information at their fingertips.",
      imgSrc: currencyChop,
      url: "https://github.com/LeonelCeballos18/CurrencyChop",
    }
  ],
  desktop: [
    {
      title: "Project 1",
      description: "Math calculator",
      details: "It is a desktop application designed to tackle complex mathematical operations with ease. This powerful calculator can solve definite integrals, and perform numerical methods such as bisection, false position, Newton-Raphson, and trapezoidal rule.",
      imgSrc: MN,
      url: "https://github.com/LeonelCeballos18/MathCalculator",
    }
  ]
};
