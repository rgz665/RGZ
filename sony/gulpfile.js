// 编写gulp管理文件
const gulp = require("gulp");

// html
gulp.task("copy-html",function(){
	return gulp.src("html/**/*").pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})

// images
gulp.task("copy-images",function(){
	return gulp.src("images/**/*").pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

// jquery
gulp.task("copy-jquery",function(){
	return gulp.src("jquery/**/*").pipe(gulp.dest("dist/jquery"))
	.pipe(connect.reload());
})


// data
gulp.task("copy-data",function(){
	return gulp.src("data/**/*").pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

// 建立工程
gulp.task("build",["copy-html", "copy-images", "copy-jquery", "copy-data", "scss-bottom","scss-detail","scss-head","scss-login","scss-my","scss-product"],function(){
	console.log("工程建立成功");
})


//sass插件
const scss = require("gulp-sass-china");
// 重命名
const rename = require("gulp-rename");
// 压缩
var minifyCSS = require("gulp-minify-css");

gulp.task("scss-bottom", function(){
	return gulp.src("scss/bottom.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("bottom.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-detail", function(){
	return gulp.src("scss/detail.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("detail.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("scss-head", function(){
	return gulp.src("scss/head.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("head.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("scss-login", function(){
	return gulp.src("scss/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-my", function(){
	return gulp.src("scss/my.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("my.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("scss-product", function(){
	return gulp.src("scss/product.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("product.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})



// gulp监听
gulp.task("watch", function(){
	gulp.watch("html/**/*",["copy-html"]);
	gulp.watch("images/**/*",["copy-images"]);
	gulp.watch("data/**/*",["copy-data"]);
	gulp.watch("scss/product.scss",["scss-product"]);
	gulp.watch("scss/my.scss",["scss-my"]);
	gulp.watch("scss/login.scss",["scss-login"]);
	gulp.watch("scss/head.scss",["scss-head"]);
	gulp.watch("scss/detail.scss",["scss-detail"]);
	gulp.watch("scss/bottom.scss",["scss-bottom"]);
	gulp.watch("jquery/**/*",["copy-jquery"]);
})

// 启动服务
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:9696,
		livereload:true
	})
})

// 默认任务
gulp.task("default", ["watch", "server"]);
