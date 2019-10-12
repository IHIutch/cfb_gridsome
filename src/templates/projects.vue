<template>
  <Layout>
    <div>
      <h1>{{ $page.projects.name }}</h1>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    projects (path: $path) {
      name,
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
      title: this.$page.projects.name
    };
  }
};
</script>
