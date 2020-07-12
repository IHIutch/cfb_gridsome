<template>
  <div>
    <header>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav>
        <g-link to="/projects">Projects</g-link>
        <g-link to="/members">Members</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "DefaultLayout",
};
</script>
