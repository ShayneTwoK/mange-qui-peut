<template>
<v-container class="justify-center">
    <v-dialog v-model="reservation" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="" dark v-bind="attrs" v-on="on">Réserver</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Réservation</v-card-title>
          <v-card-text>
            <v-date-picker v-model="date" full-width locale="fr-fr"></v-date-picker>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" color="secondary" @click="reservation = false; confirmationDialog = true">Réserver</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="confirmationDialog" width="500">
        <v-card>
          <v-card-title class="headline">Réservation</v-card-title>
          <v-card-text>
            <h4>Vous avez réservé pour la date suivante : {{date}}</h4>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="confirmationDialog = false; ">Ok</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    </v-container>
</template>

<script>

  export default {
    name: "Reservation",
    data () {
        return {
        reservation: false,
        confirmationDialog: false,
        date: new Date().toISOString().substr(0, 10)
        }
    }
  }
</script>
