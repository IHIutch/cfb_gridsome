// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  templates: {
    members: [
      {
        path: "/members/:id",
        component: "./src/templates/MemberPage"
      }
    ],
    projects: [
      {
        path: "/projects/:id",
        component: "./src/templates/ProjectPage"
      }
    ]
  },
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        apiKey: "AIzaSyBr5fG-i9As37hpE8INSqKVHhcISoVs4Ig",
        spreadsheets: [
          {
            spreadsheetId: "1Fx769sYItpDDIeR8ujf8SzxJz1pBRHj9bhzHP4p1EoE",
            sheets: [
              {
                sheetName: "Sheet1",
                collectionName: "members"
              },
              {
                sheetName: "Sheet2",
                collectionName: "testing"
              }
            ]
          },
          {
            spreadsheetId: "1hYkxGD-auEysouVqbTWisNmJub4b15jfoXxAAs0t1DI",
            sheets: [
              {
                sheetName: "Sheet1",
                collectionName: "projects"
              }
            ]
          }
        ]
      }
    }
  ]
};
