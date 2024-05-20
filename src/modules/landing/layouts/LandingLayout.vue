<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="flex flex-col ml-auto space-x-4 items-end h-10 sm:space-x-6">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
          <RouterLink to="/features"> Features </RouterLink>
          <RouterLink to="/pricing"> Pricing </RouterLink>
          <RouterLink to="/contact"> Contact </RouterLink>
        </div>
        <div class="space-x-4">
          <RouterLink to="/pokemon/2"> Pokémons </RouterLink>
          <RouterLink to="/auth"> Login </RouterLink>
        </div>
      </nav>
    </header>

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">

      <!-- <RouterView /> -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} C3M. Derechos reservados
      </p>
    </footer>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  /* opacity: 0; */
  transform: translateX(20%);
  opacity: 0;
}
</style>