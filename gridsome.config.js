// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  templates: {
    members: [
      {
        path: "/members/:slug",
      },
    ],
    projects: [
      {
        path: "/projects/:slug",
      },
    ],
  },
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        apiKey: "AIzaSyAx5wvcMW52cVEjOBYhbAhBKLfroeAWBRk",
        spreadsheets: [
          {
            spreadsheetId: "1Fx769sYItpDDIeR8ujf8SzxJz1pBRHj9bhzHP4p1EoE",
            sheets: [
              {
                sheetName: "Members",
                collectionName: "members",
              },
              {
                sheetName: "Projects",
                collectionName: "projects",
              },
            ],
          },
        ],
      },
    },
  ],
};
