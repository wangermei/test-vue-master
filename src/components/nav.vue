<template>
  <div class="contents-nav container">
    <a href="#">
      <div class="left">
        <!--<img v-bind:src="item.prodcutImg">-->
        <img src="../assets/index_bg.jpg">
      </div>
      <div class="right">
        <h2>{{item.productName}}</h2>
        <label>{{ item.productId}}</label>
        <p>
          <span>价格：</span>
          <span>{{item.prodcutPrice}}</span>
        </p>
      </div>
    </a>
  </div>

</template>
<script>
export default{
  props: {
    item: {
      type: Object,
      defult () {
        return {}
      }
    }
  }
}
</script>
<style>
.contents-nav{
  border:1px solid red;
}
.contents-nav a{
  overflow: hidden;
  display: block;
}
.contents-nav a .left,.right{
  width: 50%;
  float: left;
  padding: 20px;
  text-align: left;
}
.contents-nav a .left img{
  width: 200px;
  height: 200px;
}

</style>
