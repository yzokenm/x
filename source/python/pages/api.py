# Flask
from main import app, request, make_response

# Home Made
from main import CONF, EXTERNALS, PUBLIC_CONF, session, langDict, USER_TYPES

from python.tools.tools import publicSessionUser

import json



#################################################### Bridge
@app.route("/api", methods=["POST"])
def api():
    # initialData
    if request.get_json()["for"] == "initialData":
        return make_response(
            {
                "CONF": PUBLIC_CONF,
                "session": {"user": publicSessionUser()} if "user" in session else {},
                "langCode": CONF["default"]["language"],
                "langDict": langDict,
                "USER_TYPES": USER_TYPES,
                "EXTERNAL_SVG": EXTERNALS["SVG"]
                # "languages":languages,
                # "currencies":currencies
            }, 200)

    # languages
    # if request.get_json()["for"] == "languages":
    #     return make_response(
    #         {
    #             "response":"ok",
    #             "languages":languages
    #         }, 200)

    # langCode
    if request.get_json()["for"] == "langCode":
        return make_response(
            {
                "response":"ok",
                "langCode":langCode
            }, 200)

    # langDict
    if request.get_json()["for"] == "langDict":
        return make_response(
            {
                "response":"ok",
                "langDict":langDict
            }, 200)
