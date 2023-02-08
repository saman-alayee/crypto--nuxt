<template>
  <v-card class="mx-auto card-radius" max-width="500" elevation="1">
    <v-list-item three-line>
      <div class="card-container">
        <v-list-item-avatar tile size="75" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div v-if="this.condition == 'لغو شده'" class="red-badge-container">
            {{ condition }}
          </div>
          <div v-else class="green-badge-container">{{ condition }}</div>
          <div class="pe-2 mt-1">
            <h3>{{ name }}</h3>
            <div class="icontext-container mt-3">
              <div class="icon-container">
                <img src="@/assets/images/icons/location.png" alt="icon date" />
              </div>
              <div class="text-container">
                <p>{{ city }}</p>
              </div>
            </div>
          </div>
        </v-list-item-content>
      </div>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <div class="icontext-container">
          <div class="icon-container">
            <img src="@/assets/images/icons/calendar.png" alt="icon date" />
          </div>
          <div class="text-container">
            <p><b>تاریخ اخذ شیفت : </b>{{ dateGetting }}</p>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <div class="icontext-container">
          <div class="icon-container">
            <img src="@/assets/images/icons/calendar.png" alt="icon date" />
          </div>
          <div class="text-container">
            <p><b>تاریخ شیفت :</b>{{ date }}</p>
          </div>
        </div>
      </v-list-item-content> </v-list-item
    ><v-list-item>
      <v-list-item-content>
        <div class="icontext-container">
          <div class="icon-container">
            <img src="@/assets/images/icons/clock.png" alt="icon date" />
          </div>
          <div class="text-container">
            <p><b>ساعت شیفت :</b>{{ time }}</p>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dateGetting: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
    },
    // greenBadge: {
    //     type:Boolean,
    //     required: true,
    // },
    //  grayBadge: {
    //     type:Boolean,
    //     required: true,
    // }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.green-badge-container {
  background-color: rgb(11, 215, 11);
  border-radius: 4px;
  position: absolute;
  top: 15px;
  color: rgb(255, 255, 255);
  left: 15px;
  width: 50px;
  font-size: 14px;
  height: auto;
  text-align: center;
}
.red-badge-container {
  background-color: red;
  border-radius: 4px;
  position: absolute;
  top: 15px;
  color: rgb(255, 255, 255);
  left: 15px;
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
.info-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.icontext-container {
  display: flex;
  flex-direction: row;
  margin-top: -8px;
}
.icon-container img {
  width: 18px;
  padding-left: 4px;
}
.card-radius {
    border-radius: 8px;
}
</style>