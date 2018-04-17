#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from collections import defaultdict

import pymysql
from array import array

import mysql.connector

cnx = pymysql.connect(host='localhost', user='root', password='',
             db='Movies',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor )

app = Flask(__name__)

@app.route("/")
def main():
    return "Welcome!"

# endpoint for getting movie names
@app.route("/movies.json", methods=["GET"])
def get_movies():
    cur = cnx.cursor()
    stmt_select = "select mm.MovieName from Movie as mm order by mm.MovieName"

    cur.execute(stmt_select)
    temp = cur.fetchall()
    cur.close()
    return jsonify(temp)

@app.route("/genres.json", methods=["GET"])
def get_genres():
    # cur = cnx.cursor()
    # stmt_select = "select mm.MovieName from Movie as mm order by mm.MovieName"

    # cur.execute(stmt_select)
    # temp = cur.fetchall()
    # cur.close()
    actors = [
        { "id": 1, "label": 'Money' },
        { "id": 2, "label": 'Credit card' },
        { "id": 3, "label": 'Debit card' },
        { "id": 4, "label": 'Online payment' },
        { "id": 5, "label": 'Bitcoin' }
    ]
    directors = [
        { "id": 1, "label": 'directors1' },
        { "id": 2, "label": 'directors card' },
        { "id": 3, "label": 'directors card' },
        { "id": 4, "label": 'directors payment' },
        { "id": 5, "label": 'directors23' }
    ]
    genres = [
        { "id": 1, "label": 'genres' },
        { "id": 2, "label": 'genres card' },
        { "id": 3, "label": 'genres card' },
        { "id": 4, "label": 'genres payment' },
        { "id": 5, "label": 'genres Bitcoin' }
    ]
    fakeData = [{"actors": actors, "directors": directors, "genres": genres}]
    return jsonify(fakeData)

@app.route("/addMovie", methods=["POST"])
def add_movie():
    # temp = request.json
    # print len(request.json)
    # for i in range(len(temp)):
    #     print "request.json", temp[i]
    # username = request.json['actors']
    # email = request.json['directors']
    # password = request.json['genres']
    print request.json
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"]}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    c = { "key": 3, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    temp = [a, b, c]
    # cur = cnx.cursor()
    # cur.callproc('registerUser', [username, email, password])
    # cur.close()
    return jsonify(temp)

@app.route("/deleteMovie", methods=["POST"])
def delete_movie():
    # temp = request.json
    # print len(request.json)
    # for i in range(len(temp)):
    #     print "request.json", temp[i]
    id = request.json['id']
    # email = request.json['directors']
    # password = request.json['genres']
    print id
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"]}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    c = { "key": 3, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    temp = [a, b, c]
    # cur = cnx.cursor()
    # cur.callproc('registerUser', [username, email, password])
    # cur.close()
    return jsonify(temp)

@app.route("/queryMovies", methods=["POST"])
def query_movies():
    # temp = request.json
    # print len(request.json)
    # for i in range(len(temp)):
    #     print "request.json", temp[i]
    # username = request.json['actors']
    # email = request.json['directors']
    # password = request.json['genres']
    print request.json
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"]}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    temp = [a, b]
    # cur = cnx.cursor()
    # cur.callproc('registerUser', [username, email, password])
    # cur.close()
    return jsonify(temp)

@app.route("/getUserMovieList", methods=["GET"])
def get_user_movie_list():
    # temp = request.json
    # print len(request.json)
    # for i in range(len(temp)):
    #     print "request.json", temp[i]
    # username = request.json['actors']
    # email = request.json['directors']
    # password = request.json['genres']
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"]}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    temp = [a, b]
    # cur = cnx.cursor()
    # cur.callproc('registerUser', [username, email, password])
    # cur.close()
    return jsonify(temp)

# endpoint for adding new user
@app.route("/registerUser", methods=["POST"])
def register_user():
    print "request.json", request.json
    username = request.json['userName']
    email = request.json['email']
    password = request.json['password']
    print username, email, password
    cur = cnx.cursor()
    cur.callproc('registerUser', [username, email, password])
    cur.close()
    # print "register_user"
    return True

@app.route("/generateMovieList", methods=["POST"])
def generate_movie_list():
    # temp = request.json
    # print len(request.json)
    # for i in range(len(temp)):
    #     print "request.json", temp[i]
    username = request.json['actors']
    email = request.json['directors']
    password = request.json['genres']
    print username, email, password
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"]}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"]}}
    temp = [a, b]
    # cur = cnx.cursor()
    # cur.callproc('registerUser', [username, email, password])
    # cur.close()
    return jsonify(temp)

# endpoint for read user info
@app.route("/loginUser", methods=["POST"])
def login_user():
    # loginCred = request.json['loginCred']
    # password = request.json['password']
    # cur = cnx.cursor()
    # cur.callproc('loginUser', [loginCred, password])
    # cur.close()
    temp = {"userName": request.json['username'], "movieList": {"a":"abc"}}
    return jsonify(temp)

if __name__ == "__main__":
    app.run()