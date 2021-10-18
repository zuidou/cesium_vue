<template>
  <div class="bodycontainer">
    <router-view />
  </div>
</template>

<style lang="scss">
// 设置 div内外边距为0
* {
  padding: 0;
  margin: 0;
}
//解决body 设置高度无效的问题 必须要存在的
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bodycontainer {
  height: 100%;
}
</style>
