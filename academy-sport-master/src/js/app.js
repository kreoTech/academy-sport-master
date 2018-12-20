import sayHello from './lib/sayHello.js';
import Vue from 'vue';
import Vuesax from 'vuesax';
 

sayHello();

Vue.use(Vuesax);


new Vue({
  el: '#wrap',
  data: () => ({
    active: false,
    activeSearch: false,
    // select1Normal:'',
    select1: 2,
    options1:[
      {text:'Все',value:1},
      {text:'Непрочитанные',value:2},
      {text:'Прочитанные',value:3},
      {text:'Текущая страница',value:4},
    ],
    checkBox1: false,
    checkBox2: false,
    checkBox3: false,
    checkBox4: false,
    checkBox5: false,
    checkBox6: false,
    checkBox7: false,
    checkBox8: false,
    checkBox9: false,
    checkBox10: false,
    checkBox11: false,
    checkBox12: false,
    currentx: 1,
    colorx: '#e8242b',
    popupActivo: false,
  })
});
