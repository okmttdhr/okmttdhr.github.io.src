update:
	git add --all && git commit -m 'update' && git push origin master -f

deploy:
	cd build && make update
