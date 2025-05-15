<script setup>
import { ref } from "vue";
let header = ref("header top");
let message = ref("Hello");
let link = ref("<a href='/'>Ссыла</a>");

message.value = "Hello & welcome  ";
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
