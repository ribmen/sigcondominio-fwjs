<template>
  <div class="container-fluid d-flex align-items-center justify-content-center vh-100">
    <div class="form-signin">
      <form @submit.prevent="handleSubmit">
        <img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal bold">Login</h1>

        <div class="form-floating">
          <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
          <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
          <label for="floatingPassword">Senha</label>
        </div>

        <router-link to="/"><button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button></router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelaLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      
      // Exemplo de como você pode redirecionar após o login
      this.$router.push('/pagina-do-usuario');
    }
  }
};
</script>

<style>
/* Estilos opcionais para a tela de login */
html,
body {
  height: 100%;
}

.container-fluid {
  background-color: #f8f9fa; /* Cor de fundo opcional */
}

.form-signin {
  width: 400px; /* Largura máxima do formulário */
  padding: 1rem;
  background-color: #fff; /* Cor de fundo do formulário */
  border: 1px solid #ddd; /* Borda opcional */
  border-radius: 10px; /* Borda arredondada */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra opcional */
}
</style>
