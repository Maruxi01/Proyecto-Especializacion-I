<!-- eslint-disable  -->
<template>
  <div >
    <div class="flex-container">
      <div class="flex-child">
        <div class="container">
          <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">Fecha</th>
              <th scope="col">Puntuacion</th>
              <th scope="col">Duracion</th>
            </tr>
          </thead>
          <tbody>
            <!--
      <tr v-for="(session, index) in usuarios.sessions" :key="index">
      <th scope="row" >{{session.id}}</th>
      <td>{{session.date}}</td>
      <td>{{session.score}}</td>
      <td>{{session.duration}}</td>
    </tr>
    -->     
            <tr>
              <th scoped="row">1</th>
              <td>02/11/2021</td>
              <td>3.9</td>
              <td>60</td>
            </tr>
            <tr>
              <th scoped="row">1</th>
              <td>02/11/2021</td>
              <td>3.9</td>
              <td>60</td>
            </tr>
            <tr>
              <th scoped="row">1</th>
              <td>02/11/2021</td>
              <td>3.9</td>
              <td>60</td>
            </tr>
            <tr>
              <th scoped="row">1</th>
              <td>02/11/2021</td>
              <td>3.9</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>

          
        </div>
        
      </div>
      <div class="flex-child">
        <canvas id="myChart" width="400" height="400" class="mt-5"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js/auto";
import axios from "axios";
const url =
  "https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws";

export default {
  name: "SesionesCompletadas",
  data() {
    return {
      sessions: [],
      usuario: null,
      filteredSessions: [1,2,3,4,5,6]
    };
  },
  methods: {
    getSessions() {
      for (let j = 10; j < 60; j += 10) {
        const holder = [];
        for (let i = 0; i < this.sessions.length; i++) {
          if (this.sessions[i] <= j) {
            holder.push(this.sessions[i])
          }
        }
        saveMedia(holder)
      }
    },
    saveMedia(holder){
      let sum = 0
      for (let i = 0; i < holder.length; i++){
        sum+=holder[i]
      }
      media = sum/holder.length
      this.filteredSessions.push(media)
    }
  },

  async created() {
    console.log("INICIO"+this.filteredSessions)
    console.log("Obteniendo usuarios...");
    await axios.get(url).then((respuesta) => {
      console.log(respuesta.data);
      for (let i = 0; i < respuesta.data.length; i++) {
        if (respuesta.data[i].username === "bpritero") {
          this.sessions = respuesta.data[i].sessions;
          console.log(respuesta.data[i].username);
          console.log(this.sessions);
        }
      }
    });
    let countSessions = 0
    for (let j = 10; j <= 60; j += 10) {
        if(countSessions===23){
          this.filteredSessions.push(0)
        }
        console.log(j)
        let holder = [];
        let jless=j-10
        for (let i = 0; i < this.sessions.length; i++) {
          if (this.sessions[i].score <= j && this.sessions[i].score >= jless) {
            holder.push(this.sessions[i].score)
          }
        }
      let sum = 0
      for (let i = 0; i < holder.length; i++){
        sum+=holder[i]
        console.log(holder[i])
        //console.log(sum)
      }
      if(countSessions!=23){
        let media = sum/holder.length
      console.log(media)
      this.filteredSessions.push(media)
      countSessions+=holder.length
      console.log()
      holder = [];
      sum = 0
      }
      
      }
      console.log("FIN"+this.filteredSessions)
  },

  mounted() { 
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60"],
        datasets: [
          {
            label: "Puntaje de duraciones",
            data: this.filteredSessions,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            color: "rgba(255, 255, 255, 1)",
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
}
.container{
  background-color:white;
  border-radius: 15px;
}
.flex-child {
  flex: 1;
  margin: 80px;
}
</style>
