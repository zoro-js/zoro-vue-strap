<template lang='html'>
  <div class='pager' v-show='size>1'>
    <div class='wrap clearfix' style='display:inline-block;'>
      <ul class='pagination m-y-0'>
        <!-- prev -->
        <li class='page-item' :class='{disabled:current===1}'>
          <a v-if='current!==1'
            href='javascript:void(0)'
            class='page-link'
            @click='nav(current-1)'>{{prevText}}</a>
          <span v-else class='page-link'>{{prevText}}</span>
        </li>
        <!-- middles -->
        <template v-if='size > sizeLimit'>
          <li class='page-item' :class='{active:current===1}'>
            <a href='javascript:void(0)' class='page-link' @click='nav(1)'>1</a>
          </li>
          <li v-if='begin > 2' class='page-item disabled'>
            <span class='page-link'>...</span>
          </li>
          <li v-for='i of (end-begin+1)'
            class='page-item'
            :class='{active:current===(i-1+begin)}'>
            <a href='javascript:void(0)' class='page-link' @click='nav(i-1+begin)'>{{i-1+begin}}</a>
          </li>
          <li v-if='end < size -1' class='page-item disabled'>
            <span class='page-link'>...</span>
          </li>
          <li class='page-item' :class='{active:current===size}'>
            <a href='javascript:void(0)' class='page-link' @click='nav(size)'>{{size}}</a>
          </li>
        </template>
        <template v-else>
          <li v-for='i of size' class='page-item' @class='{active:current===i}'>
            <a href='javascript:void(0)' class='page-link' @click='nav(i)'>{{i}}</a>
          </li>
        </template>
        <!-- next -->
        <li class='page-item' :class='{disabled:current===size}'>
          <a v-if='current!==size'
            href='javascript:void(0)'
            class='page-link'
            @click='nav(current+1)'>{{nextText}}</a>
          <span v-else class='page-link'>{{nextText}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let counter = 1
const notNumReg = /[^0-9]/g

export default {
  name: 'Pager',
  props: {
    id: {
      type: String,
      default: 'Pager-' + (counter++)
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 5
    },
    padding: {
      type: Number,
      default: 2
    },
    sizeLimit: {
      type: Number,
      default: 9
    },
    prevText: {
      type: String,
      default: '前一页'
    },
    nextText: {
      type: String,
      default: '后一页'
    }
  },
  data () {
    return {
      current: 1,
      begin: 1,
      end: 1
    }
  },
  computed: {
    size () {
      return Math.ceil(this.total / this.limit)
    },
    validJump () {
      const jump = this.jump
      return typeof jump === 'number' && jump > 0 && jump <= this.size && jump !== this.current
    }
  },
  watch: {
    jump (newValue, oldValue) {
      if (typeof newValue === 'string') {
        newValue = newValue.replace(notNumReg, '')
        if (newValue !== '') {
          newValue = parseInt(newValue)
        }
        this.jump = newValue
      }
    },
    total () {
      this.calcSize()
    },
    limit () {
      this.calcSize()
    },
    current () {
      this.calcSize()
    }
  },
  methods: {
    calcSize () {
      if (this.current > this.size) {
        this.current = 1
      }
      this.begin = this.current - this.padding
      this.end = this.current + this.padding
      if (this.begin < 2) {
        this.begin = 2
      }
      if (this.end > this.size - 1) {
        this.end = this.size - 1
      }
      if (this.current - this.begin <= 1) {
        this.end = this.begin + this.padding * 2
      }
      if (this.end - this.current <= 1) {
        this.begin = this.end - this.padding * 2
      }
    },
    jump () {
      const jump = this.jump
      if (typeof jump === 'number') {
        this.nav(jump)
      }
      this.jump = ''
      this.$refs.jump.focus()
    },
    nav (page) {
      if (page < 1 || page > this.total || page === this.current) {
        return
      }
      this.current = page
      this.$emit('nav', {
        total: this.total,
        current: this.current,
        limit: this.limit,
        offset: this.limit * (this.current - 1)
      })
    }
  },
  created () {
    this.calcSize()
  }
}
</script>
