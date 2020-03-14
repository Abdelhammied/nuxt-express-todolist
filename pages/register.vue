<template>
  <div class="container">
    <form action>
      <div class="form-group row" :class="{'is-invalid': $v.form.username.$error}">
        <label for="username" class="col-sm-3">Username</label>
        <div class="col-sm-9">
          <input
            id="username"
            type="text"
            class="form-control"
            placeholder="Enter Your Username"
            v-model.trim="$v.form.username.$model"
          />
          <ErrorMessage
            :message="errorMessage('username', 'required')"
            v-if="!$v.form.username.required"
          />

          <ErrorMessage
            :message="errorMessage('username', 'minLength6')"
            v-if="!$v.form.username.minLength"
          />
        </div>
      </div>

      <div class="form-group row" :class="{'is-invalid': $v.form.email.$error}">
        <label for="email" class="col-sm-3">Email Address</label>
        <div class="col-sm-9">
          <input
            id="email"
            type="text"
            class="form-control"
            placeholder="Enter Your Email Address"
            v-model.trim="$v.form.email.$model"
          />

          <ErrorMessage
            :message="errorMessage('email', 'required')"
            v-if="!$v.form.email.required"
          />
        </div>
      </div>

      <div class="form-group row" :class="{'is-invalid': $v.form.password.$error}">
        <label for="password" class="col-sm-3">Password</label>
        <div class="col-sm-9">
          <input
            id="password"
            type="password"
            class="form-control"
            placeholder="Enter Your Password"
            v-model.trim="$v.form.password.$model"
          />
          <ErrorMessage
            :message="errorMessage('password', 'required')"
            v-if="!$v.form.password.required"
          />
          <ErrorMessage
            :message="errorMessage('password', 'minLength6')"
            v-if="!$v.form.password.minLength"
          />
        </div>
      </div>

      <div class="form-group row" :class="{'is-invalid': $v.form.confirmPassword.$error}">
        <label for="confirmPassword" class="col-sm-3">Confirm Password</label>
        <div class="col-sm-9">
          <input
            id="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Confirm Your Password"
            v-model.trim="$v.form.confirmPassword.$model"
          />
          <ErrorMessage
            :message="errorMessage('password', 'confirmed')"
            v-if="!$v.form.confirmPassword.sameAsPassword"
          />
        </div>
      </div>

      <div class="form-group row">
        <div class="offset-sm-3 col-sm-9 text-right">
          <button class="btn btn-primary" type="button" @click="submitForm">Register Now</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import ErrorMessage from "~/components/Validations/ErrorMessage";
let rolesMessages = require("~/data/roles");
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      roles: rolesMessages
    };
  },
  computed: {},
  components: {
    ErrorMessage
  },
  validations: {
    form: {
      username: {
        required: true,
        minLength: minLength(6)
      },
      email: {
        required: true
      },
      password: {
        required: true,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    submitForm() {
      if (!this.$v.$invalid) {
        this.$axios.post("/register", this.form).then(response => {
          console.log(response);
        });
      }
    },
    errorMessage(field, type) {
      return this.roles[type];
    }
  },
  middleware: ["page-layout"]
};
</script>
