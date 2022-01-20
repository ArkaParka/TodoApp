<template>
  <div id="dynamic-component-demo" class="demo">
    <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="changeTab(tab)"
    >
      {{ tab }}
    </button>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("tab-home", {
  template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
  template: "<div>Posts component</div>"
});
Vue.component("tab-archive", {
  template: "<div>Archive component</div>"
});

export default {
  name: "DynamicComponent",
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      tabs: ["Home", "Posts", "Archive"]
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
      this.$emit('onClick', tab);
    },
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    },
    currentTab: {
      get: function () {
        return !this.page ? 'Home' : this.page;
      },
      set: function (newVal) {
        this.page = newVal;
      }
    }
  }
}
</script>

<style scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
