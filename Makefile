update:
	git add --all && git commit -m 'update' && git push origin master -f

deploy:
	cp index.html build && \
	cd build && git add --all && git commit -m 'update' && git push origin master -f && \
	cd .. && make update
