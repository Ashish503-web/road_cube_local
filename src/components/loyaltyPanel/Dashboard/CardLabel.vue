<template>
  <h4
    class="subtitle-2 font-weight-regular text--secondary"
    align="end"
  >
    {{  label }}
  </h4>
</template>

<script>
export default {
  props: ['label'],
  name: "CardLabel"
}
</script>