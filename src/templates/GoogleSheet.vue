<template>
  <Layout>
    <div>
      <h1>{{ $page.googleSheet.title }}</h1>
      <h2>Current Language: {{ lang }}</h2>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    googleSheet (path: $path) {
      title,
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
      title: this.$page.googleSheet.title
    };
  }
};
</script>
