function GUI() {
}

GUI.childs = [];
GUI.ids = [];
GUI.generateId = function () {
    for (var i = 0; i < GUI.ids.length; i++) {
    }
    GUI.ids.push(i);
    return i;
}

GUI.addChild = function (child) {
    GUI.childs.push(child);
    return (GUI.childs.length - 1);
}

GUI.getChild = function (id) {
    return GUI.childs[id];
}

function Button(text, x, y, width, height, onClick) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
    this.div = document.createElement('div');
    this.div.id = GUI.generateId();
    this.btn = document.createElement('input');
    this.btn.id = GUI.generateId();
    this.btn.type = 'button';
    this.btn.value = text;
    this.btn.onclick = onClick;
    this.css = document.createElement('style');
    this.css.type = 'text/css';
    this.css.innerHTML = "[id='" + this.div.id + "'] " + ' { position: absolute; left: ' + x + 'px; top: ' + y + 'px; z-index:1; width: ' + width + 'px; height: ' + height + 'px;}';
    this.css.innerHTML += "[id='" + this.btn.id + "'] " + //' { width: ' + width + 'px; height: ' + height + 'px;}';

    '{font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #ffffff; padding: 10px 20px;	background: -moz-linear-gradient(top, #f508f5 0%, #f2c9f2); ' +
	'background: -webkit-gradient(linear, left top, left bottom, from(#f508f5),to(#f2c9f2));-moz-border-radius: 30px;-webkit-border-radius: 30px;border-radius: 30px;' +
	'border: 1px solid #0a0a0a;-moz-box-shadow:0px 1px 3px rgba(0,0,0,0.5),inset 0px 0px 1px rgba(255,255,255,0.7);-webkit-box-shadow:0px 1px 3px rgba(0,0,0,0.5),' +
	'inset 0px 0px 1px rgba(255,255,255,0.7);box-shadow:	0px 1px 3px rgba(0,0,0,0.5),inset 0px 0px 1px rgba(255,255,255,0.7);text-shadow:0px -1px 0px rgba(000,000,000,0.7),' +
	'0px 1px 0px rgba(255,255,255,0.3);}';


    document.body.appendChild(this.css);
    this.div.appendChild(this.btn);
    document.body.appendChild(this.div);
    this.id = GUI.addChild(this);
}

Button.prototype = {
    setOnClick: function (newClick) {
        this.btn.onclick = newClick;
        this.onClick = newClick;
    },
    setX: function (x) {
        this.div.style.left = x;
        this.x = x;
    },
    setY: function (y) {
        this.div.style.top = y;
        this.y = y;
    },
    setWidth: function (width) {
        this.div.style.width = width;
        this.btn.style.width = width;
        this.width = width;
    },
    setHeight: function (height) {
        this.div.style.height = height;
        this.btn.style.height = height;
        this.height = height;
    },
}