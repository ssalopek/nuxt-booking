<template>
  <div style="text-align: center">
    <img
      style="
        margin-top: 16px;
        margin-bottom: 32px;
      "
      src="https://www.argildx.com/wp-content/uploads/2017/06/Is-a-Misconfigured-%E2%80%9CPage-Not-Found%E2%80%9D-Jeopardizing-Your-Website.jpg"
    />
    <br />
    {{ error.message }} {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "ERROR",
    };
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>