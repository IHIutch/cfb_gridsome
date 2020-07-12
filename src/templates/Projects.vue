<template>
  <Layout>
    <div>
      <h1>{{ $page.project.name }}</h1>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    project: projects (path: $path) {
      name
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
      title: this.$page.project.name,
    };
  },
};
</script>
