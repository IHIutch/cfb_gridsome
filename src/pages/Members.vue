<template>
  <Layout>
    <div>Hey</div>
    <div v-for="member in $page.members.edges" :key="member.node.id">
      <g-link :to="'/members/' + member.node.id">
        {{ member.node.id }} - {{ member.node.twitter_handle }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query {
    members: allMembers {
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
