document.addEventListener('DOMContentLoaded', function () {
  // 从上到下顺序排列
  const domList = [
    "#word1",
    "#word2",
    "#word3",
    "#word4",
    "#word5"
  ];

  // 单行渐显
  function fadeIn(selector) {
    return new Promise(resolve => {
      let el = document.querySelector(selector);
      el.style.opacity = 1;
      // 等待动画结束再执行下一行
      setTimeout(resolve, 350);
    })
  }

  // 循环串行执行
  async function run() {
    for (let sel of domList) {
      await fadeIn(sel);
    }
  }

  run();
})



