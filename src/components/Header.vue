<template>
  <header id="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="header__contacts">
            Contacts
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="header__subtitle d-flex">
            <p class="header__subtitle-green-text">GMS</p>
            Headquarters
          </div>
          <div class="d-flex flex-column flex-md-row">
            <div class="d-flex flex-column header__text-left">
              <div class="header__text">
                Global Message Services Ukraine LLC Bundesstrasse 5 | 3rd Floor<br>
                6300 Zug <br>
                Switzerland
              </div>
              <a class="header__telephone" href="tel:+41 41 544 62 00">
                +41 41 544 62 00
              </a>
            </div>
            <div class="header__text-right">
              <p class="text-right__default">Email</p>
              <p class="text-right__green">info@gms-worldwide.com</p>
              <p class="text-right__default">Send message</p>
              <p class="text-right__green">Viber us</p>
              <p class="text-right__default">Send form</p>
              <p class="text-right__green">Contact us</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex-column">
          <div class="header__subtitle d-flex">
            Technical support
            <p class="header__subtitle-green-text">24/7</p>
          </div>
          <div class="header__text">
            GMS understands that it can be hard to follow all new technologies.
            We regularly provide for all our clients educational trainings to
            make your operator`s business earn more and better though our best
            practices.
          </div>
          <a class="header__telephone" href="tel:+41 41 544 62 00">
            +41 41 544 62 00
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #header {
    margin-bottom: 50px;
    width: 100%;
  }
  .header__contacts {
    color: #333333;
    font-family: "Suisse Intl",sans-serif;
    font-size: 50px;
    font-weight: 300;
    line-height: 48px;
    margin-bottom: 30px;
    margin-top: 60px;
  }
  .header__text {
    line-height: 30px;
    margin-bottom: 40px;
    text-align: left;
  }
  .header__text-right {
    line-height: 20px;
    margin-left: 10px;
    text-align: left;
    width: 400px;
  }
  .header__subtitle {
    color: #2e2e2e;
    font-family: "Suisse Intl",sans-serif;
    font-size: 34px;
    font-weight: 300;
    line-height: 48px;
    margin-top: 20px;
  }
  .header__subtitle-green-text {
    color: #3db565;
    margin-left: 5px;
    margin-right: 5px;
  }
  .header__telephone {
    color: #3db565;
    font-family: "Suisse Intl",sans-serif;
    font-size: 26px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 20px;
    text-decoration: none;
  }
  .text-right__default {
    color: #333333;
    font-family: "Suisse Intl",sans-serif;
    font-size: 15px;
    font-weight: 300;
  }
  .text-right__green {
    color: #3db565;
    font-family: "Suisse Intl - Semi Bold",sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.85px;
    text-transform: uppercase;
  }

</style>
