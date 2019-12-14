<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="footer__title">
            Contact us
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <form
            class="footer__form"
            @submit.prevent="sendContact"
            autocomplete="off"
          >
            <label
              class="d-flex align-item-center form__label"
              :class="{ notSuccess: !isNameValid }"
            >
              Name
              <input
                required
                v-model="username"
                type="text"
                name="username"
                class="form__input"
                :placeholder="[[errorName]]"
                maxlength="30"
              />
            </label>
            <label class="d-flex form__label">
              Phone
              <input
                id="phone"
                type="tel"
                required
                v-model="phone"
                v-mask="'+38092-#######'"
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
            <button
              type="submit"
              class="form__button btn"
              :class="{ disabled: disable }"
            >
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
import axios from "axios";
export default {
  name: "Footer",
  data() {
    return {
      username: null,
      phone: null,
      email: null,
      errorName: null,
      isNameValid: true,
      disable: false
      };
  },
  methods: {
    checkName() {
      if (!/^[A-Za-z ]+$/.test(this.username)) {
        this.errorName = "Your name should only contain letters and spaces!";
        return false;
      } else return true;
    },
    sendContact(event) {
      if (!this.checkName()) {
        this.isNameValid = false;
        event.target.reset();
      } else {
        axios
          .post("http://httpbin.org/post", {
            username: this.username,
            phone: this.phone,
            email: this.email
          })
          .then(() => console.log("All GOOD"))
          .catch(error => console.log(error));
        this.errorName = "";
        this.username = "";
        this.phone = "";
        this.email = "";
        this.isNameValid = true;
        this.disable = true;
        event.target.reset();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: url("../assets/pattern.png") no-repeat center center / cover;
  width: 100%;
}
.footer__title {
  color: #ffffff;
  font-family: "Suisse Intl", sans-serif;
  font-size: 34px;
  font-weight: 300;
  line-height: 48px;
  margin-bottom: 20px;
  margin-top: 50px;
}
.footer__text {
  color: #000000;
  font-family: "Suisse Intl", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 34px;
  padding-top: 30px;
}
.form__input {
  background: transparent;
  border: 0;
  border-radius: 0;
  color: white;
  font-family: "Suisse Intl", sans-serif;
  font-size: 18px;
  font-weight: 300;
  outline: 0;
  padding-left: 30px;
  width: 90%;
  &:focus {
    + {
      .form__label {
        border-bottom: 1px solid white;
        color: white;
      }
    }
  }
  &::placeholder {
    color: red;
  }
}
.form__label {
  border-bottom: 1px solid black;
  color: black;
  font-family: "Suisse Intl", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 60px;
  &:focus-within {
    border-bottom: 1px solid white;
    color: white;
  }
}
.notSuccess {
  border-bottom: 1px solid red;
  color: red;
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
  font-family: "Suisse Intl - Semi Bold", sans-serif;
  font-size: 11px;
  font-weight: 400;
  height: 83px;
  margin-bottom: 100px;
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
  font-family: "Suisse Intl", sans-serif;
  font-size: 16px;
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
