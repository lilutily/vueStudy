<template>
   <div class="menu">
    <!-- <a v-for="작명 in 반복" :key="작명">HOME</a> -->
    <a v-for="ver in menu " :key="ver">{{ ver }}</a>
    <a v-for="(a, i) in menu " :key="i">{{ i }}</a>
    <!-- key의 용도  
        반복물을 쓸때 꼭 써야한다
        반복문 돌린 요소를 컴퓨터가 구분하기 위해 사용
        
        Vue 반복문  
        변수 작명 2개까지 가능하다
      <a v-for="(a, i)in menu " :key="i">{{ i }}</a>
      왼쪽변수는 array 내의 데이터
      오른쪽변수는 1씩 증가하는 정수
      -->

   </div> 


  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <div>
    바뀔일이 없으면 안해도 될듯 logo 같은 경우는 변경이 실시간으로 될 필요가 있을까?
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
  </div> -->

  <div v-for="(pro,i) in 3" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}</p>
  </div>

  <div v-for="(pro,i) in select" :key="i">
    {{ select[i] }}
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
      products : ['원룸1', '원룸2', '원룸3'],
      menu : ['Home', 'Products', 'About'],
      price : ['60만원','70만원','80만원'],
      select : [
      {
        name : '원룸1',
        price : '50만원'
      },
      {
        name : '원룸2',
        price : '60만원'
      },
      {
        name : '원룸3',
        price : '70만원'
      }
      ]
    }
  },
  components: {
    
  }
}
</script>

<style>

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #ffffff;
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
