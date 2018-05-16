export default {
    pages: {
      '/': { context: { title: 'IndexPage' } },
      '/list':  { context: { title: 'ListPage' } },
    },
    // exportStatic: true,
    exportStatic: {
      htmlSuffix: true,
    }
  };
  