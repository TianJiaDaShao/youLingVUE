var indexTpl=require('./index.string');
import commonUtil from '../utils/commonUtil';
commonUtil.render(indexTpl);

new Vue({
  el: '#index-container',
  data: {
    imgurl:'./images/md_splash.jpg'
  },
  methods: {
    reverseMessage: function () {
      alert(this.message);
    }
  }
})
