from flask import Flask, request, render_template, session
from boggle import Boggle
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)
app.config["SECRET_KEY"] = "OHHHHHH_SNAP_SECRETIME"

debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route("/")
def gamepage():
    """Display the Board"""

    game_board = boggle_game.make_board()
    session["game_board"] = game_board

    return render_template("start_game.html", board=game_board)
