<template>
  <div class="col-span-3 border-r uvm-border-divisor pt-12">
    <h2 class="text-uvm-titulo font-bold pb-4">¡Bienvenido !</h2>
    <p>Es necesario que firmes tu contrato digital para concluir tu inscripción</p>
    <div class="grid grid-cols-7 pt-8 px-6">
      <EnvelopeIcon class="icono-uvm h-14 p-2" />
      <div class="col-span-6">
        <h3 class="text-uvm-color-titulo text-uvm-subtitulo">Revisa tu correo</h3>
        <p>Tus accesos de ingreso fueron enviados a tu correo.</p>
      </div>
    </div>
    <div class="grid grid-cols-7 pt-8 px-6">
      <DocumentTextIcon class="icono-uvm h-14 p-2" />
      <div class="col-span-6">
        <h3 class="text-uvm-color-titulo text-uvm-subtitulo">Firma tu contrato</h3>
        <p>Una vez dentro del portal es necesaria la firma de tu contrato.</p>
      </div>
    </div>
    <div class="grid grid-cols-7 pt-8 px-6">
      <CreditCardIcon class="icono-uvm h-14 p-2" />
      <div class="col-span-6">
        <h3 class="text-uvm-color-titulo text-uvm-subtitulo">Realiza tus pago</h3>
        <p>Por último, realiza tus pagos correspondientes.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import { DocumentTextIcon } from '@heroicons/vue/24/solid'
import { CreditCardIcon } from '@heroicons/vue/24/solid'
</script>