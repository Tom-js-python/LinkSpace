<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/">About</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
