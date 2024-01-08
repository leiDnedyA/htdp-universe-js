#lang racketscript/base

(require (for-syntax racketscript/base
                     syntax/parse)
         racketscript/htdp/image
         "wrapper-utils/type-conversions.rkt"
         "universe.rkt")

(provide bigBang
         toDraw
         onTick
         (rename-out [text0 text])
         emptyScene)

(define (bigBang init-world handlers)
  (define args (append (list init-world) (js-list->list handlers)))
  (apply big-bang args))

(define (toDraw cb) (to-draw cb))
(define (onTick cb [rate 28]) (on-tick cb rate))

(define (text0 txt size color)
  (text (js-string->string txt)
        size
        (js-string->string color)))

(define (emptyScene width height [color (js-string "white")])
  (empty-scene width height (js-string->string color)))
