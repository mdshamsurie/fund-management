<template>
  <div class="container">
 
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <table class="table">
      
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr v-for="(item, index) in listItems" :key="index">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.username }}</td>
      <td>@{{ item.email }}</td>
    </tr>
   
  </tbody>
</table>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
   // HelloWorld
  },


data() {
    return {
      listItems: [],
    };
  },
  methods: {
    async getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const finalRes = await res.json();
        this.listItems = finalRes;
        console.log("aaaaaaaaaaaaa",this.listItems[1].name);
      }
  },

  mounted() {
      this.getData()
    }
};
</script>
