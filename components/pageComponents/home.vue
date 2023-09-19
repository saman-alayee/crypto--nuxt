<template>
  <v-container>
    <v-row justify="center">
      <v-col class="mt-4" cols="12" md="6" sm="12" align-self="center">
        <div class="space-container">
          <BaseText
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quisquam eligendi dolore."
            fontsize_title="30"
            fontsize_text="18"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis nihil magni a officia reprehenderit, ad aperiam accusamus, eveniet libero non dicta, deserunt labore est quia? Odio maxime vel, tempore hic error eius dolor ea vero tempora aliquid, nisi excepturi reiciendis tenetur nihil similique labore deserunt? Dolore quaerat corporis eos perferendis, repudiandae repellendus blanditiis provident quae quia minima velit aperiam sapiente. Repudiandae, quidem. Aliquam deleniti eos, sed architecto dicta facilis nulla distinctio! Nulla illo voluptatem ipsa, fugit mollitia amet ea? Architecto suscipit ut explicabo eos, consequatur odit quis aliquam!"
          />
          <p></p>
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
          <img :src="logo.file" alt="crypto image" /></div
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
        md="3"
        sm="6"
        v-for="item in cryptoNames"
        :key="item.name"
      >
        <v-card
          class="mx-auto rounded-lg"
          max-width="340"
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
      <v-col cols="12" md="3" sm="6" v-for="card in cards" :key="card.title">
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
import bitcoin from '../../assets/images/vectors/bitcoin.svg'
import dash from '../../assets/images/vectors/dash-3.svg'
import dogecoin from '../../assets/images/vectors/dogecoin.svg'
import eos from '../../assets/images/vectors/eos-3.svg'
import tron from '../../assets/images/vectors/tron.svg'
import tether from '../../assets/images/vectors/tether.svg'

export default {
  components: { Basebutton, BaseText, Basecard },
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],

      logos: [
        {
          file: bitcoin,
          id: 1,
        },
        {
          file: dash,
          id: 2,
        },
        {
          file: dogecoin,
          id: 3,
        },
        {
          file: eos,
          id: 4,
        },
        {
          file: tron,
          id: 5,
        },
        {
          file: tether,
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
        {
          name: "Bitcoin",
          shortName: "BTC",
          price: "555$",
        },
      ],
      cards: [
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.coindesk.com/resizer/FzvHZV_Yd5ln4EKPNEZBGDAeTDU=/1056x613/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/P6RW3RZA2JAY7BY5N54YDVNVCU.png",
        },
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          title: "Lorem ipsum dolor sit",
          describe: "Lorem ipsum dolor Lorem ipsum Lorem ipsum sit Lorem ipsum dolor sit",
          image:
            "https://image.cnbcfm.com/api/v1/image/107167409-1671184641667-gettyimages-1234311542-sindeyev-notitle210729_npFdq.jpeg?v=1692386766",
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
  width: 9rem;
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