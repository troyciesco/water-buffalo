a:
	cd api-wb && bun dev

c: 
	cd client-wb && bun dev

dev:
	(cd api-wb && bun dev) & \
	cd client-wb && bun dev


.PHONY: a c dev