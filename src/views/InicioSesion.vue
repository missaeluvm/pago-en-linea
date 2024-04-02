<template>
  <div>
    <EncabezadoSinSesion />
    <div class="mx-auto grid grid-cols-5 gap-4 py-4 px-32">
      <PrimerosPasos class="hidden md:grid" />
      <FormularioInicio />
    </div>
  </div>
</template>

<script setup>
import EncabezadoSinSesion from '@/components/InicioSesion/EncabezadoSinSesion.vue'
import PrimerosPasos from '@/components/InicioSesion/PrimerosPasos.vue'
import FormularioInicio from '@/components/InicioSesion/FormularioInicio.vue'
</script>

<style lang="scss" scoped>
</style>