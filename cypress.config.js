const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl : 'https://jsonplaceholder.typicode.com' // baseUrl'i yazarken tırnak içinde boşluk vs olmasın kod hata veriyor
      baseUrl : 'https://restful-booker.herokuapp.com'
  },
});
