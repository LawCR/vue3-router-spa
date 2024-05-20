<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
      Bienvenido a nuestro sitio web
    </h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <transition name="slideAndHide" mode="out-in">
      <p v-if="showCounter">Contador: {{ counter }}</p>
    </transition>
    <button @click="counter++" class="p-2 mt-2 bg-blue-500 text-white w-16 rounded-md">+1</button>
    <button @click="showCounter = !showCounter" class="p-2 mt-2 bg-blue-500 text-white w-16 rounded-md">{{ showCounter
      ? 'Ocultar' : 'Mostrar' }}</button>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style scoped>
.slideAndHide-enter-active,
.slideAndHide-leave-active {
  /* transition: transform 0.5s; */
  transition: all 0.5s ease;
}

.slideAndHide-enter-from,
.slideAndHide-leave-to {
  transform: translateX(20%);
  opacity: 0;
}
</style>