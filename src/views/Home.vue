<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import * as Cesium from "cesium";
import "../assets/cesium/Build/Cesium/Widgets/widgets.css";

export default {
  name: "Home",
  components: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //替换自己的token
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Y2E5N2NmOS00YTNkLTQ4ZWUtOWI0NC1jNWRjNjZlMTM0NjQiLCJpZCI6MzYxODcsImlhdCI6MTYzNDU1Njc0NH0.CK6UsbUy7Z-CqKHJrRZSijYk6tOjPeYwazdEWN4Yr8Y";
      let viewer = new Cesium.Viewer("cesiumContainer");
      viewer._cesiumWidget._creditContainer.style.display = "none"; // 隐藏版权
    },
  },
};
</script>
<style lang="scss" scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>