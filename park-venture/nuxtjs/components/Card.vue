<template>
  <div class="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
    <img class="w-full h-auto block mb-6" :src="imageSrc" :alt="imageAlt" v-if="imageSrc" />
    <h2 class="text-3xl mb-4 font-bold" v-if="title">
      {{ title }}
    </h2>
    <p class="text-xl mb-4 font-semibold">
      {{ description }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  props: [
    'imageAlt',
    'imageSrc',
    'title',
    'description',
  ]
}
</script>
