(function() {
    // 监听鼠标点击事件
    document.addEventListener('click', function(e) {
        // 创建一个小圆点元素
        var ripple = document.createElement('span');
        
        // 设置圆点的初始样式
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none'; // 防止遮挡网页原本的点击
        ripple.style.zIndex = '99999'; // 保证在最上层
        ripple.style.transform = 'translate(-50%, -50%)';
        // 随机颜色，让每次点击颜色都不一样
        var hue = Math.floor(Math.random() * 360);
        ripple.style.backgroundColor = 'hsla(' + hue + ', 100%, 60%, 0.8)';
        
        document.body.appendChild(ripple);
        
        // 动画效果：慢慢变大、变透明
        var animation = ripple.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(6)', opacity: 0 }
        ], {
            duration: 600, // 持续 0.6 秒
            easing: 'ease-out'
        });
        
        // 动画结束后把元素删掉，保持页面干净
        animation.onfinish = function() {
            ripple.remove();
        };
    });
})();