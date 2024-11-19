const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") || 1;
const pageTitle = document.getElementById("page-title");
const carImage = document.getElementById("car-image");
const carAudio = document.getElementById("car-audio");
const carPrice = document.getElementById("car-price");
const carDescription = document.getElementById("car-description");

const dados = [
    {
        id: 1,
        title: "Yaris 1.3 2021",
        price: "R$ 80.000,00",
        image: "../../assets/imgs/car_1.jpg",
        audio: "../../assets/audios/car_1.mp3",
        text: "O Yaris 1.3 2021 é um carro compacto que oferece uma combinação de desempenho, economia de combustível e conforto. Com um motor 1.3, ele oferece uma potência adequada para a maioria das condições de tráfego, enquanto a economia de combustível ajuda a reduzir os custos de operação. O interior é espaçoso e bem equipado, com uma variedade de recursos que incluem airbags, controle de estabilidade, freio ABS e sistema de direção hidráulica. O design moderno e aerodinâmico do Yaris 1.3 2021 também é um ponto forte, com uma aparência elegante e sofisticada. Com uma variedade de cores e opções de acabamento, o Yaris 1.3 2021 é um carro que oferece um equilíbrio entre desempenho, economia e estilo.",
    },
    {
        id: 2,
        title: "TOYOTA RAV4 2.5 4X4 16V AUT.",
        price: "R$ 98.725,00",
        image: "../../assets/imgs/car_2.jpg",
        audio: "../../assets/audios/car_2.mp3",
        text: "O Toyota RAV4 2.5 4X4 16V AUT. é um SUV compacto que oferece uma combinação de desempenho, conforto e segurança. Com um motor 2.5, ele oferece uma potência adequada para a maioria das condições de tráfego, enquanto a economia de combustível ajuda a reduzir os custos de operação. O interior é espaçoso e bem equipado, com uma variedade de recursos que incluem airbags, controle de estabilidade, freio ABS e sistema de direção hidráulica. O design moderno e aerodinâmico do Toyota RAV4 2.5 4X4 16V AUT. também é um ponto forte, com uma aparência elegante e sofisticada. Com uma variedade de cores e opções de acabamento, o Toyota RAV4 2.5 4X4 16V AUT. é um carro que oferece um equilíbrio entre desempenho, economia e estilo.",
    },
    {
        id: 3,
        title: "Etios 2016",
        price: "R$ 44.297,00",
        image: "../../assets/imgs/car_3.jpg",
        audio: "../../assets/audios/car_3.mp3",
        text: "O Etios 2016 é um carro compacto que oferece uma combinação de desempenho, economia de combustível e conforto. Com um motor 1.3, ele oferece uma potência adequada para a maioria das condições de tráfego, enquanto a economia de combustível ajuda a reduzir os custos de operação. O interior é espaçoso e bem equipado, com uma variedade de recursos que incluem airbags, controle de estabilidade, freio ABS e sistema de direção hidráulica. O design moderno e aerodinâmico do Etios 2016 também é um ponto forte, com uma aparência elegante e sofisticada. Com uma variedade de cores e opções de acabamento, o Etios 2016 é um carro que oferece um equilíbrio entre desempenho, economia e estilo.",
    },
    {
        id: 4,
        title: "Hilux SW4 V6 gasolina 1995",
        price: "R$ 24.676,00",
        image: "../../assets/imgs/car_4.jpg",
        audio: "../../assets/audios/car_4.mp3",
        text: "O Hilux SW4 V6 gasolina 1995 é um caminhão robusto e versátil que combina força, confiabilidade e conforto. Com um motor V6 de 3.0L, ele oferece uma potência adequada para a maioria das condições de tráfego, enquanto a economia de combustível ajuda a reduzir os custos de operação. O interior é espaçoso e bem equipado, com uma variedade de recursos que incluem airbags, controle de estabilidade, freio ABS e sistema de direção hidráulica. O design moderno e aerodinâmico do Hilux SW4 V6 gasolina 1995 também é um ponto forte, com uma aparência elegante e sofisticada. Com uma variedade de cores e opções de acabamento, o Hilux SW4 V6 gasolina 1995 é um carro que oferece um equilíbrio entre desempenho, economia e estilo.",
    },
];

const car = dados.find((car) => car.id === Number(id));

pageTitle.textContent = car.title;
carImage.src = car.image;
carAudio.src = car.audio;
carPrice.textContent = car.price;
carDescription.textContent = car.text;
