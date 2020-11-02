module.exports = {
  //index.phpとindex.htmlの階層分けないといけない時はpublicPath,assetsDir等を書き換え
  // publicPath: process.env.NODE_ENV === "production" ? "/public/" : "/",
  outputDir: "./../product/public",
  devServer: {
    host: "localhost",
    proxy: "http://localhost:8888",
  },
};
