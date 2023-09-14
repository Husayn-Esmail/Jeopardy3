# what if this file runs the server and opens the webpage in the user's default browser

from django.core.management import call_command
import jeopardy_3.wsgi
if __name__ == '__main__':
    application = jeopardy_3.wsgi.application
    call_command("runserver", "0.0.0.0:8000")