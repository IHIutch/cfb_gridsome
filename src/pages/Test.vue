<template>
  <Layout>
    <div>Hey</div>
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
    title: "Products"
  }
};
</script>
