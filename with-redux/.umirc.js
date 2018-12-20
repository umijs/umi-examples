
export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: false,
        antd: true
      }
    ],
    "./umi-plugin-entry.js"
  ]
};
