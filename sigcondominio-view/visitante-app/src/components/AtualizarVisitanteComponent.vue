<template>
  <div>
    <h3>Atualizar Visitante</h3>

    <form @submit.prevent="buscarVisitantePorId">
      <div>
        <label for="visitanteId">ID do Visitante: </label>
        <input type="text" id="visitanteId" v-model="visitanteId" required />
        <button type="submit">Buscar</button>
      </div>
    </form>

    <div v-if="visitante">
      <h3>Atualizar Dados</h3>
      <form @submit.prevent="atualizarVisitante">
        <div>
          <label for="nome">Nome: </label>
          <input type="text" id="nome" v-model="visitante.nome" required />
        </div>
        <div>
          <label for="cpf">CPF: </label>
          <input type="text" id="cpf" v-model="visitante.cpf" required />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AtualizarVisitanteComponent',
  data() {
    return {
      visitanteId: '',
      visitante: null,
    };
  },
  methods: {
    async buscarVisitantePorId() {
      try {
        const response = await axios.get(`http://localhost:8081/visitantes/${this.visitanteId}`);
        if (response.status === 200) {
          this.visitante = response.data;
        } else {
          alert('Visitante não encontrado');
          this.visitante = null;
        }
      } catch (error) {
        console.error('Erro ao buscar visitante: ', error);
        alert('Erro ao buscar visitante');
        this.visitante = null;
      }
    },
    async atualizarVisitante() {
      try {
        const response = await axios.put(`http://localhost:8081/visitante/${this.visitanteId}`, this.visitante);
        if (response.status === 200) {
          alert('Visitante atualizado com sucesso');
        } else {
          alert('Erro ao atualizar visitante');
        }
      } catch (error) {
        console.error('Erro ao atualizar visitante: ', error);
        alert('Erro ao atualizar visitante');
      }
    },
  },
};
</script>
