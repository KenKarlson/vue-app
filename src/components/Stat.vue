<script setup>
const { label, value } = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="stat">
    <div class="stat__name">{{ label }}</div>
    <div class="stat__value">{{ value }}</div>
  </div>
</template>
<style lang="scss" scoped>
.stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  text-transform: uppercase;
  gap: 16px;
}
.stat__name {
  font-weight: 700;
}
.stat__value {
  font-weight: 500;
}
</style>
