<script setup></script>
<template>
  <button class="button"><slot></slot></button>
</template>
<style scoped>
.button {
  border: none;
  border-radius: 10px;
  background: var(--gradient);
  padding: 14px;
  font-family: var(--font);

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: right;

  color: var(--color-primart);
  cursor: pointer;
}
.button:hover {
  background: var(--gradient-inventory);
}
</style>
