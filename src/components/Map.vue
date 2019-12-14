<template>
  <section id="second">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="col">
            <h1 class="map__title">
              Our Offices
            </h1>
          </div>
          <div class="col-12 p-0">
            <ul class="nav flex-sm-row flex-column">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-city="Kyiv"
                  @click="changeCity">
                  Kyiv
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-city="NewYork"
                  @click="changeCity">
                  New York
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-city="Guangzhou"
                  @click="changeCity"
                  >Guangzhou</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  data-city="Barcelona"
                  @click="changeCity"
                  >Barcelona</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12">
            <h1 class="map__company">Global Message Services Ukraine LLC</h1>
          </div>
          <div class="col">
            <div class="map__subtitle">
              <p>Kuiv, Stepan Bandera, 33</p>
              <p>02066</p>
              <p>Ukraine</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 p-0">
          <google-map :city="city" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleMap from "./GoogleMap";

export default {
  name: "Second",
  components: { GoogleMap },
  data() {
    return {
      city: "Kyiv",
    };
  },
  methods: {
    changeCity(event) {
      event.preventDefault();
      let city = event.target.getAttribute("data-city");
      this.city = city;
      event.target.isActive = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#second {
  background: url("../assets/map_back.png");
  color: white;
  width: 100%;
}
.map__title {
  font-family: "Suisse Intl", sans-serif;
  font-size: 34px;
  font-weight: 300;
  line-height: 48px;
  margin-top: 50px;
}
.nav-item {
  font-family: "Suisse Intl - Semi Bold", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 50px;
  text-transform: uppercase;
}
.nav-link {
  color: white;
}
.nav-link:focus {
  color: #3db565;
}
.active {
  color: #3db565;
}
.map__company {
  font-family: "Suisse Intl", sans-serif;
  font-size: 26px;
  font-weight: 300;
  letter-spacing: 1.18px;
  line-height: 25px;
  margin-bottom: 50px;
}
.map__subtitle {
  font-family: "Myriad Pro", sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 10px;
  margin-bottom: 50px;
}
</style>
