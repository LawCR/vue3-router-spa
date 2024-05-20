<template>
  <h1 class="text-2xl font-semibold mb-4">Iniciar Sesión</h1>
  <form class='w-full sm:w-[450px]'>
    <div class='mb-4'>
      <label class='block text-gray-600'>Correo electrónico</label>
      <input type='email' id='email' name='email'
        class='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' />
    </div>
    <div class='mb-4 relative '>
      <label class='block text-gray-600'>Contraseña</label>
      <input type="password" id='password' name='password'
        class='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 pr-10' />
    </div>
    <div class='mb-3 flex items-center'>
      <input type='checkbox' id='rememberMe' name='rememberMe' class='text-blue-500' :checked="true" />
      <label class='text-gray-600 ml-2'>Recuérdame</label>
    </div>
    <div class='mb-4 text-blue-500'>
      <a href='#' class='hover:underline'>
        ¿Olvidaste tu contraseña?
      </a>
    </div>
    <button type='button' @click="onLogin"
      class="shadow text-sm font-semibold bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all  w-full tracking-wider">
      Ingresar
    </button>
    <div class='my-3 text-center'>
      <span class='text-gray-600'>¿Aún no tienes cuenta?&nbsp;</span>
      <RouterLink to='/auth/register' class='text-blue-500 hover:underline'>
        Regístrate aquí
      </RouterLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onLogin = () => {
  const path = localStorage.getItem('lastPath') || '/'
  localStorage.setItem('userId', 'ABC-123')
  // router.replace({ name: 'home' })
  router.replace(path)
}
</script>

<style scoped></style>