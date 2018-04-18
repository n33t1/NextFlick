#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from collections import defaultdict

import pymysql
from array import array

import mysql.connector


cnx = pymysql.connect(host='localhost', user='root', password='',
             db='Movies',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor )

def fakeData():
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"], "language": "en", "year": 1996}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"], "language": "ch", "year": 2019}}
    temp = [a, b]
    return temp

def fetch_by_movie_id(movie_id):
    cur = cnx.cursor()
    # string
    cur.callproc('getMovieName', [movie_id])
    movieName = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    # list
    cur.callproc('getActors', [movie_id])
    actors = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    # string
    cur.callproc('getDirector', [movie_id])
    director = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    # list/array
    cur.callproc('getGenres', [movie_id])
    genre = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    # string
    cur.callproc('getLanguage', [movie_id])
    language = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    cur.callproc('getYear', [movie_id])
    # int/ string
    year = cur.fetchall()
    cur.close()

    currMovie = {"key": movie_id, "attributes": {"movieName":movieName, "actors": actors, "director": director, "genre": genres, "language": language, "year": year}}

    return currMovie

app = Flask(__name__)

@app.route("/")
def main():
    return "Welcome!"

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
    years = [
        { "id": 1, "label": '1908' },
        { "id": 2, "label": '1923' },
        { "id": 3, "label": '2098' },
        { "id": 4, "label": '1092' },
        { "id": 5, "label": '2015' }
    ]
    languages = [
        { "id": 1, "label": 'en' },
        { "id": 2, "label": 'ch' },
        { "id": 3, "label": 'fr' },
        { "id": 4, "label": 'bla' },
        { "id": 5, "label": 'blabla' }
    ]
    fakeData = [{"actors": actors, "directors": directors, "genres": genres, "years": years, "languages": languages}]
    return jsonify(fakeData)

@app.route("/addToMovieList", methods=["POST"])
def add_to_movie_list():
    id = request.json['id']
    print id

    # # run sql procedure to delete movie
    # cur = cnx.cursor()
    # cur.callproc('addToMovieList', [id])
    # cur.close()

    # userMovieList = get_user_movie_list()
    
    # return userMovieList

    temp = fakeData()

    return jsonify(temp)

@app.route("/deleteFromMovieList", methods=["POST"])
def delete_from_movie_list():
    id = request.json['id']
    print id

    # # run sql procedure to delete movie
    # cur = cnx.cursor()
    # cur.callproc('deleteFromMovieList', [id])
    # cur.close()

    # userMovieList = get_user_movie_list()
    
    # return userMovieList

    temp = fakeData()

    return jsonify(temp)

# query movies based on actor, director, genre or movie name
@app.route("/queryMovies", methods=["POST"])
def query_movies():
    keyword = request.json['keyword']
    # results = []

    # # do the following thing for actor, director, genere and movie name
    # cur = cnx.cursor()
    # cur.callproc('retrieveDirectorBasedOnKeyword', [keyword])
    # # return movie id, like 2131231
    # movieID= cur.fetchall()
    # if movieID is not None:
    #     # retrieve movie and format it
    #     results.append(fetch_by_movie_id(movieID))
    # cur.close()
    # return jsonify(results)

    temp = fakeData()

    return jsonify(temp)

@app.route("/getUserMovieList", methods=["GET"])
def get_user_movie_list():
# @app.route("/getUserMovieList", methods=["POST"])
# def get_user_movie_list():
#     userId = request.json['id']
#     print userId

    # cur = cnx.cursor()
    # cur.callproc('getUserMovieIDs', [userId])
    # # [123123, 73892]
    # MovieIDs = cur.fetchall()
    # cur.close()

    # result = []

    # for id in MovieIDs:
    #     currMovie = fetch_by_movie_id(id)
    #     result.append(currMovie)

    # return jsonify(result)

    temp = fakeData()

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

# fetch movies based on the quiz result
@app.route("/generateMovieList", methods=["POST"])
def generate_movie_list():
    # ["actor 1", "actor name 2"]
    actors = request.json['actors']
    directors = request.json['directors']
    genres = request.json['genres']
    language = request.json['language']
    year = request.json['year']

    # select based on the variables below and return the movie list in 
    # the following format
    cur = cnx.cursor()
    cur.callproc('generateMovieList', [actors, directors, genres, language, year])
    cur.close()

    temp = fakeData()

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

# endpoint for read user info
@app.route("/createMovie", methods=["POST"])
def add_movie():
    genres = request.json['genres'];
    actors = request.json['actors'];
    characters = request.json['characters'];
    year = request.json['year'];
    director = request.json['director'];
    movieName = request.json['movieName'];
    print genres, actors, characters, year, director, movieName
    # loginCred = request.json['loginCred']
    # password = request.json['password']
    # cur = cnx.cursor()
    # cur.callproc('loginUser', [loginCred, password])
    # cur.close()
    temp = fakeData()

    return jsonify(temp)

if __name__ == "__main__":
    app.run()