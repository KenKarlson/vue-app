<script setup>
import { ref } from "vue";
let header = "header top";
let message = "Hello";
let link = ref("<a href='/'>Ссыла</a>");
</script>
<template>
  <div>
    <header class="header">{{ header }}</header>
    {{ message }}
    <div v-html="link"></div>
    <footer class="footer">footer</footer>
  </div>
</template>

<style scoped></style>
