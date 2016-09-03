from flask import Flask
from flask import request
from flask import render_template
from newspaper import Article

app = Flask(__name__)




@app.route("/read")
def read():
    url = request.args.get("url")
    a = Article(url)
    a.download()
    a.parse()
    
    paragraphs = a.text.split("\n\n")

    return render_template("article.html", paragraphs=paragraphs, title=a.title)

if __name__ == '__main__':
    app.run(port=5000, debug=True)

