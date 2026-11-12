import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Píldoras",
    tags: "Etiquetas",
    about: "Sobre mí",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte esta píldora:",
    sharePostOn: "Compartir en {{platform}}",
    sharePostViaEmail: "Compartir por correo",
    tagLabel: "Etiquetas",
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
      cncf: "CNCF",
      "system-design": "Diseño de sistemas",
      go: "Go",
      "aws-terraform": "AWS + Terraform",
      kubernetes: "Kubernetes",
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
    heroTitle: "$ learn --random",
    heroIntro:
      "Píldoras breves (5 minutos o menos) sobre Kubernetes, Go, Terraform/AWS, proyectos CNCF y diseño de sistemas.",
    heroSub:
      "Los temas se eligen al azar para sacarme de mi zona de confort. Aprender, practicar, repetir.",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas las etiquetas usadas en las píldoras.",

    postsTitle: "Píldoras",
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
