<template>
  <Layout>
    <div>Hey</div>
    <div v-for="row in $page.allMembers.edges" :key="row.id">
      <g-link :to="'/members/' + row.node.slug">
        {{ row.node.first_name }} - {{ row.node.twitter_handle }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query Items {
    allMembers {
      edges {
        node {
        	id,
          first_name,
          last_name,
          twitter_handle,
          github_url,
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
