<template>
  <Layout>
    <div>Hey</div>
    <div v-for="row in $page.allProjects.edges" :key="row.id">
      <g-link :to="'/projects/' + row.node.slug">
        {{ row.node.name }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query Items {
    allProjects {
      edges {
        node {
        	id,
          name,
          slug
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Test"
  }
};
</script>
