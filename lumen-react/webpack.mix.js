const mix = require("laravel-mix");

mix.ts("resources/js/app.tsx", "public/js").react();
mix.css("resources/css/hydrogen.css", "public/css");
mix.browserSync({
  proxy: 'http://localhost:8080/',
});

mix.version();
