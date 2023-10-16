<template>

<!-- <div v-for="(item, index) in listItems" :key="index">
    {{item.name}}

  </div> -->

 

  <div class="profile">
    <h1>This is an profile page</h1>
   
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      listItems: [],
    };
  },
  methods: {
    async getData() {
      fetch("http://localhost:3000/api/users",  {
        method: 'GET',
      headers: {
        accept: 'application/json',
      },
})
      .then(resp => resp.json())
      .then(data => console.log(data));
        // const res = await fetch("http://localhost:3000/api/users");
        // const finalRes = await res.json();
        // this.listItems = finalRes;
        // console.log("aaaaaaaaaaaaa",this.listItems);
      }
  },

  mounted() {
      this.getData()
    }
};
</script>