# FE Boilerplate

create sample website using CRA

## Installation

Before you install apps, you need to check the node version that you currently use. Please check the latest version of the node that we use in package.json. If you're not using the specified version, it is recommended to use Node Version Manager to upgrade your node version.

### Install Node Version Manager (NVM)

You can follow instruction from this repository: https://github.com/nvm-sh/nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

After you already install nvm, you can run this command to upgrade your node version, please kindly check version node js on package.json > `engines` > `node`

```sh
nvm use xx.xx.0
node --version
```

### Install git-cz

And then for the next setup, please ensure your machine already install [git-cz](https://www.npmjs.com/package/git-cz) on global depedency. You can run this command to install git-cz global on your machine.

```sh
npm install -g git-cz
```

### Install packages

```sh
make init-dev
```

If you have found issue for installing depedency, you can create some issue on this repository.

## Running Dev Server

### To run on your local machine

There are two ways of running on local machine. One is you run develop mode but the asset will be made runtime.

#### Running develop mode

```
make run-dev
```

Once you run the above command, you will expose your dev app on the default `3000` port. Finally, you can access the web on the url http://localhost:3000.

#### Running production mode

```
make run-production
```

Same as like running develop mode on your local machine, this apps will expose on the default port `3000`, you can access the web without build asset runtime.
