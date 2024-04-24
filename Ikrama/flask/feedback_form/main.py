from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def feedback():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def Submit():
    data = request.form['feedback']
    print(data)
    return "Feedback submited"
    


if __name__ == "__main__":
    app.run(debug=True)