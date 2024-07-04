<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-dark py-3">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <!-- Logo e título -->
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap Logo" width="30" height="24">
            <span class="fs-4 mx-2">SIGCONDOMÍNIO</span>
          </a>
          
          <!-- Navegação -->
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <router-link to="/" class="nav-link px-2 text-white">Página Inicial</router-link>
            <router-link to="/visitantes" class="nav-link px-2 text-white">Buscar no sistema</router-link>
            <li><a href="#" class="nav-link px-2 text-white">Sobre</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Contato</a></li>
          </ul>
          
          <!-- Botões de ação -->
          <div class="d-flex">
            <router-link to="/login"><button class="btn btn-outline-light me-2">Sair</button></router-link>
            <router-link to="/registro"><button class="btn btn-primary">Registrar</button></router-link>
          </div>
        </div>
      </div>
    </header>
  
    <!-- Conteúdo principal -->
    <main class="container my-5">
      <h1 class=" mb-4">Bem-vindo, Moisés</h1>

      <div class="row">
        <!-- Coluna de Entradas de hoje -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Entradas de hoje</h2>
            </div>
            <div class="card-body">
              <ListarVisitantesComponent/>
            </div>
          </div>
        </div>
        
        <!-- Coluna de Ações -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Ações</h2>
            </div>
            <div class="card-body">
              <AdicionarVisitanteComponent/>
              <br>
              <AtualizarVisitanteComponent/>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão para visitantes -->
      <div class="text-center">
        <router-link to="/visitantes" class="btn btn-primary">Ver Todos os Visitantes</router-link>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-body-tertiary text-center text-lg-start mt-auto py-3">
      <div class="container text-center">
        © 2024 Sigcondominio.com.br - Todos os direitos reservados
      </div>
    </footer>
  </div>
</template>

<script>
import ListarVisitantesComponent from './ListarVisitantesComponent.vue';
import AdicionarVisitanteComponent from './AdicionarVisitanteComponent.vue';
import AtualizarVisitanteComponent from './AtualizarVisitanteComponent.vue';

export default {
  name: 'TelaInicial',
  components: {
    ListarVisitantesComponent,
    AdicionarVisitanteComponent,
    AtualizarVisitanteComponent
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o conteúdo ocupe pelo menos toda a altura da viewport */
}

.card {
  border: 1px solid rgba(110, 110, 110, 0.125); /* Borda leve nas cartas */
}

.card-header {
  background-color: rgb(52, 58, 64); /* Cor de fundo do cabeçalho da carta */
  color: white; /* Cor do texto no cabeçalho da carta */
}

.card-body {
  background-color: rgb(220, 220, 220);
}

.card-title {
  margin-bottom: 0; /* Remove margem inferior do título da carta */
}
</style>
