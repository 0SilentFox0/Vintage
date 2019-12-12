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
          <form class="footer__form" @submit.prevent="sendContact">
            <label class="d-flex form__label">
              Name
              <input
                required
                v-model="username"
                type="text"
                name="username"
                class="form__input"
              />
            </label>
            <label class="d-flex form__label">
              Phone
              <input
                type="tel"
                required
                v-model="telephone"
                class="form__input"
              />
            </label>
            <label class="d-flex form__label">
              E-mail
              <input
                type="email"
                required
                v-model="email"
                class="form__input"
              />
            </label>
            <div class="d-flex">
              <input type="checkbox" id="agree" name="scales" />
              <label class="form__input checkbox text-truncate" for="agree">
                I agree the processing of personal data
              </label>
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
  name: "Footer",
  data() {
    return {
      username: null,
      telephone: null,
      email: null
    };
  },
};
</script>

<style lang="scss" scoped>
  .footer {
    background: url("../assets/pattern.png") no-repeat center center / cover;
    height: 500px;
    width: 100%;
  }
  .footer__title {
    color: #ffffff;
    font-family: "Suisse Intl",sans-serif;
    font-size: 34px;
    font-weight: 300;
    line-height: 48px;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .footer__text {
    color: #000000;
    font-family: "Suisse Intl",sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 34px;
  }
  .form__input {
    background: transparent;
    border: 0;
    border-radius: 0;
    color: white;
    font-family: "Suisse Intl",sans-serif;
    font-size: 18px;
    font-weight: 300;
    outline: 0;
    padding-bottom: 15px;
    padding-left: 30px;
    width: 100%;
    &:focus {
      + {
        .form__label {
          border-bottom: 1px solid white;
          color: white;
        }
      }
    }
  }
  .form__label {
    border-bottom: 1px solid black;
    color: black;
    margin-bottom: 10px;
    &:focus-within {
      border-bottom: 1px solid white;
      color: white;
    }
  }
  .footer__form {
    input {
      &:focus-within {
        box-shadow: none;
        outline: 0;
      }
      &:focus {
        box-shadow: none;
        outline: 0;
      }
    }
  }
  .form__button {
    background: black;
    border: 0;
    color: #ffffff;
    font-family: "Suisse Intl - Semi Bold",sans-serif;
    font-size: 11px;
    font-weight: 400;
    height: 83px;
    letter-spacing: 1.54px;
    line-height: 72.34px;
    text-transform: uppercase;
    width: 279px;
    &:focus-within {
      box-shadow: none;
      outline: 0;
    }
    &:disabled {
      background: #dddddd;
    }
  }
  .checkbox {
    color: white;
    cursor: default;
    font-family: "Suisse Intl",sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 34px;
    margin-bottom: 50px;
    padding: 5px 0;
    &:checked {
      background: white;
    }
    &:before {
      background: #fff;
      content: " ";
      display: inline-block;
      font: 15px/15px FontAwesome;
      height: 15px;
      margin-right: 15px;
      position: relative;
      text-align: center;
      vertical-align: middle;
      width: 15px;
    }
  }
  input[type="checkbox"] {
    display: none;
  }
  input {
    &:checked {
      + {
        .checkbox {
          &:before {
            color: black;
            content: "✓";
          }
        }
      }
    }
  }
</style>
