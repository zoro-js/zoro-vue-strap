<template lang='html'>
  <select class='custom-select' :multiple='multiple' v-model='selected'>
    <option v-for='(option, index) of options' :value='option'>
      {{option.text}}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: null,
    multiple: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: null
    }
  },
  watch: {
    value () {},
    selected () {
      this.$emit('input', this.selected)
    }
  },
  created () {
    if (this.multiple) {
      this.selected = this.options.filter(option => option.selected)
    } else {
      this.selected = this.options.find(option => option.selected) || this.options[0]
    }
  }
}
</script>
