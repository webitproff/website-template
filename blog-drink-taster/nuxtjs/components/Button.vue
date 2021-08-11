<template>
  <NuxtLink :to="href">
    <a class="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2"
    :class="invert ? 'bg-gray-600 hover:text-gray-600 ring-gray-600' : 'bg-green-500 hover:text-green-500 ring-green-500'">
      <slot />
    </a>
  </NuxtLink>
</template>

<script>
export default {
  props: [
    'href',
    'invert'
  ]
}
</script>
