<template>
  <section id="second">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <h1 class="map__title">
                Our Offices
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="row">
              <div class="col">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Kyiv</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">New York</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Guangzhou</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Barcelona</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1 class="global">Global Message Services Ukraine LLC</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="subtitle">
                <p>Kuiv, Stepan Bandera, 33</p>
                <p>02066</p>
                <p>Ukraine</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <google-map />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleMap from "./GoogleMap";
export default {
  name: "Second",
  components: { GoogleMap }
};
</script>

<style scoped>
#second {
  width: 100%;
  background: url("../assets/map_back.png");
  color: white;
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
  font-size: 11px;
  font-weight: 400;
  line-height: 72.34px;
  text-transform: uppercase;
}

.nav-link {
  color: white;
}

.active {
  color: #3db565;
}

.global {
  font-family: "Suisse Intl", sans-serif;
  font-size: 26px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 1.18px;
  margin-bottom: 50px;
}

.subtitle {
  font-family: "Myriad Pro", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 5px;
  letter-spacing: 0.5px;
}
</style>
