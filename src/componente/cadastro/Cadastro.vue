<template>
  <div class="container">

     <h1 class=" centralizado" >Cadastrar Filme</h1>


     <ul class="box-fundo-opaca-cadastro">
       <input type="search" placeholder="Titulo">
       <input type="search" placeholder="Ano">
       <input type="search" placeholder="Descrição">
    </ul>

  </div>

</template>

<script>

export default {
  

}

</script>
<style scoped>
    .centralizado {
        
        text-align: center;
    }

    .box-fundo-opaca-cadastro {
    margin: auto;
    background-color: #0a0a0a98;
    height: 300px;
    width:400px;
    margin: 40px;
    border-radius: 20px;
    padding: 100px;
 
}

.container {
  background: grey;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
}

</style>

