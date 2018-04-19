#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
from collections import defaultdict

import pymysql
from array import array

import mysql.connector

tempp = [
    {
        "actors": [
            {
                "id": 192,
                "label": "Jack Black"
            },
            {
                "id": 200,
                "label": "Bruce Willis"
            },
            {
                "id": 218,
                "label": "Martin Lawrence"
            },
            {
                "id": 260,
                "label": "Josh Hutcherson"
            },
            {
                "id": 286,
                "label": "Adam Sandler"
            }
        ],
        "directors": [
            {
                "id": 820,
                "label": "Bill Paxton"
            },
            {
                "id": 796,
                "label": "Cathy Malkasian"
            },
            {
                "id": 300,
                "label": "Andrzej Bartkowiak"
            },
            {
                "id": 776,
                "label": "Jodie Foster"
            },
            {
                "id": 306,
                "label": "Bobby Farrelly"
            }
        ],
        "genres": [
            {
                "id": 2,
                "label": "Adventure"
            },
            {
                "id": 7,
                "label": "Thriller"
            },
            {
                "id": 10,
                "label": "History"
            },
            {
                "id": 17,
                "label": "Documentary"
            },
            {
                "id": 12,
                "label": "Western"
            }
        ],
        "languages": [
            {
                "id": 1,
                "label": "English"
            },
            {
                "id": 2,
                "label": "French"
            },
            {
                "id": 3,
                "label": "Spanish"
            },
            {
                "id": 4,
                "label": "German"
            },
            {
                "id": 5,
                "label": "Chinese"
            }
        ],
        "years": [
            {
                "id": 1,
                "label": "1970's"
            },
            {
                "id": 2,
                "label": "1980's"
            },
            {
                "id": 3,
                "label": "1990's"
            },
            {
                "id": 4,
                "label": "2000's"
            },
            {
                "id": 5,
                "label": "2010+"
            }
        ]
    }
]

cnx = pymysql.connect(host='localhost', user='root', password='root',
             db='Movies',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor )

languageHash = {"en": "English", "ja": "Japanese", "fr": "French", "zh": "Albanian", "es": "Spanish", "de": "German", "hi": "Hindi", "ru": "Russian", "ko": "Korean", "te": "Telugu", "cn": "Chinese", "it": "Italian"}
reverseLangHash = {"English": "en", "Japanese": "ja", "French": "fr", "Albanian": "zh", "Spanish": "es", "German": "de", "Hindi": "hi", "Russian": "ru", "Korean": "ko", "Telugu": "te", "Chinese": "cn", "Italian": "it"}
timeHash = {"1970's": [1970, 1979], "1980's": [1980, 1989], "1990's": [1990, 1999], "2000's": [2000, 2009], "2010+": [2010, 2019]}

def fakeData():
    a = {"key": 1, "attributes" : {"movieName": "movie name 1", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["action", "adventure"], "language": "en", "year": 1996}}
    b = { "key": 2, "attributes" : {"movieName": "movie name 2", "actors":["ab", "abb", "bab","bba"], "director": "abc", "genre": ["sad", "csasca"], "language": "ch", "year": 2019}}
    temp = [a, b]
    return temp

def fetch_by_movie_id(movie_id):

    cur = cnx.cursor()
    # string
    cur.callproc('get_movie_name', [movie_id])
    movieName = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    # list
    cur.callproc('get_actors', [movie_id])
    temp = cur.fetchall()
    actors = []
    for a in temp:
        aName = a['ActorName']
        if aName[-1:] == '\r':
            aName = aName[:-1]
        actors.append(aName)
    cur.close()

    cur = cnx.cursor()
    # string
    cur.callproc('get_director', [movie_id])
    temp = cur.fetchall()
    director = temp[0]['DirectorName']
    if director[-1:] == '\r':
            director = director[:-1]
    cur.close()

    cur = cnx.cursor()
    # list/array
    cur.callproc('get_genres', [movie_id])
    temp = cur.fetchall()
    genres = []
    for g in temp:
        genres.append(g['GenreTitle'])
    cur.close()

    cur = cnx.cursor()
    # string
    cur.callproc('get_language', [movie_id])
    language = cur.fetchall()
    cur.close()

    cur = cnx.cursor()
    cur.callproc('get_year', [movie_id])
    # int/ string
    year = cur.fetchall()
    cur.close()

    currMovie = {"key": movie_id, "attributes": {"movieName":movieName[0]['MovieName'], "actors": actors, "director": director, "genre": genres, "language": languageHash[language[0]['MovieLang']], "year": year[0]['MovieYear']}}

    return currMovie

app = Flask(__name__)

@app.route("/")
def main():
    return "Welcome!"

@app.route("/questions.json", methods=["GET"])
def get_questions():
    def helper(A):
        res = []
        for item in A:
            temp = list(item.values())
            _id, label = temp
            if label[-1:] == '\r':
                label = label[:-1]
            res.append({"id": _id, "label": label})
        return res

    cur = cnx.cursor()
    cur.callproc('get_random_actors', [])
    actors = helper(cur.fetchall())
    cur.close()

    cur = cnx.cursor()
    cur.callproc('get_random_directors', [])
    directors = helper(cur.fetchall())
    cur.close()

    cur = cnx.cursor()
    cur.callproc('get_random_genres', [])
    genres = helper(cur.fetchall())
    cur.close()
    
    years = [
        { "id": 1, "label": "1970's" },
        { "id": 2, "label": "1980's" },
        { "id": 3, "label": "1990's" },
        { "id": 4, "label": "2000's" },
        { "id": 5, "label": "2010+" }
    ]

    languages = [
        { "id": 1, "label": "English" },
        { "id": 2, "label": "French" },
        { "id": 3, "label": "Spanish" },
        { "id": 4, "label": "German" },
        { "id": 5, "label": "Chinese" }
    ]

    res = [{"actors": actors, "directors": directors, "genres": genres, "years": years, "languages": languages}]
    return jsonify(res)

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
    temp = fetch_by_movie_id(11902)
    # return jsonify(results)

    # temp = fakeData()

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


# fetch movies based on the quiz result
def generate_movie_list(answers, user_id):
    filters = ['filter_actor_based', 'filter_directors', 'filter_genres', 'filter_language', 'filter_year']

    movieIDSet = []

    def parse_user_id(A, filter_i):
        for item in A:
            # { "id": 1, "label": 'Money' },
            if filter_i == 'filter_language':
                keyword = reverseLangHash[item['label']]
                cur = cnx.cursor()
                cur.callproc(filter_i, [keyword])
                movie_id = cur.fetchall()
                cur.close()
            elif filter_i == 'filter_year':
                keyword = timeHash[item['label']]
                cur = cnx.cursor()
                cur.callproc(filter_i, [keyword[0], keyword[1]])
                movie_id = cur.fetchall()
                cur.close()
            else:
                keyword = int(item['id'])
                cur = cnx.cursor()
                cur.callproc(filter_i, [keyword])
                movie_id = cur.fetchall()
                cur.close()

            
            b = movie_id[0]
            d = int(b['MovieID'])
            if d not in movieIDSet:
                movieIDSet.append(d)
                cur = cnx.cursor()
                print type(user_id), type(d)
                cur.callproc('add_user_movie', [user_id, d])
                cnx.commit()
                cur.close()
        # return movie_id['MovieID']

    for i in range(len(filters)):
        # adding new movie ids to user movie list
        parse_user_id(answers[i], filters[i])

# endpoint for read user info
@app.route("/userLogin", methods=["POST"])
def login_user():
    userName = request.json['userName']
    password = request.json['password']

    cur = cnx.cursor()
    cur.callproc('auth_user', [userName, password])
    temp = cur.fetchall()    
    if temp is None:
        return json.dumps({ "error": "error" }), 500
    userID = int(temp[0]['UserID'])
    print "login_user", userID
    cur.close()

    cur = cnx.cursor()
    cur.callproc('get_watched_movies', [userID])
    movieIDList = cur.fetchall()
    cur.close()

    res = []
    for movie_id in movieIDList:
        temp = fetch_by_movie_id(movie_id['MovieID'])
        res.append(temp)

    result = {}
    result['movieList'] = res
    result['userID'] = userID

    return jsonify(result)

#endpoint for registering a user
@app.route("/registerUser", methods=["POST"])
def register_user():
    userName = request.json['userName']
    password = request.json['password']
    # QuizRes = request.json['QuizRes']
    QuizRes = tempp[0]
    answers = [QuizRes['actors'], QuizRes['directors'], QuizRes['genres'], QuizRes['languages'], QuizRes['years']]

    cur = cnx.cursor()
    cur.callproc('add_user', [userName, password])
    temp = cur.fetchall()
    userID = int(temp[0]['your_id'])
    cnx.commit()
    cur.close()

    generate_movie_list(answers, userID)

    cur = cnx.cursor()
    cur.callproc('get_watched_movies', [userID])
    movieIDList = cur.fetchall()
    cur.close()

    res = []
    for movie_id in movieIDList:
        temp = fetch_by_movie_id(movie_id['MovieID'])
        res.append(temp)

    result = {}
    result['movieList'] = res
    result['userID'] = userID

    return jsonify(result)


@app.route("/updatePassword", methods=["POST"])
def update_password():
    userID = request.json['userID']
    password = request.json['password']
    userID = int(userID)
    print userID, password

    cur = cnx.cursor()
    cur.callproc('update_password', [password, userID])
    cnx.commit()
    cur.close()    
    temp = {}
    temp['data'] = 'data'
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