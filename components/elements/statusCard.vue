<template>
  <v-card  class="card-radius mx-auto" max-width="500" elevation="1">
    <v-list-item three-line>
      <div class="card-container">
        <v-list-item-avatar  rounded tile size="75" color="#dcecfc"
          ><img class="size-image" src="@/assets/images/icons/bluemoney.png" alt="icon money"
        /></v-list-item-avatar>
        <v-list-item-content>
          <div class="badge-container"><v-btn color="primary" outlined text>لغو شده</v-btn></div>
          <div class="pe-2 mt-1">
            <h4>وضعیت درخواست استرداد </h4>
            <div class="icontext-container mt-3">
              <div class="text-container">
                <p>برای پیگیری در خواست استرداد کلیک کنید</p>
              </div>
            </div>
          </div>
        </v-list-item-content>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.badge-container {
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 50px;
  width: 50px;
  font-size: 14px;
  height: auto;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.size-image{
    width: 45%;
    height: auto;
}
.text-container{
    cursor: pointer;
    p{
        color: rgb(1, 156, 199);
    }
}
.card-radius {
    border-radius: 8px;
}
</style>