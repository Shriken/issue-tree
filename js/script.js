var TREE = {};

TREE.setup = function() {
	TREE.setConsts({
		canvas : document.getElementById("canvas"),
	});
	TREE.setConsts({
		ctx : TREE.canvas.getContext("2d"),
		windowX : -TREE.canvas.width / 2,
		windowY : -TREE.canvas.height / 2,
	});

	var canvas = TREE.canvas,
		height = canvas.height,
		width = canvas.width;
	TREE.rootNode = TREE.Node.newNode(0, 0, 40);

	canvas.onclick = TREE.Input.onClick;
}

TREE.run = function() {
	TREE.Render.render();
	setTimeout(TREE.run, 30);
}

// With thanks to Wolfenstein3D-browser
TREE.setConsts = function(C) {

    for (var a in C) {
        if (C.hasOwnProperty(a) && !(a in TREE)) {
            TREE[a] = C[a];
        }
    }
}

//If v is undefined, return d, else return v
TREE.defaultTo = function(v, d) {

    return typeof v != "undefined" ? v : d;
}


window.onload = function() {
	TREE.setup();
	TREE.run();
};
