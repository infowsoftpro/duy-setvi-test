const routes = {
  home: {
    value: '/',
    create: {
      value: '/create'
    },
    details: {
      value: (id: number) => `/details/${id}`
    }
  }
}

export default routes
