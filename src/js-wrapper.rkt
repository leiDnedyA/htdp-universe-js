#lang racketscript/base

(require (for-syntax racketscript/base
                     syntax/parse)
         racketscript/htdp/image
         "wrapper-utils/type-conversions.rkt"
         "universe.rkt")

(provide bigBang)

(define (bigBang init-world handlers)
  (#js*.console.log (js-list->list handlers))
  (big-bang init-world (js-list->list handlers)))
