from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def portfolio(): 
    return render_template('index.html')

@app.route('/about')
def portfolio2(): 
    return render_template('about.html')


if __name__ == '__main__': 
    app.run(debug=True)
