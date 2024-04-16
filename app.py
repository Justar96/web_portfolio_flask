from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


if __name__ == '__main__':
    # app.run(host='8.213.211.211',port=8080,ssl_context='adhoc')
    app.run(host='0.0.0.0',port=443,ssl_context='adhoc')