<template>
  <Layout>
    <div class="text-red-500">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <g-image alt="Example image" src="~/favicon.png" width="135" />

      <h1>Hello, world!</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>

      <p>
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
          >Gridsome Docs</a
        >
        <a
          href="https://github.com/gridsome/gridsome"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "HomePage",
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
