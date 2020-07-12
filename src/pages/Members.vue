<template>
  <Layout>
    <div v-for="member in $page.members.edges" :key="member.node.id">
      <g-link :to="'/members/' + member.node.slug">
        {{ member.node.first_name }} {{ member.node.last_name }} -
        {{ member.node.twitter_handle }}
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
          first_name,
          last_name,
          slug,
          twitter_handle
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
