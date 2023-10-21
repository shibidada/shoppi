const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //eslintを閉じる
  lintOnSave: false,
});
