<template>
      <div>
      <v-card-text>
        <h3>Heures d'ouverture :  <br><br></h3>
        <div v-for="(item,i) in Heures" :key="i">
          <h4>{{Jours[item.day]}}</h4>{{item.text}}
        </div>
      </v-card-text>
      <v-card-text class=text-center>
        <div class="text-xs-center"><Reservation></Reservation></div>
      </v-card-text>
    </div>
</template>

<script>
  import Reservation from "../components/Reservation";

  export default {
    name: "HeuresOuverture",
    components: { Reservation },
    props: {
      heures: {
        type: Array
      }
    },
    data () {
        return {
        Jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        Heures: []
        }
    },
    methods: {
        formatHeureComplet () {
            console.log(this.heures);
            this.heures.forEach(heure => {
                heure.start = heure.start.substring(0, 2) + "h" + heure.start.substring(2, 4);
                heure.end = heure.end.substring(0, 2) + "h" + heure.end.substring(2, 4);
                var horaire = Object.create(null);
                horaire.day = heure.day;
                if (this.Heures[heure.day]) {
                  horaire.text = this.Heures[heure.day] + " | " + heure.start + " - " + heure.end + "  ";
                  this.Heures = horaire;
                } else {
                  horaire.text = heure.start + " - " + heure.end + " ";
                  this.Heures.push(horaire);
                }
            });
            console.log(this.Heures);
        }
    },
    mounted () {
        this.formatHeureComplet();
    }
  }
</script>
