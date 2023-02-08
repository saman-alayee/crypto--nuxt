<template>
  <v-container fluid>
    <v-card class="mx-auto card-radius" max-width="500" elevation="1">
      <v-list-item>
        <v-list-item-content>
          <div class="item-container">
            <div class="right-container">
              <p>موجودی کیف پول</p>
              <p>
                <b>{{ finalValue }}</b> تومان
              </p>
              <div class="btn container">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="ma-2"
                      color="primary"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      افزایش اعتبار
                    </v-card-title>

                    <v-card-text class="mt-5">
                      <div class="input-field">
                        <v-text-field
                          v-model="price"
                          placeholder="مبلغ درخواستی خود را وارد کنید"
                          filled
                          rounded
                          dense
                        ></v-text-field>
                      </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="white--text"
                        block
                        color="light-blue lighten-1"
                        @click="check()"
                      >
                        افزایش اعتبار
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <p>افزایش موجودی</p>
              </div>
            </div>

            <v-spacer></v-spacer>
            <div class="line"></div>
            <v-spacer></v-spacer>
            <div class="left-container">
              <p>موجودی بلوکه شده</p>
              <p><b>0</b> تومان</p>
              <div class="btn container">
                <v-btn class="ma-2" color="primary">
                  <img
                    src="@/assets/images/icons/money.png"
                    width="20px"
                    alt="money icon"
                  />
                </v-btn>
                <p>درخواست استرداد</p>
              </div>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      account: 0,
      finalValue: 0,
    };
  },
  methods: {
    check() {
      this.account = parseInt(this.account) + parseInt(this.price);
      this.$store.commit("setPrice", this.account);
      this.finalValue = this.$store.state.loadedPrice;
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: row;
}
.right-container,
.left-container {
  p {
    text-align: center;
  }
}

.line {
  border: 1px solid rgb(230, 230, 230);
  transform: skew(90);
  height: 5rem;
}
.card-radius {
  border-radius: 8px;
}
</style>