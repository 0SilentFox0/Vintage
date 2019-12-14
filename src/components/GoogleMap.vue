<template>
  <GmapMap
    :center="center[city]"
    :zoom="12"
    ref="mapRef"
    map-type-id="terrain"
    style="width: 100%; height: 450px"
    :options="mapStyle"
  >
    <GmapMarker
      :position="center[city]"
      class="marker"
      :clickable="true"
      :draggable="true"
      :icon="{ url: require('../assets/icon.png') }"
      @click="center = marker.position"
    />
  </GmapMap>
</template>

<script>
import style from "../assets/googleMapStyle";
export default {
  props: {
    city: String
  },
  data() {
    var mapStyle = style;
    let center = {
      Kyiv: { lat: 50.431782, lng: 30.516382 },
      NewYork: { lat: 40.73061, lng: -73.935242 },
      Guangzhou: { lat: 23.128994, lng: 113.25325 },
      Barcelona: { lat: 41.390205, lng: 2.154007 }
    };
    let marker = {
      position: { lat: center[this.city].lat, lng: center[this.city].lng }
    };
    return {
      center: center,
      marker: marker,
      mapStyle: { styles: mapStyle, disableDefaultUI: true }
    };
  },
};
</script>

<style lang="scss">
.marker {
  border-radius: 50%;
  background: #3db565;
  width: 20px;
  height: 20px;
}
</style>
