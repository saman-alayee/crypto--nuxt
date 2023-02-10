<template>
  <div class="border-container">
    <h1>Sign up to see market</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolor. A
      quas laborum suscipit voluptatum distinctio quidem necessitatibus corrupti
      vero.
    </p>
    <section class="input-container">
      <input type="text" placeholder="write your email hear" />
      <v-btn color="error">Sign up</v-btn>
    </section>
  </div>
</template>

<style>
.input-container {
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  background-color: white;
  border-radius: 5px;
  
}
input {
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none;
}
.border-container {
  background-color: #2a2836;
  width: 100vw;
}
.border-container p,
h1 {
  text-align: center;
  padding: 8px;
}
</style>