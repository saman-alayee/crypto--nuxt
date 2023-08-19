<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-8" cols="12" md="6" sm="12" align-self="center">
        <div class="space-container">
          <BaseText
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quisquam eligendi dolore."
            fontsize_title="30"
            fontsize_text="16"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero dolore earum qui non perferendis accusantium quo quisquam itaque ab temporibus consequatur laudantium aspernatur id quasi, molestiae atque error quos rerum minima saepe iste fuga numquam. Itaque delectus excepturi quam dicta reprehenderit, ducimus consectetur alias placeat. Totam expedita consequuntur quo.!"
          />
          <Basebutton @click="goMarket" text="see market" color="white" />
          <Basebutton @click="goMarket" text="login" color="error" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" align-self="start"
        ><div class="image-container">
          <img
            src="@/assets/images/vectors/firstimage.png"
            alt="cryypto image"
          /></div
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2" sm="3" v-for="logo in logos" :key="logo.id"
        ><div class="logo-container">
          <img :src="logo.file" alt="cryypto image" /></div
      ></v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" sm="12"
        ><div class="image-container">
          <img
            src="@/assets/images/vectors/secondimage.png"
            alt="cryypto image"
          /></div
      ></v-col>
      <v-col class="mt-8" cols="12" md="6" sm="12" align-self="center">
        <div class="text-container">
          <BaseText
            title="Lorem ipsum dolor sit amet."
            fontsize_title="30"
            fontsize_text="16"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero dolore earum qui non perferendis accusantium quo quisquam itaque ab temporibus consequatur laudantium aspernatur id quasi, molestiae atque error quos rerum minima saepe iste fuga numquam. Itaque delectus excepturi quam dicta reprehenderit, ducimus consectetur alias placeat. Totam expedita consequuntur quo.!"
          />
          <Basebutton @click="goMarket" text="see market" color="white" />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-10" justify="center">
      <v-col cols="12" md="6" sm="12">
        <BaseText
          title="Lorem ipsum dolor sit "
          fontsize_title="30"
          fontsize_text="16"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero dolore earum qui non perferendis accusantium quo quisquam itaque ab temporibus consequatur laudantium aspernatur id quasi, molestiae atque error quos rerum minima saepe iste fuga numquam. Itaque delectus excepturi quam dicta reprehenderit, ducimus consectetur alias placeat. Totam expedita consequuntur quo.!"
        />
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <div class="item-container">
          <BaseText
            title="Lorem ipsum dolor sit "
            fontsize_title="24"
            fontsize_text="12"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam expedita consequuntur quo!"
          />
          <BaseText
            title="Lorem ipsum dolor sit "
            fontsize_title="24"
            fontsize_text="12"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam expedita consequuntur quo!"
          />
        </div>
        <div class="item-container">
          <BaseText
            title="Lorem ipsum dolor sit "
            fontsize_title="24"
            fontsize_text="12"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam expedita consequuntur quo!"
          />
          <BaseText
            title="Lorem ipsum dolor sit "
            fontsize_title="24"
            fontsize_text="12"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam expedita consequuntur quo!"
          />
        </div>
      </v-col>
    </v-row>

    <div class="title-field mt-10">
      <p class="texxt">Lorem ipsum dolor sit amet.</p>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="item in cryptoNames"
        :key="item.name"
      >
        <v-card
          class="mx-auto rounded-lg"
          max-width="280"
          outlined
          style="border-color: white"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-1">{{ item.name }}</div>
              <div class="text-overline mb-4">{{ item.shortName }}</div>
            </v-list-item-content>

            <v-list-item-content
              ><div class="text-overline m-8">
                {{ item.price }}
              </div></v-list-item-content
            >
          </v-list-item>

          <v-card-actions>
            <v-sparkline
              :value="value"
              color="primary"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item"> ${{ item.value }} </template>
            </v-sparkline>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
    <v-row justify="center">
      <v-col class="mt-8" cols="12" md="6" sm="12" align-self="center">
        <div class="space-container">
          <BaseText
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quisquam eligendi dolore."
            fontsize_title="30"
            fontsize_text="16"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero dolore earum qui non perferendis accusantium quo quisquam itaque ab temporibus consequatur laudantium aspernatur id quasi, molestiae atque error quos rerum minima saepe iste fuga numquam. Itaque delectus excepturi quam dicta reprehenderit, ducimus consectetur alias placeat. Totam expedita consequuntur quo.!"
          />
          <Basebutton @click="goMarket" text="see market" color="white" />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" align-self="start"
        ><div class="image-container">
          <img
            src="@/assets/images/vectors/btcImage.webp"
            alt="cryypto image"
          /></div
      ></v-col>
    </v-row>
    <v-row class="bottom" justify="center">
      <v-col cols="12" md="4" sm="6" v-for="card in cards" :key="card.title">
        <Basecard
          :image="card.image"
          :title="card.title"
          :describe="card.describe"
        />
      </v-col>
    </v-row>
    
    
  </v-container>
</template>

<script>
import Basebutton from "@/components/elements/baseButton.vue";
import Basecard from "@/components/elements/baseCard.vue";
import BaseText from "@/components/elements/baseText.vue";
export default {
  components: { Basebutton, BaseText, Basecard },
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],

      logos: [
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 1,
        },
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 2,
        },
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 3,
        },
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 4,
        },
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 5,
        },
        {
          file: "https://media.licdn.com/dms/image/C4E12AQEzvQvnN426Xg/article-cover_image-shrink_720_1280/0/1606703783771?e=2147483647&v=beta&t=CDy_PnYOK-Jy2Wlj_KALyNYslnf-k6cYCSqZpgRZAnQ",
          id: 6,
        },
      ],
      cryptoNames: [
        {
          name: "Bitcoin",
          shortName: "BTC",
          price: "555$",
        },
        {
          name: "Litecoin",
          shortName: "LTC",
          price: "959$",
        },
        {
          name: "Etherium",
          shortName: "ETH",
          price: "835$",
        },
      ],
      cards: [
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://cryptopotato.com/wp-content/uploads/2021/04/xrpusd-apr5.png",
        },
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://v2.cimg.co/news/99306/246426/responsive-images/impt-2___media_library_original_1827_877.jpg",
        },
      ],
    };
  },
  methods: {
    goMarket() {
      this.$router.push("/market");
    },
  },
 
};
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.image-container img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.logo-container img {
  width: 10rem;
}
.title-field p {
  text-align: center;
  font-size: 2rem;
}
.item-container {
  display: flex;
  flex-direction: row;
}
.bottom {
  margin-bottom: 20rem;
}
</style>