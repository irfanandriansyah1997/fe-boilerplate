###########################################################################
## Make file
## @author: Irfan Andriansyah <irfan@99.co>
## @since: 2021.02.07
###########################################################################

default:

###########################################################################
## Make Initial Dev
###########################################################################
init-dev:
	@yarn add -D husky git-cz lint-staged
	@yarn install

###########################################################################
## Run On Dev Server
###########################################################################
setup-env-dev: cleansing-env
	@cp env/local/.env .env.local

run-dev: setup-env-dev
	@yarn start

###########################################################################
## Run On Production Server
###########################################################################
setup-env-production: cleansing-env
	@cp env/production/.env .env.production.local

compress-asset-production:
	@find ./build -name '*.js' -exec node_modules/.bin/gzipme {} \;
	@find ./build -name '*.css' -exec node_modules/.bin/gzipme {} \;

run-production: setup-env-production
	@yarn build
	@make compress-asset-production
	@yarn run serve


###########################################################################
## Setup ENV
###########################################################################
cleansing-env:
	@if [ -e ".env.production.local" ];then rm -rf ".env.production.local" ; fi
	@if [ -e ".env.local" ];then rm -rf ".env.local" ; fi
	@if [ -e ".env" ];then rm -rf ".env" ; fi
	@cp env/global/.env .env