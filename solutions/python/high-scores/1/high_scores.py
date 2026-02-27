#!/usr/bin/env python3

print("high_scores.py imported")

def latest(scores):
    return scores[-1]


def personal_best(scores):
    pbest = 0
    for i in scores:
        if i > pbest:
            pbest = i

    return pbest


def personal_top_three(scores):
    scores.sort()
    scores.reverse()
    scores = scores[:3]
    return scores

