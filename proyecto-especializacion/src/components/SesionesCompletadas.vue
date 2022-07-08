<!-- eslint-disable  -->
<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-child">
        <table class="table table-dark">
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
          </tbody>
        </table>
      </div>
      <div class="flex-child">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Chart from "chart.js/auto";
import axios from "axios";
const url = "https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws"

export default {
  name: "SesionesCompletadas",
  data() {
    return {
      sessions: [],
      usuario: null,
    };
  },
  methods: {
    getUser() {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == 1) {
          this.usuario = usuarios[i];
        }
        console.log(this.usuario);
      }
    },
  },
  async created(){
    console.log("Obteniendo usuarios...")
    await axios(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    }).then((respuesta) => {
      console.log(respuesta.data)
      const usuario ={
        id: respuesta.data.id,
        username: respuesta.data.username,
        sessions: respuesta.data.sessions
      };
      console.log(usuario)
      if(usuario.username === "zmorrott0"){
        this.sessions = usuario.sessions
        console.log(this.sessions)
      }
    })
  },
  mounted() {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["0-10", "11-20", "21-30", "31-40", "41-50", "51-60"],
        datasets: [
          {
            label: "# of Votes",
            data: [1.6, 2, 3.9, 2, 4, 1.2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
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

.flex-child {
  flex: 1;
  padding: 10px;
}

</style>
