<template>
    <div class="application-animation">
        <Admin/>
    </div>
    
  </template>
  
  <script>
  import Admin from "../../components/pageComponents/admin.vue";
  export default {
    components: { Admin },middleware: 'auth',
  };
  </script>
  
  <style>
    @import url('~/assets/css/app.css');
  </style>