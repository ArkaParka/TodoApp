<template>
  <div id="dynamic-component-demo" class="demo">
    <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-button', { active: currentTab.name === tab.name }]"
        @click="changeTab(tab)"
    >
      {{ tab.name }}
    </button>

    <component :is="currentTab.component" class="tab"></component>
  </div>
</template>

<script>
  const tabs = [
    {
      name: "Home",
      component: {
        template: "<div>Home component</div>"
      }
    },
    {
      name: "Posts",
      component: {
        template: "<div>Posts component</div>"
      }
    },
    {
      name: "Archive",
      component: {
        template: "<div>Archive component</div>"
      }
    }
  ];

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
      tabs: tabs
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
      this.$emit('onClick', tab);
    },
  },
  computed: {
    currentTab: {
      get: function () {
        return !this.page ? tabs[0] : tabs.filter(tab => tab.name === this.page).pop();
      },
      set: function (newVal) {
        this.page = newVal.name;
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
