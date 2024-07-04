<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-dark py-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <!-- Logo e título -->
          <a href="/" class="d-flex align-items-center text-white text-decoration-none">
            <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap Logo" width="30" height="24">
            <span class="fs-4 mx-2">SIGCONDOMÍNIO</span>
          </a>
          
          <!-- Navegação -->
          <ul class="nav">
            <li class="nav-item"><router-link to="/" class="nav-link text-white">Página Inicial</router-link></li>
            <li class="nav-item"><router-link to="/visitantes" class="nav-link text-white">Buscar no Sistema</router-link></li>
            <li class="nav-item"><a href="#" class="nav-link text-white">Sobre</a></li>
            <li class="nav-item"><a href="#" class="nav-link text-white">Contato</a></li>
          </ul>
          
          <!-- Botões de ação -->
          <div>
            <router-link to="/login" class="text-white text-decoration-none"><button class="btn btn-outline-light me-2">Sair</button></router-link>
            <router-link to="/registro" class="text-white text-decoration-none"><button class="btn btn-primary">Registrar</button></router-link>
          </div>
        </div>
      </div>
    </header>
  
    <!-- Conteúdo principal -->
    <main class="container my-5">
      <h1 class="text-center mb-4">Lista de Visitantes</h1>

      <BuscarVisitanteComponent/>

      <div class="row">
        <!-- Coluna de Entradas de hoje -->
        <div class="col-md-6 mb-4">
          <div class="card shadow">
            <div class="card-header bg-primary text-white">
              <h2 class="card-title m-0">Entradas de hoje</h2>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item" v-for="visitante in visitantes" :key="visitante.id">
                  {{ visitante.nome }} - {{ visitante.cpf }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Coluna de Ações -->
        <div class="col-md-6 mb-4">
          <div class="card shadow">
            <div class="card-header bg-danger text-white">
              <h2 class="card-title m-0">Ações pontuais</h2>
            </div>
            <div class="card-body">
              <DeleteVisitanteComponent/>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão para voltar -->
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-primary">Voltar à Tela Inicial</router-link>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-body-tertiary text-center text-lg-start mt-auto py-3">
      <div class="container text-center text-white">
        © 2024 Sigcondominio.com.br - Todos os direitos reservados
      </div>
    </footer>
  </div>
</template>

<script>
import BuscarVisitanteComponent from './BuscarVisitanteComponent.vue';
import DeleteVisitanteComponent from './DeleteVisitanteComponent.vue';

export default {
  name: 'TelaVisitantes',
  components: {
    BuscarVisitanteComponent,
    DeleteVisitanteComponent
  },
  data() {
    return {
      visitantes: [] // Aqui deve ser populado com os dados dos visitantes
    };
  },
  mounted() {
    // Simulação de dados de visitantes para exemplo
    this.visitantes = [
      { id: 1, nome: 'Visitante 1', cpf: '123.456.789-00' },
      { id: 2, nome: 'Visitante 2', cpf: '987.654.321-00' }
    ];
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.card {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 1rem;
  border-bottom: none;
}

.card-title {
  font-size: 1.25rem;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0b5ed7;
}

.nav-link {
  font-weight: 500;
}

.nav-link:hover {
  text-decoration: none;
}

.footer {
  background-color: #f8f9fa;
  color: rgba(0, 0, 0, 0.5);
}
</style>

