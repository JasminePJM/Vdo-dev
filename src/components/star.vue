<template>
  <span class='star'>
     <img src='../assets/icon/星.png' value="star" v-for="n in ratingObj.star" :key="'star'+n">
     <img src='../assets/icon/半星.png' value="star_half" v-for="n in ratingObj.half" :key="'half'+n">
     <img src='../assets/icon/空星.png' value="star_border" v-for="n in ratingObj.left" :key="'left'+n">
  </span>
</template>

<script>
  export default {
    props: ['rating'],
    computed: {
      ratingObj() {
        const intNum = Math.round(this.rating);
        const star = Math.floor(intNum / 2);
        const half = intNum % 2;
        const left = 5 - star - half;
        return {
          star,
          half,
          left,
        };
      },
    },
  };
</script>

<style scoped>
  .star{
    display: flex;
  }
  .star img{
    width: 0.26rem;
    height: 0.26rem;
  }
</style>

