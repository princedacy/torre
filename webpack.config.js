module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/scss/style.scss";
          `
        }
      }
    }
  };