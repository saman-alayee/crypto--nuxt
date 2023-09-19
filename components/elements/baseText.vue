/<template>
  <div class="text-container">
    <h1 :style="`font-size: ${fontsize_title}px`">
      {{title}}
    </h1>
    <p :style="`font-size: ${fontsize_text}px`">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
    props:{
        title: {
            type:String,
            required: true
        },
        fontsize_title: {
            required: true
        },
        text: {
            type:String,
            required: false
        },
        fontsize_text: {
            type:String,
            required: false
        },
    }
};
</script>

<style scoped>
.text-container p {
  font-size: 18px;
  line-height: 1.6rem;
}
.text-container h1 {
  line-height: 3rem;
  text-align: left;
}
</style>