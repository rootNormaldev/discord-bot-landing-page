// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    app:{
      head:{
        title:'Dank Meme - Best Bot discord top #1',
        script:[
          { src:"https://kit.fontawesome.com/1754b57d9c.js",crossorigin:"anonymous" },
          { src:"https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" }
        ]
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })