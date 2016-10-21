<template lang='html'>
  <select class='custom-select' v-model='selected'>
    <option v-for='option in options' :value='option[valuePath]'>
      {{option[textPath]}}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: null,
    options: {
      type: Array,
      required: true
    },
    valuePath: {
      type: String,
      default: 'value'
    },
    textPath: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      selected: null
    }
  },
  watch: {
    value () {
      this.selected = this.value
    },
    selected () {
      this.$emit('input', this.selected)
    }
  },
  created () {
    if (this.value) {
      this.selected = this.value
    } else {
      const option = this.options.find(option => option.selected) || this.options[0]
      this.selected = option[this.valuePath]
    }
  }
}
</script>
