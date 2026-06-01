<!--
  Root Application Component
  
  This is the main app component that contains the router view.
  All page components are rendered through the router-view.
  
  The structure is simple:
  - Router view renders the current page based on the URL
-->

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// No logic needed in the root component
// All routing is handled by Vue Router
</script>

<style>
/* App-specific styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>