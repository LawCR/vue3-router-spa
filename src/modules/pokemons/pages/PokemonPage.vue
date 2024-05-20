<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-semibold">Pokemon <small class="text-blue-500">#{{ id }}</small></h1>
    <p>Here is the information about the Pokemon</p>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon" class="w-[200px] h-[200px] my-6" />

    <RouterLink :to="{ name: 'pokemon-id', params: { id: id + 1 } }"
      class="shadow text-sm font-semibold bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all  w-full tracking-wider mt-5 text-center">
      Next Pokemon</RouterLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: number
}
const props = defineProps<Props>()
console.log(props.id)
</script>

<style scoped></style>