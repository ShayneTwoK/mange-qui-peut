<template>
  <v-flex xs13 sm7 md5 lg4 xl3 class="pa-4" v-if="affichage">
    <v-card>
      <v-img :src="restaurant.image_url" height="200"></v-img>
      <v-card-title ><h3>{{restaurant.name}}</h3></v-card-title>
      <v-card-subtitle><v-rating length="5" size="18" dense color="amber" background-color="yellow" half-increments :value="restaurant.rating" readonly></v-rating></v-card-subtitle>
      <v-card-text>
        <h4>
        <p>{{restaurant.price}} - {{restaurant.location.city}} ({{restaurant.location.zip_code}})</p>
        <p>{{restaurant.categories.map(e => e.title).join(', ') }}</p>
        </h4>
      </v-card-text>
      <v-card-actions>v
        <v-btn color="deep-purple lighten-2" text :to="`/detail/${restaurant.id}`">Plus d'informations</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>

  export default {
    name: "ListeRestaurant",

    props: {
      restaurant: Object,
      categories: {
        type: String,
        default: ''
      },
      note: {
        type: Array,
        default: new Array([0, 5])
      }
    },

    computed: {
      affichage () {
        var affichage = true;
        if (this.categories !== '') affichage = (this.restaurant.categories.map(category => { return category.alias })).join("").includes(this.categories);
        affichage = affichage && (this.restaurant.rating >= this.note[0] && this.restaurant.rating <= this.note[1]);
        return affichage;
      }
    }
  }
</script>
