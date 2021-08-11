<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head(){
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        }
      ]
    }
  },
}
</script>