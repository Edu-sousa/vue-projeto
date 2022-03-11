<template>
  <div class="corpo">
  

   <nav>
      <ul class="menu">       
          <li class="links"><router-link to="/">Home</router-link></li>
          <li class="links"><router-link to="/cadastro">Cadastro</router-link></li>
      </ul>
    </nav>

     <router-view style="text-decoration:none"></router-view>
  </div>
</template>

<script>
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .menu{
    list-style: none;
    display: flex;
  }
  
  .links{
    display: block;
    margin-right: 20px;
    text-decoration:none;
  }
</style>
