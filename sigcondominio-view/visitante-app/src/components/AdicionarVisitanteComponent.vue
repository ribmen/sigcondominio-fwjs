<template>
  <div>
    <h2>Gerenciamento de Visitantes</h2><br>
    
    <div>
      <h3>Adicionar Visitante</h3>
      <form @submit.prevent="adicionarVisitante"><br>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="novoVisitante.nome" required /><br><br>
        
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" v-model="novoVisitante.cpf" required /><br><br>
        
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdicionarVisitanteComponent',
  data() {
    return {
      novoVisitante: {
        nome: '',
        cpf: ''
      }
    };
  },
  methods: {
    async adicionarVisitante() {
      try {
        const response = await axios.post('http://localhost:8081/visitantes', this.novoVisitante);
        if (response.status === 201) {
          alert('Visitante adicionado com sucesso!');
          this.novoVisitante.nome = '';
          this.novoVisitante.cpf = '';
          this.listarVisitantes();
        }
      } catch (error) {
        console.error('Erro ao adicionar visitante:', error);
        alert('Falha ao adicionar visitante.');
      }
    },
  }
};
</script>

<style>
/* Adicione seu CSS aqui, se necessário */
</style>

