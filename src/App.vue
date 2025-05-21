<script setup>
import Stat from "./components/Stat.vue";
import Button from "./components/Button.vue";

const data = {
  label: "Влажность",
  value: "89%",
};
</script>
<template>
  <main class="main">
    <Stat v-bind="data" />
    <Stat label="Осадки" value="0%" />
    <Button>Сохранить</Button>
  </main>
</template>

<style lang="scss" scoped>
.main {
  background-color: var(--color-bg-main);
  padding: 60px 50px;
  border: none;
  border-radius: 25px;
}

h1 {
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 400;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.3);
}
</style>
