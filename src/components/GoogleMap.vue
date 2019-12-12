<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width: 100%; height: 100%"
      :options="{styles: styles}"
      map-type-id="terrain"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import json from "../assets/googleMapStyle";
export default {
  name: "GoogleMap",
  data() {
    return {
      styles: [json],
      center: { lat: 50.45466, lng: 30.5238 },
      // center: [{
      //   Kyiv: {lat: 50.45466, lng: 30.5238},
      //   NewYork: { lat: 40.730610, lng: -73.935242},
      //   Guangzhou: { lat: 23.128994, lng: 113.253250},
      //   Barcelona: { lat: 41.390205, lng: 2.154007},
      // }
      // ],
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
  }
};
</script>

<style scoped></style>
