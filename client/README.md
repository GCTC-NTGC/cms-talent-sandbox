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

Install node modules:

```bash
npm i
```

Run the development server:

```bash
npm run dev
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

Run the production application:

```bash
npm run build && npm run start
```