import type { UIStrings } from "../types";

export default {
  analytics: {
    title: "Privacidad de analítica",
    description:
      "¿Podemos usar cookies de Google Analytics para entender cómo se utiliza este blog? Tu elección solo afecta a la analítica y puedes cambiarla en cualquier momento.",
    accept: "Aceptar analítica",
    reject: "Rechazar analítica",
    settings: "Ajustes de analítica",
  },
  nav: {
    home: "Inicio",
    posts: "Pills",
    tags: "Tags",
    about: "About",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte esta píldora:",
    sharePostOn: "Compartir en {{platform}}",
    sharePostViaEmail: "Compartir por correo",
    tagLabel: "Tags",
    backToTop: "Volver arriba",
    tableOfContents: "Índice",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Píldora anterior",
    nextPost: "Siguiente píldora",
    minRead: "min de lectura",
    levels: {
      intro: "Introducción",
      intermediate: "Intermedio",
      advanced: "Avanzado",
    },
    categories: {
      go: "Go",
      kubernetes: "Kubernetes",
      observability: "Observabilidad",
    },
    discussOnLinkedin: "Comenta en LinkedIn",
    readInOtherLanguage: "Read in English",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    socialLinks: "Redes",
    featured: "Destacadas",
    recentPosts: "Últimas píldoras",
    allPosts: "Todas las píldoras",
    heroTitle: "$ learn --cloud-native",
    heroIntro:
      "Píldoras breves (5 minutos o menos) sobre Go, Kubernetes y observabilidad, especialmente OpenTelemetry.",
    heroSub:
      "Ideas concretas del ecosistema cloud native, contadas en pequeñas dosis.",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Tags",
    tagsDesc: "Todas las etiquetas usadas en las píldoras.",

    postsTitle: "Pills",
    postsDesc: "Todas las píldoras publicadas.",

    archivesTitle: "Archivo",
    archivesDesc: "Todas las píldoras archivadas por fecha.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    skipTableOfContents: "Saltar el índice",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar píldoras...",
    noResults: "Sin resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
