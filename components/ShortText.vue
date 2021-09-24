<template>
  <span>
    {{ displayText }}
    <button
      class="link"
      v-if="isTooLong && !isExpanded"
      @click="isExpanded = true"
      type="button"
    >
      Read More
    </button>
    <button
      class="link"
      v-if="isTooLong && isExpanded"
      @click="isExpanded = false"
      type="button"
    >
      Read Less
    </button>
  </span>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      chunks: [],
    };
  },

  props: {
    text: {
      type: String,
      required: true,
    },
    target: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isTooLong() {
      return this.chunks.length === 2;
    },
    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.chunks.join(" ");
      }
      return this.chunks[0] + "...";
    },
  },

  created() {
    this.chunks = this.getChunks();
  },

  methods: {
    getChunks() {
      const position = this.text.indexOf(" ", this.target);
      if (this.text.length <= this.target || position === -1) {
        return [this.text];
      }
      return [this.text.substring(0, position), this.text.substring(position)];
    },
  },
};
</script>

<style scoped>
.link {
  color: blue;
  background-color: white;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

.link:focus {
  border: none;
  outline: none;
}
</style>