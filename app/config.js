 requirejs.config({

 	shim: {
 		easel: {
 			exports: 'createjs'
 		}
 	},

    baseUrl: "app",
    paths: {
    	easel: 'components/EaselJS/lib/easeljs-nw.combined',
    	scripts: 'scripts'
    }
});


 console.log("loaded config.js")


 //../components/EaselJS/easeljs-0.8.2.min