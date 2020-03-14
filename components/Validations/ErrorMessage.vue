<template>
  <small>
    <strong>{{ message }}.</strong>
  </small>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style>
.is-invalid label {
  color: darkred;
}

.is-invalid input {
  border-color: darkred;
  outline: none;
}

.is-invalid small  {
  color: darkred;
}

input:focus {
  outline: none !important;
}
</style>
