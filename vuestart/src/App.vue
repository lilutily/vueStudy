<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <!-- 바뀔일이 없으면 안해도 될듯 logo 같은 경우는 변경이 실시간으로 될 필요가 있을까? -->
    {{ logo }}
    <h4 class="red" :style="스타일">XX 원룸</h4>    
    {{ products[0] }}
    <p>{{ price1 }} 만원</p>
  </div>

  <div>
    <h4 class="red" style="color:rebeccapurple">XX 원룸</h4>
    {{ products[1] }}
    <p>{{ price2 }} 만원</p>
  </div>

  <div>
    <h4 class="red" style="color:rebeccapurple">XX 원룸</h4>
    {{ products[2] }}
    <p>{{ price2 }} 만원</p>
  </div>
  
</template>

<script>

// document.getElementById().innerHTML = ?? 자바스크립트 바인딩
// 데이터 바인딩 왜쓰는지? 

export default {
  name: 'App',
  data() {
    return  { // 중괄호니까 object 자료로 저장
      // 데이터 보관함
      price1 : 60,
      price2 : 70,
      logo : '원룸샵',
      스타일 : 'color :blue',
      products : ['원룸1', '원룸2', '원룸3']
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
