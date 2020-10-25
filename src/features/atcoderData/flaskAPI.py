from flask import Flask, jsonify, abort, make_response
from flask_cors import CORS
import pandas as pd


api = Flask(__name__)
CORS(api)


@api.route('/rate/<string:userName>', methods=['GET'])
def get_user(userName):
    data = pd.read_html("https://atcoder.jp/users/{}/history".format(userName))
    adopt = data[0].drop(columns=['Rank', 'Performance','Unnamed: 6'])

    print(adopt)
    result = adopt.to_json(orient='records')

    return make_response(jsonify(result))




if __name__ == "__main__":
    api.run(debug=True)