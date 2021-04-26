# Getting Started
## Development
### unix, macOS
Install and then run [Node Version Manager](https://github.com/nvm-sh/nvm):

```bash
nvm use
```
### Windows
Get version value from .nvmrc file.
Install and then run [nvm-windows](https://github.com/coreybutler/nvm-windows):

```bash
nvm use {nodeVersionFromFile}
```

Install node packages:

```bash
npm i
```

Run the development server:

```bash
npx h2-compile & npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker
Build container with: 
```bash
docker build . -t client-next-js-app
```

Run container with: 
```bash
docker run -p 3000:3000 client-next-js-app
```

## Production

Build and run the production application:

```bash
npx h2-build && npm run build && npm run start
```