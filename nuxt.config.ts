export default defineNuxtConfig({
  devtools: { enabled: false },
  css : ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false },
})
