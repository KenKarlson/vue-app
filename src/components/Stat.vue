<script setup></script>
<template>
  <div class="stat">
    <div class="stat__name">Влажность</div>
    <div class="stat__value">90%</div>
  </div>
</template>
<style lang="scss" scoped>
.stat{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.stat__name{  
  font-weight: 700;
}
.stat__value{
  font-weight: 500;
}
</style>