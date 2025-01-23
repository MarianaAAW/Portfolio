from flask import render_template,redirect,url_for,flash
from BackEnd import app


@app.route("/")
@app.route("/home")
def home():
    return render_template('./body/home.html')

@app.route("/about")
def about():
    return render_template('./body/about.html')