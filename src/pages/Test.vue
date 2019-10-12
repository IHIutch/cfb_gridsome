<template>
  <Layout>
    <div>Hey</div>
    <div v-for="row in $page.allGoogleSheet.edges" :key="row.id">
      {{ row.node.title }}
    </div>
  </Layout>
</template>

<page-query>
  query Items {
    allGoogleSheet {
      edges {
        node {
        	id,
          title,
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
