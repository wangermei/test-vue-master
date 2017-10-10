<template>
  <div>


    <div style="padding: 30px 0;">
      <h1 v-if="errorMessage">{{errorMessage}}</h1>
      <div v-else>
        <span>{{ $store.state.count }}</span>
        <button @click="reduce" class="btn">-</button>
      </div>

      <div>
        {{ $store.state.add }}
        <button @click="add" class="btn">+</button>
      </div>
      <div>
        {{ $store.state.test }}
      </div>
    </div>

    <div class="banner">
      <img src=".././assets/content_bg.jpg"/>
    </div>
    <div class="container index-item">
      <ul>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <div class="index-item-title">
              <p>Buefy</p>
              <p>编码规范</p>
            </div>
            <div>
              <p>Buefy编码规范</p>
              <p>by @二妹</p>
            </div>
            <div>
              Bootstrap 编码规范：编写灵活、稳定、高质量的 HTML 和 CSS 代码的规范。
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'index',
    data () {
      return {
        errorMessage: ''
      }
    },
    methods: {
      async reduce () {
        try {
//          return this.$store.state.count++
          await this.$store.dispatch('reduce')
        } catch (err) {
          this.errorMessage = err.message
        }
      },
      add () {
//        return this.$store.state.add++
        this.$store.commit('add')
      }
//      roomNum () {
//        this.$store.commit('roomNum')
//      }
    }
  }
</script>

<style>
  .banner img {
    width: 100%;
    height: 400px;
  }

  .index-item {
    height: auto;
    overflow: hidden;
    margin-top: 20px;
  }

  .index-item ul li {
    width: 23%;
    float: left;
    text-align: center;
    padding: 5px;
    border: 1px solid #cccccc;
    margin: 10px;
  }

  .index-item div:nth-child(2) {
    margin: 35px 0 20px 0;
    font-size: 1.6rem;
  }

  .index-item div:nth-child(2) p:nth-child(2) {
    font-size: 1.2rem;
  }

  .index-item-title {
    background-color: #6f5499;
    color: #ffffff;
    padding: 15px 0;
    font-size: 1.8rem;
  }

  .index-item div:nth-child(3) {
    color: #666666;
    font-size: .8rem;
    margin-bottom: 20px;
    padding: 0 20px;
  }

  .btn {
    background-color: green;
    padding: 0 20px;
    margin: 10px;
    color: #ffffff;
    border: none;
    font-size: 2rem;
  }
</style>
