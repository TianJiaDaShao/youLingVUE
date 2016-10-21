let commonUtil={
  render(str){
    var container=document.querySelector('#index-container');
    container.innerHTML=str+container.innerHTML;
  }
};

export default commonUtil;
