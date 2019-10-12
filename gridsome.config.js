// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: "1Fx769sYItpDDIeR8ujf8SzxJz1pBRHj9bhzHP4p1EoE",
        apiKey: "AIzaSyBRc0sO45iLKdjYZ9JnAlaNQHPWgzzwg0k"
      }
    }
  ]
};
