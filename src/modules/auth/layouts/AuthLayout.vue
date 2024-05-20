<template>
  <div class="bg-gray-100 grid lg:grid-cols-2 text-text">
    <div class="h-screen hidden lg:block">
      <img src="/vue.jpeg" alt="Placeholder Image" class="object-cover w-full h-full" width={1920} height={1080}
        priority={true} />
    </div>
    <div class="flex flex-col justify-center items-center sm:px-12 p-8 w-full h-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>