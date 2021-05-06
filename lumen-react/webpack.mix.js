const mix = require("laravel-mix");

mix.ts("resources/js/app.tsx", "public/js").react().browserSync('localhost:8080');

mix.version();