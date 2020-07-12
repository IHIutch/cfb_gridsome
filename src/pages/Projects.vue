<template>
  <Layout>
    <div v-for="project in $page.projects.edges" :key="project.id">
      <g-link :to="'/projects/' + project.node.id">
        {{ project.node.name }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query {
    projects: allProjects {
      edges {
        node {
        	id,
          name
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Test",
  },
};
</script>
