<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row justify-center>
   
        <v-card >
          <v-img :src="restaurant.image_url" height="585px"></v-img>
          <v-card-title><h2>{{restaurant.name}}</h2></v-card-title>
          <v-card-subtitle>
            <v-rating length="5" size="18" dense color="amber" background-color="yellow" half-increments :value="restaurant.rating" readonly></v-rating>
            ({{restaurant.review_count}} avis)
          </v-card-subtitle>
        </v-card>
 
      <v-container>
        <v-card>
          <v-card-title><h2>Détails</h2></v-card-title>
          <v-card-text>
            <h3>
            <p>{{restaurant.location.coordonnes}} {{restaurant.location.city}} ({{restaurant.location.zip_code}})</p>
            <p>{{restaurant.display_phone}}</p>
            <p>{{restaurant.categories.map(e => e.title).join(', ') }}</p><p></p>
            </h3>
          </v-card-text>
        </v-card>
      
      
        <v-card>
          <v-card-title><h2>Horaires</h2></v-card-title>
          <HeuresOuverture :heures="this.restaurant.hours[0].open"></HeuresOuverture>
        </v-card>
      </v-container>
      <!--<vue-map :locations="locations" v-model="map"></vue-map>-->
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import HeuresOuverture from "../components/HeuresOuverture";

export default {
    name: "InformationsRestaurant",
    components: { HeuresOuverture },
    data () {
    return {
      restaurant: Object,
      dataPhoto: [],
      requestMaps: ''
    }
  },
    methods: {
    requestDetailsRestaurant () {
      var url = 'https://cors-anywhere.herokuapp.com/' + 'https://api.yelp.com/v3/' + 'businesses/' + this.$route.params.id;
      url = encodeURI(url);
      axios.get(url, { headers: { Authorization: 'Bearer ' + 'GDR-vk9Dv1X-OX1UF5CtpB2QJz14OqFcMJpXZTR-zKTYtaPrZF7TpB_Jlt20Oi_B9JQrp77JyNbtikZs0wzZ4Mi6qSHrwaRm7LvNGW8RW8HqUzpQ-_2RcDgeZxdbYHYx' } }).then(payload => {
        this.restaurant = payload.data;
        this.restaurant.photos.forEach(element => {
        var src = element;
        this.dataPhoto.push(src);
        this.requestMaps = "https://www.google.com/maps/embed/v1/place?key=" + "AIzaSyDUEx13fhgEa-kE3huoTS-9iXRXtK0GFBI" + "&q=" + this.restaurant.name + " " + this.restaurant.location.coordonnes + " " + this.restaurant.location.city;
      });
      });
    }
  },
  mounted () {
    this.requestDetailsRestaurant();
  }
}

</script>
