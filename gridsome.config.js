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
        component: "./src/templates/MemberPage"
      }
    ],
    projects: [
      {
        path: "/projects/:slug",
        component: "./src/templates/ProjectPage"
      }
    ]
  },
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        apiKey: "AIzaSyBRc0sO45iLKdjYZ9JnAlaNQHPWgzzwg0k",
        spreadsheets: [
          {
            templateName: "members",
            spreadsheetId: "1Fx769sYItpDDIeR8ujf8SzxJz1pBRHj9bhzHP4p1EoE"
          },
          {
            templateName: "projects",
            spreadsheetId: "1hYkxGD-auEysouVqbTWisNmJub4b15jfoXxAAs0t1DI"
          }
        ]
        // sheets: ["Sheet1", "Sheet2"]
      }
    }
  ]
};
