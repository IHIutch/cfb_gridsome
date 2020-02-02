<template>
  <Layout>
    <div>Hey</div>
    <div v-for="row in $page.allProjects.edges" :key="row.id">
      <g-link :to="'/projects/' + row.node.id">
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
