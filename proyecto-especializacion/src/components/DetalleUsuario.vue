<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
  return{
    usuarios: [
      {
        id: 1,
        username: "zmorrott0",
        sessions: [
          {
                id: 1,
                date: "02/11/2021",
                score: 3.9,
                duration: 60
            },
            {
                id: 2,
                date: "09/14/2021",
                score: 1.6,
                duration: 13
            },
        ]
      },
      {
        id: 2,
        username: "ldambrogio1",
        sessions: [
          {
                id: 1,
                date: "07/23/2021",
                score: 1.9,
                duration: 54
            },
            {
                id: 2,
                date: "02/18/2021",
                score: 4.5,
                duration: 37
            },
        ]
      }
    ]
  }
}
};
</script>

<style scoped>

</style>
