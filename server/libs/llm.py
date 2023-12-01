#!/usr/bin/env python3
from langchain.llms import Ollama
import os
from flask_socketio import emit

model = os.environ.get("MODEL", "llama2")


def trial(query):
    llm = Ollama(model=model)

    print("inga")
    if query == "exit":
        return
    if query.strip() == "":
        return
    chunks = llm._stream(query)
    for chunk in chunks:
        emit("response", chunk.text)
