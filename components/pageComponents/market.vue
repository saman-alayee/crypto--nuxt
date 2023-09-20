<template>
  <div class="mt-8">
    <v-data-table
      :headers="headers"
      :items="coins"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.image="{ item }">
        <v-img
          v-if="item.image"
          :src="item.image"
          alt="Image"
          width="35"
        ></v-img>
      </template>
      <template v-slot:item.url="{ item }">
        <td>
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            class="btn-link"
          >
            Visit Site
          </a>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
  <script>
  export default {
    data () {
      return {
        search: '',
      
      }
    },
    computed: {
      headers () {
        return [
        {
          text: 'Rank',
          align: 'center',
          sortable: false,
          value: 'trust_score_rank',
        },
        {
          text: 'Image',
          align: 'center',
          sortable: false,
          value: 'image',
        },
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Price_24h',
            value: 'trade_volume_24h_btc',
            filter: value => {
              if (!this.trade_volume_24h_btc) return true

              return value < parseInt(this.trade_volume_24h_btc)
            },
          },
          {
            text: 'Price_24h_normal',
            value: 'trade_volume_24h_btc_normalized',
            filter: value => {
              if (!this.trade_volume_24h_btc) return true

              return value < parseInt(this.trade_volume_24h_btc)
            },
          },
          { text: 'Trust score', value: 'trust_score' },
          { text: 'Country', value: 'country' },
          { text: 'Site', value: 'url' },
        ]
      },
      coins(){
        return this.$store.getters["market/loadedCoins"];
      }
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
    mounted() {
    // Dispatch the action to fetch posts
    this.$store.dispatch("market/getCoins").then(() => {
      // Posts have been loaded
      console.log("coin loaded");
    });
  },
  }
</script>
<style scoped>
a {
  text-decoration: none; 
  color: #ffffff; 
  cursor: pointer; 
  background-color: green;
  padding: 8px;
  border-radius: 0.8rem;
}

a:hover {
}
</style>
