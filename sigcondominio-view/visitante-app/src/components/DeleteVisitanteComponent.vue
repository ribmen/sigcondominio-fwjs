<template>
  <div>
    <h2>Excluir dados de visitante</h2>

    <div>
      <h3>Apagar dados</h3>
      <form @submit.prevent="excluirVisitantePorCpf">
        <label for="cpfExcluir">Excluir por CPF: </label>
        <input type="text" id="cpfExcluir" v-model="cpfExcluir" required />
        <button type="submit">Excluir</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DeleteVisitanteComponent',
  data() {
    return {
      cpfExcluir: ''
    }
  },
  methods: {
    async excluirVisitantePorCpf() {
      try {
        const response = await axios.delete(`http://localhost:8081/visitantes/${this.cpfExcluir}`);
        if(response.status === 204) {
          alert('Visitante excluído com sucesso!');
          this.cpfExcluir = '';  // Limpar o campo após a exclusão
        } else {
          alert('404 (Visitante não encontrado)');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('404 (Visitante não encontrado)');
        } else {
          console.error('Erro ao excluir visitante:', error);
          alert('Falha ao excluir visitante.');
        }
      }
    }
  }
};
</script>
