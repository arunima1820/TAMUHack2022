import os
from plot import *
from flask import Flask, render_template
from flask import request

app = Flask(__name__)

# Input in the body:{
#   "envrating": number,
#   "socialrating": number,
#   "issuescareabout": [list of strings],
# }


@app.route("/recommendations", methods=["POST"])
def getStockRecommendations():
    envRating = int(request.form['envrating'])
    socialRating = int(request.form['socialrating'])
    issuesCareAbout = list(request.form['issuescareabout'])

    return stockRecommendations(envRating, socialRating, issuesCareAbout)


def stockRecommendations():
    pass


@app.route("/start")
def start():
    return render_template("getstarted.html")


@app.route("/about")
def about():
    generatePlot()
    return render_template("about.html")


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
