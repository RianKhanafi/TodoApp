const {
  override,
  useBabelRc,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = override(
  (config, env) => {
    return config;
  },
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  useBabelRc(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#508cc8",
        "@border-radius-base": "4px",
        "@box-shadow": "0px",
      },
    },
  })
);
