<template>
  <div>
      <h2>Lista de Visitantes</h2>
      <button @click="listarVisitantes">Listar Visitantes</button>
      <ul>
        <li v-for="visitante in visitantes" :key="visitante.id">
          {{ visitante.nome }} - {{ visitante.cpf }}
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListarVisitantesComponent',
  data() {
    return {
      visitantes: []
    };
  },
  methods: {
    async listarVisitantes() {
      try {
        const response = await axios.get('http://localhost:8081/visitantes');
        this.visitantes = response.data;
      } catch (error) {
        console.error('Erro ao listar visitantes:', error);
        alert('Falha ao listar visitantes.');
      }
    }
  }
};

</script>
