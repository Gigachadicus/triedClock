# Checkout The TIme:


### I wanted to explore how microsevices work. I made 2 containers one gets the time from its local clock and send it to another container which takes it and can display it. 

##I have:

1. Docker Container(aka second-server @ port:8080): To get time from local time and send it from its 8080 port. Technologies: express.

2. Docker Container(aka first-server @ port:5000): To display time from second server and display from its 5000 port. Technologies: express.

Used EJS as templating engine.
