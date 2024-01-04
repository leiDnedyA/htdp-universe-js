#lang racketscript/base

(provide js-list->list)

(define (js-list->list js-list)
  (#js.js-list.reduce (lambda (accumulator current-value . _)
                        (#js*.console.log current-value)
                        (append accumulator (list current-value)))
                     '()))
