<template>
  <h1>Buscar visitante por CPF</h1>

  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand">Buscar visitante por CPF</a>
    <form @submit.prevent="buscarVisitantePorCpf" class="form-inline d-flex">
    <input class="form-control mr-sm-2" type="search" id="cpfBuscar" v-model="cpfBuscar" required placeholder="Insira aqui o CPF" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>
  </nav>

  <div v-if="visitante">
    <h2>Dados: </h2>
    <p>Nome: {{ visitante.nome }}</p>
    <p>CPF: {{ visitante.cpf }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BuscarVisitanteComponent',
  data() {
    return {
      cpfBuscar: '',
      visitante: null,
    }
  },

  methods: {
    async buscarVisitantePorCpf() {
      try {
        const response = await axios.get(`http://localhost:8081/visitantes/cpf/${this.cpfBuscar}`);

        if (response.status === 200) {
          this.visitante = response.data;
          alert('Visitante encontrado.');
        } else {
          alert('404 (Visitante não encontrado)');
          this.visitante = null;
        }
      } catch (error) {
        console.error('Erro ao buscar visitante: ', error);
        alert('Falha ao buscar visitante.');
        this.visitante = null;
      }
    }
  }
};
</script>

<style>
  .form-inline .form-control {
    width: auto;
    flex: 1;
  }
</style>