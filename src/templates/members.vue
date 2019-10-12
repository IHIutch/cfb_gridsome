<template>
  <Layout>
    <div>
      <h1>{{ $page.members.first_name }}</h1>
      <h2>{{ $page.members.last_name }}</h2>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    members (path: $path) {
      first_name,
      last_name
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.members.first_name
    };
  }
};
</script>
