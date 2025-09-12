export type Language = "en" | "fr" | "ar";

interface Metadata {
  title: string;
  description: string;
  keywords: string[];
}

interface PageMetadata {
  [page: string]: {
    [lang in Language]: Metadata;
  };
}

const metaData: PageMetadata = {
  home: {
    en: {
      title: "Unlock potential, Build the future! | WeOne Services",
      description:
        "WeOne Services supports your innovation projects. Incubator, accelerator, coworking, and training to help your business grow.",
      keywords: [
        "weone services",
        "business incubator",
        "startup accelerator",
        "coworking space",
        "training programs",
        "consulting services",
        "innovation support",
      ],
    },
    fr: {
      title: "Libérer le potentiel, bâtir l'avenir ! | WeOne Services",
      description:
        "WeOne Services vous accompagne dans la réalisation de vos projets d'innovation. Incubateur, accélérateur, coworking et formations pour faire évoluer votre entreprise.",
      keywords: [
        "weone services",
        "incubateur",
        "accélérateur startups",
        "espace coworking",
        "formations spécialisées",
        "services de conseil",
        "innovation entreprises",
      ],
    },
    ar: {
      title: "أطلق العنان للإمكانات، وابنِ المستقبل! | WeOne Services",
      description:
        "ترافقك WeOne Services في إنجاز مشاريعك المبتكرة. حاضنة أعمال، مسرّع، فضاء عمل مشترك وتدريبات لتطوير شركتك.",
      keywords: [
        "خدمات weone",
        "حاضنة أعمال",
        "مسرع الشركات الناشئة",
        "مساحة عمل مشتركة",
        "تدريبات متخصصة",
        "خدمات استشارية",
        "دعم الابتكار",
      ],
    },
  },
};

export function getMetaData(
  page: string,
  lang: Language
): Metadata | undefined {
  const pageData = metaData[page];
  return pageData ? pageData[lang] : undefined;
}
