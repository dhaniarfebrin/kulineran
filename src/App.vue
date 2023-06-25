<script setup>
import FooterComponent from './components/FooterComponent.vue';  
</script>

<template>
  <div class="h-100 d-flex flex-column">
    <router-view/>
    <FooterComponent />
  </div>
</template>
