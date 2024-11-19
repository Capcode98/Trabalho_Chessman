const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") || 1;
const pageTitle = document.getElementById("page-title");
const blogImage = document.getElementById("blog-image");
const blogDate = document.getElementById("blog-date");
const blogText = document.getElementById("blog-text");

const dados = [
    {
        id: 1,
        title: "Dicas essenciais de manutenção preventiva para seu carro",
        date: "12/11/2024",
        image: "../../assets/imgs/blog_1.jpg",
        text: "A manutenção preventiva é fundamental para garantir a durabilidade e o bom funcionamento do seu veículo. Neste artigo, apresentamos dicas essenciais que todo proprietário de carro deve seguir. Primeiro, mantenha sempre em dia a troca de óleo e filtros, seguindo as recomendações do manual do proprietário. Verifique regularmente os níveis de fluidos, incluindo óleo do motor, líquido de arrefecimento e fluido de freio. Não se esqueça de checar a pressão e o desgaste dos pneus mensalmente. A verificação das pastilhas e discos de freio também é crucial para sua segurança. Mantenha as revisões programadas em dia, seguindo o calendário recomendado pela montadora. Fique atento a ruídos estranhos e vibrações, pois podem indicar problemas mecânicos. Por fim, mantenha seu carro limpo e protegido das intempéries. Seguindo estas dicas, você prolongará a vida útil do seu veículo e evitará gastos desnecessários com reparos maiores.",
    },
    {
        id: 2,
        title: "Como economizar combustível: 10 dicas práticas",
        date: "10/11/2024",
        image: "../../assets/imgs/blog_2.jpg",
        text: "Economizar combustível é uma preocupação constante para os motoristas, especialmente em um mundo onde os preços dos combustíveis estão em constante mudança. A seguir, listamos 10 dicas práticas que podem ajudar a reduzir o consumo de combustível do seu veículo. Primeiro, mantenha as rodas alinhadas e as direções corretamente ajustadas, o que pode melhorar a eficiência do veículo. Ajuste a pressão dos pneus de acordo com as recomendações do fabricante, o que pode reduzir a resistência ao rolamento e, consequentemente, o consumo de combustível. Evite acelerar e frear abruptamente, preferindo um condução suave e contínua. Utilize o cinto de segurança e mantenha o carro em bom estado de conservação, evitando que o ar condicionado funcione desnecessariamente. Por fim, planeje suas rotas, evitando trajetos congestionados e utilizando vias alternativas sempre que possível. Implementando essas dicas, você pode ver uma redução significativa no consumo de combustível do seu veículo.",
    },
    {
        id: 3,
        title: "Os melhores carros para viagens longas em família",
        date: "08/11/2024",
        image: "../../assets/imgs/blog_3.jpg",
        text: "Viagens longas com a família podem ser uma experiência incrível, mas também exigirão cuidados especiais com o veículo. A seguir, apresentamos uma lista dos melhores carros para viagens longas em família, considerando fatores como conforto, segurança e capacidade de carga. O primeiro lugar na nossa lista é o Toyota Highlander, conhecido por seu espaço interior amplo e conforto de viagem. O Honda Odyssey é outro excelente opção, com uma variedade de opções de assentos e recursos de entretenimento. O Ford Explorer oferece uma combinação de espaço, desempenho e segurança, enquanto o Chevrolet Traverse é ideal para viagens com crianças, com um design interior projetado para segurança e conforto. Por fim, o Nissan Pathfinder é uma escolha robusta e versátil, com um design interior moderno e recursos de segurança avançados. Escolher um desses carros para suas férias de verão pode tornar sua viagem mais segura, confortável e divertida para toda a família.",
    },
    {
        id: 4,
        title: "Como escolher o combustível ideal para o seu carro",
        date: "06/11/2024",
        image: "../../assets/imgs/blog_4.jpg",
        text: "Escolher o combustível ideal para o seu carro é essencial para garantir o desempenho e a durabilidade do veículo. A seguir, apresentamos algumas dicas para ajudá-lo a fazer a escolha correta. Primeiro, verifique o tipo de combustível recomendado pelo fabricante do seu veículo. Em muitos casos, isso será indicado no manual do proprietário ou na tampa do tanque. Se você não tem acesso ao manual, procure no veículo ou entre em contato com a montadora. Em segundo lugar, considere a região onde você conduz seu carro com mais frequência. Alguns tipos de combustível são mais comuns em certas regiões, devido à infraestrutura de distribuição e às características do petróleo refinado local. Por fim, fique atento às condições climáticas, pois elas podem influenciar a escolha do combustível ideal. Em regiões com temperaturas muito baixas, como zonas de inverno, pode ser mais vantajoso usar um combustível com aditivos anticongelantes. Ao seguir essas dicas, você poderá escolher o combustível ideal para o seu carro e garantir um desempenho eficiente e seguro.",
    }
];

const blog = dados.find((blog) => blog.id === Number(id));

pageTitle.textContent = blog.title;
blogImage.src = blog.image;
blogDate.textContent = blog.date;
blogText.textContent = blog.text;

