from flask import Flask

app = Flask(__name__, template_folder="../FrontEnd/templates", static_folder="../FrontEnd/Styling")


from BackEnd import routes
