from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def feedback_form():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_feedback():
    feedback = request.form['feedback']
    print(feedback)
    # Here you can process the feedback, e.g., save it to a database
    return 'Thank you for your feedback!'

if __name__ == '__main__':
    app.run(debug=True)

