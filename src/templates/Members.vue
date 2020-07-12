<template>
  <Layout>
    <div>
      <h1>{{ $page.member.first_name }}</h1>
      <h2>{{ $page.member.last_name }}</h2>
      <h2>{{ $page.member.github_url }}</h2>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    member: members (path: $path) {
      first_name
      last_name
      github_url
    }
  }
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout,
  },
  metaInfo() {
    return {
      title: this.$page.member.first_name,
    };
  },
};
</script>
