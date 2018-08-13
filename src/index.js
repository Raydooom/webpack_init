import _ from 'lodash'
import Bg from './bg.png'
import './style.css'

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.className = "hello";

    var img = new Image();
    img.className = "img";
    img.src = Bg;
    element.appendChild(img);

    return element;
}

document.body.appendChild(component());