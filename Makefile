# NOTE: there's a force on npm i in the api because of a peer deps issue.
# This isn't a problem with bun, but I wanted to make this work with npm.
from-scratch:
	cd api-wb && rm -rf node_modules
	cd client-wb && rm -rf node_modules
	cd api-wb && npm i --force
	cd client-wb && npm i
	cd api-wb && npx prisma migrate reset --force
	cd api-wb && npm run seed
	$(MAKE) dev

a:
	cd api-wb && npm run dev

c: 
	cd client-wb && npm run dev

dev:
	(cd api-wb && npm run dev) & \
	cd client-wb && npm run dev


.PHONY: a c dev from-scratch