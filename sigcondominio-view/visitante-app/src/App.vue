<!-- <template>
  <div id="app">
    <VisitanteComponent />
    <DeleteVisitanteComponent />
    <BuscarVisitanteComponent />
    <AtualizarVisitanteComponent />
  </div>
</template>

<script>
import VisitanteComponent from './components/VisitanteComponent.vue';
import DeleteVisitanteComponent from './components/DeleteVisitanteComponent.vue';
import BuscarVisitanteComponent from './components/BuscarVisitanteComponent.vue';
import AtualizarVisitanteComponent from './components/AtualizarVisitanteComponent.vue';

export default {
  name: 'App',
  components: {
    VisitanteComponent,
    DeleteVisitanteComponent,
    AtualizarVisitanteComponent,
    BuscarVisitanteComponent
  }
};
</script>

<style>
/* Adicione seu CSS aqui, se necessário */
</style> -->

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Adicione qualquer estilo necessário aqui */
</style>


