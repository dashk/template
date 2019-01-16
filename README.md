# Instructions
1. Setup VENV with Python 3, and activate environment
1. Clone repo
1. Start server by `python manage.py runserver`
1. Make sure you are able to access `http://127.0.0.1:8000/hello/`

# Goal (TBD)
1. Barebone Django with React app for candidate to start
1. App should include an example of a REST call and a basic React app

## What is intentionally left out?
1. Testing: Should we provide a basic testing framework/structure for the candidate? Or let the candidate figure out how it'd be done?
1. Django/React structure: I followed the tutorial (See `Logs` for link) to create a skeleton. However, I am not sure if it's Django's best practice, and React code is definitely NOT of best practice.
1. React: HTTP POST vs GET call
   * Sample app only performs a GET. Candidate will have to figure out how to do a POST.

## Thoughts around question prompt
1. Give candidate our grading category & criteria: If we expect these from candidates, then we should provide them what we'll be looking for.
1. Inform the candidate that they can restructure the project to however they like, as long as it's Django & React.
1. Let the candidate knows they can use any additional 3rd party libraries as needed.

# Feedback requested
1. Barebone nature of bootstrap
   * Is this basic enough for candidate to get started?
   * Should we improve the structure a bit/provide baseline libraries, so it reflects well on Simon?

# Logs
## Day 2: 9-1030p (90m)
1. Updated README.md to include startup instructions
1. Completed the tutorial with a working React backend call in place.
1. Saved & committed.

Note:
1. App structure (Both Django & React) are still in bad shape. Need touch-ups.

## Day 1: 9-945p (45m)
1. Googled for https://www.valentinog.com/blog/tutorial-api-django-rest
1. Followed guide to setup App #1. Created hello world endpoint.
1. Didn't like how it's structured (template vs backend vs server, how project names are structured.)
1. Restarted and reorganized project differently.
1. Saved & committed

