/*
 * @Author: 冷弋白
 * @LastEditTime: 2020-12-13 21:10:36
 */
var x = 0;
var y = 0
var X = 0;
var Y = 0;
var flag = 1;
var room = document.querySelector('.room')
document.addEventListener('mousedown', function (e) {
    var downX = e.clientX;
    var downY = e.clientY;
    document.addEventListener('mousemove', fn);

    function fn(e) {
        var moveX = e.clientX;
        var moveY = e.clientY;
        x = moveX - downX + X;
        y = downY - moveY + Y;
        function a() {
            var MinReverse = 225 * sensitive;
            var MaxReverse = 675 * sensitive;
            var Fixed = 1000 * sensitive;
            console.log(MinReverse, MaxReverse, Fixed);
            if (y < -MinReverse && y > -MaxReverse) {
                x = downX - moveX + X;
            }
            if (y < -Fixed) {
                y = -Fixed;
            }
            if (y > MinReverse && y < MaxReverse) {
                x = downX - moveX + X;
            }
            if (y > Fixed) {
                y = Fixed;
            }
        }
        function judge(flag) {
            if (flag) {
                a();
            }
        }
        judge(flag);
        ul.style.transform = 'rotateX(' +
            y / sensitive / 2.5 + 'deg) rotateY(' + x / sensitive / 2.5 + 'deg)';
        room.style.transform = 'rotateX(' +
            y / sensitive / 2.5 + 'deg) rotateY(' + x / sensitive / 2.5 + 'deg)';
    }
    document.addEventListener('mouseup', function () {
        X = x;
        Y = y;
        document.removeEventListener('mousemove', fn)
    });
})
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
})
