<script setup>
import { ref } from 'vue'

const v=ref(0);//飞船的速度（m/s)
const t=ref(0);//飞船外时间（s）
const x=ref(0);//飞船走过的距离（m）
const t2=ref(0);//飞船内时间(s)
const c=ref(299792458);//光速

function Lorentz(){
  x.value=v.value*t.value;
  t2.value=(t.value-(v.value/c.value**2*x.value))/Math.sqrt(1-(v.value**2/(c.value**2)));
  //洛伦兹变换，将飞船外的物理量变换为以飞船内为参考系
};

</script>

<template>
  飞船的速度（m/s）：<input v-model="v"/><br>
  飞船外时间（s）:<input v-model="t"><br>
  小说设定的光速（默认是299792458m/s）：<input v-model="c"><br>
  
  <button @click="Lorentz()">开始计算</button><br>

  飞船内时间（s）：{{ t2 }}<br>
飞船走过的距离（m）:{{ x }}<br>
  

</template>

<style scoped>

</style>
