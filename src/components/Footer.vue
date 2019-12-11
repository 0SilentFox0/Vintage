<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="footer__title">
            Contact us
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <form class="form">
            <input
              required
              v-model="username"
              type="text"
              name="username"
              class="form-control"
              placeholder="Name"
            />
            <input
              type="tel"
              required
              v-model="telephone"
              name="telephone"
              class="form-control"
              placeholder="Phone"
            />
            <input
              type="email"
              required
              v-model="email"
              name="email"
              class="form-control"
              placeholder="E-mail"
            />
            <div>
              <input type="checkbox" id="agree" name="scales" />
              <label for="agree">I agree the processing of personal data</label>
            </div>
            <button type="submit" class="form__button">
              Get in touch
            </button>
          </form>
        </div>

        <div class="col-6">
          <div class="footer__text">
            Please tell us more about your request and give us info about your
            company and country
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: url("../assets/pattern.png") no-repeat center center / cover;
  width: 100%;
	height: 500px;
}

.footer__title {
  margin-top: 50px;
  color: #ffffff;
  font-family: "Suisse Intl", sans-serif;
  font-size: 34px;
  font-weight: 300;
  line-height: 48px;
}

.footer__text {
  color: #000000;
  font-family: "Suisse Intl", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 34px;
}

.form-control {
	border: 0;
	outline: 0;
	background: transparent;
	border-bottom: 1px solid black;
	border-radius: 0;
	color: white;
}

.form input:focus-within,
.form input:focus{
  box-shadow: none;
}

.form input::placeholder {
	color: black;
}

.form input::placeholder:focus {
	color: white;
}

.form-control:focus {
	border-bottom: 1px solid white;
}

.form__button {
  color: #ffffff;
  font-family: "Suisse Intl - Semi Bold", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 72.34px;
  text-transform: uppercase;
  letter-spacing: 1.54px;
  background: black;
  width: 279px;
  height: 83px;
  border: 0;
}
</style>
