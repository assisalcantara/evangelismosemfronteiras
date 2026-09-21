import { ActionCardItem } from "@/types";

export const featuredProjectData = {
  badge: "PROJETO",
  titlePrefix: "Amor que alcança realidades",
  titleHighlight: "e constrói futuros",
  logo: {
    src: "/images/logo_sertao.png",
    alt: "Logomarca Oficial do Projeto Sertão sem Fronteiras",
    width: 480,
    height: 320,
  },
  description:
    "O projeto Sertão sem Fronteiras é uma iniciativa de amparo, educação, capacitação e cuidado com a comunidade, que será implantada ao lado do Templo no Distrito Casa de Pedra, em Pentecoste – Ceará, e servirá de modelo para toda a região Nordeste.",
  cta: {
    text: "Saiba mais sobre o projeto",
    href: "#sertao-sem-fronteiras",
  },
  quote: {
    text: "Mais que um projeto, é um futuro para o nosso povo.",
    author: "SERTÃO SEM FRONTEIRAS",
  },
  image: {
    src: "/images/image03.png",
    alt: "Crianças sorridentes - Projeto Sertão sem Fronteiras",
    isIllustrative: true,
  },
};

export const actionCardsData: ActionCardItem[] = [
  {
    id: "amparo-crianca",
    title: "Amparo à Criança",
    iconBgColor: "bg-category-child",
    iconName: "GraduationCap",
    imageSrc: "/images/img1.png",
    imageAlt: "Crianças em ambiente escolar e aprendizado",
    features: [
      "Creche com pedagogos",
      "Alimentação gratuita",
      "Material escolar",
      "Desenvolvimento infantil",
    ],
  },
  {
    id: "jovens-adolescentes",
    title: "Jovens e Adolescentes",
    iconBgColor: "bg-category-youth",
    iconName: "Monitor",
    imageSrc: "/images/img2.png",
    imageAlt: "Jovens em sala de tecnologia e inclusão digital",
    features: [
      "Laboratório de informática",
      "Cursos profissionalizantes",
      "Inclusão digital",
      "Preparação para o futuro",
    ],
  },
  {
    id: "terceira-idade",
    title: "Terceira Idade",
    iconBgColor: "bg-category-elderly",
    iconName: "UsersRound",
    imageSrc: "/images/img3.png",
    imageAlt: "Idosa acolhida e sorridente no sertão",
    features: [
      "Acompanhamento e acolhimento",
      "Orientação nutricional",
      "Ações de saúde",
      "Convivência e dignidade",
    ],
  },
  {
    id: "acoes-sociais",
    title: "Ações Sociais Trimestrais",
    iconBgColor: "bg-category-social",
    iconName: "Heart",
    imageSrc: "/images/cards/acoes-saude.jpg",
    imageAlt: "Atendimento médico e comunitário no sertão",
    features: [
      "Atendimento médico e odontológico",
      "Serviços de cabeleireiros",
      "Atendimento psicológico",
      "Cestas básicas",
      "Palestras educativas",
    ],
  },
];
