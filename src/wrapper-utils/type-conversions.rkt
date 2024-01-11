#lang racketscript/base

(provide js-list->list
         js-string->symbol)

(define (js-list->list js-list)
  (#js.js-list.reduce (lambda (accumulator current-value . _)
                        (append accumulator (list current-value)))
                     '()))

(define (js-string->symbol str)
  (string->symbol (js-string->string str)))
