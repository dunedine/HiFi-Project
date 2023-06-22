from flask import Flask, request, jsonify, render_template
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

#num = 0

@app.route('/api/data', methods=['GET','POST'])
def process_data():
    print("수신됨")
    #global num
    # Retrieve data from the request
    #data = request.get_json()
    
    # Process the data (example: convert to uppercase)
    #processed_data = data['message'].upper() + " " + str(num)
    #num += 1
    
    conn = pymysql.connect(host='localhost', user='root', password='Rokmc1233!', db='hifi', charset='utf8')
    cur = conn.cursor()
    
    sql1 = "SELECT * FROM jugazisu;"
    cur.execute(sql1)
    jugazisu = cur.fetchall()

    sql2 = "SELECT * FROM jugazozak;"
    cur.execute(sql2)
    jugazozak = cur.fetchall()

    sql3 = "SELECT * FROM financialproduct;"
    cur.execute(sql3)
    financialproduct = cur.fetchall()

    sql4 = "SELECT * FROM budongsan;"
    cur.execute(sql4)
    budongsan = cur.fetchall()

    sql5 = "SELECT * FROM geumli;"
    cur.execute(sql5)
    geumli = cur.fetchall()

    sql6 = "SELECT * FROM jeonsesagi;"
    cur.execute(sql6)
    jeonsesagi = cur.fetchall()
    
    conn.close()

    #print(result6)
    #print("here:", data['message'])

    # Create a dictionary to hold the results
    response = {
        'jugazisu': jugazisu,
        'jugazozak': jugazozak,
        'financialproduct': financialproduct,
        'budongsan': budongsan,
        'geumli': geumli,
        'jeonsesagi': jeonsesagi
    }
    
    # Return the response as JSON
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='192.168.0.106', debug=True)