DEFAULT_GOAL: buildContainer

buildContainer:
	docker build -t exchangerfrontend:latest .