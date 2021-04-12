<template>
  <v-container class="pt-4">
    <v-row>
      <v-col>
          <v-text-field class="px-5 mt-4" v-model="recherche" label="Restaurants" outline solo-inverted></v-text-field>
      </v-col>
      </v-row>
      <v-row>
      <v-col>
          <v-text-field class="px-5 py-1" v-model="ville" label="Ville" value="Lyon" outline solo-inverted></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <v-text-field class="px-5 py-1" v-model="categories" label="Catégories" outline solo-inverted></v-text-field>
          <!-- feature incomplete, j'ai choisit un text-field pour plus de simplicité
          <v-checkbox v-model="checkboxFrench" label="French"></v-checkbox>
          <v-checkbox v-model="checkboxTea" label="Tea"></v-checkbox>
          <v-checkbox v-model="checkboxLyonnais" label="Lyonnais"></v-checkbox>-->
      </v-col>
      </v-row>
    <v-row>
      <v-col>
        <v-card class="px-5 py-1">
          <v-switch v-model="ouvert" label="Ouvert actuellement"></v-switch>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="px-5 py-2">
          <v-range-slider v-model="note" :min="0" :max="5" step="0.5" label="Note" thumb-label="always"></v-range-slider>
        </v-card>
      </v-col>
    </v-row>
        <v-layout row wrap>
          <ListeRestaurant v-for="restaurant of restaurants" :key="restaurant.id" :restaurant="restaurant" :categories="categories" :note="note"></ListeRestaurant>
        </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import ListeRestaurant from '../components/ListeRestaurant';

export default {
  name: 'Accueil',

  components: { ListeRestaurant },

  data () {
    return {
      restaurants: [],
      recherche: '',
      ville: '',
      ouvert: false,
     // checkboxFrench: '',
     // checkboxTea:'',
     // checkboxLyonnais: '',
      categories: '',
      // bug avec min, max moins fluide quadn on les enleve recherche erroné
      min: 0,
      max: 5,
      note: [0, 5]
    }
  },

  methods: {

    requestRestaurant () {
      
      var url = 'https://cors-anywhere.herokuapp.com/' + 'https://api.yelp.com/v3/' + 'businesses/search?categories=restaurants&limit=35';
      
      if (this.ville) {
         url = url + '&location=' + this.ville; } 
      else {
         url = url + '&location=Lyon'
      }

      if (this.recherche != null) {
         url = url + '&term=' + this.recherche;
      }

      url = url + '&open_now=' + this.ouvert;
      url = encodeURI(url);

      axios.get(url, { headers: { Authorization: 'Bearer ' + 'GDR-vk9Dv1X-OX1UF5CtpB2QJz14OqFcMJpXZTR-zKTYtaPrZF7TpB_Jlt20Oi_B9JQrp77JyNbtikZs0wzZ4Mi6qSHrwaRm7LvNGW8RW8HqUzpQ-_2RcDgeZxdbYHYx' } }).then(payload => {
        this.restaurants = payload.data.businesses;
      });
    },
  },
  // des que la page se log, lance la request et affiche les restaurants
  mounted () {
    this.requestRestaurant();
  }
}
</script>