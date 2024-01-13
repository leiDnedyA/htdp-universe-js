#lang racketscript/base

(provide js-list->list
         js-string->symbol
         js-arguments->list)

(define (js-list->list js-list)
  (#js.js-list.reduce (lambda (accumulator current-value . _)
                        (append accumulator (list current-value)))
                     '()))
(define (js-arguments->list arguments)
  (js-list->list (#js*.Array.from arguments)))

(define (js-string->symbol str)
  (string->symbol (js-string->string str)))
