<template>
  <div class="encabezado-sin-sesion">
    <div class="col-span-3 md:col-span-2">
      <img class="w-40" src="@/assets/img/LOGO_UVM_SIGLAS_black.png" alt="UVM" />
    </div>
    <div class="my-auto text-right xs:hidden hidden md:inline-block">
      <PhoneIcon class="icono-uvm" />
      <span class="ml-2"> 800 0000 886</span>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon } from '@heroicons/vue/24/solid'
</script>

<style lang="scss" scoped>
</style>