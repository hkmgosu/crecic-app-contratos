export const appRoutes = {
  index: {
    selectedIndex: 0,
    home: {
      href: "/"
    }
  },
  contratos: {
    home: {
      href: "/contratos",
      as: "/contratos"
    },
    new: {
      href: "/contratos/nuevo",
      as: "/contratos/nuevo"
    },
    edit: {
      href: "/contratos/editar/:id",
      as: "/contratos/editar/:id"
    },
    view: {
      href: "/contratos/ver/:id",
      as: "/contratos/ver/:id"
    },
    selectedIndex: 1
  },
  contadores: {
    home: {
      href: "/contadores",
      as: "/contadores"
    },
    new: {
      href: "/contadores/nuevo",
      as: "/contadores/nuevo"
    },
    edit: {
      href: "/contadores/editar/:id",
      as: "/contadores/editar/:id"
    },
    view: {
      href: "/contadores/ver/:id",
      as: "/contadores/ver/:id"
    },
    selectedIndex: 2
  }
};
