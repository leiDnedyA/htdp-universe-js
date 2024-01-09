#lang racketscript/base

(require (for-syntax racketscript/base
                     syntax/parse)
         racketscript/htdp/image
         "wrapper-utils/type-conversions.rkt"
         "universe.rkt")

#|

Broken functions:

- line (not working in original implementation either)
- triangle (sort of works but creates weird pentagon instead of triangle)

|#

(provide bigBang ; htpd/universe
         toDraw
         onTick
         
        ; htdp/image
         emptyScene
         (rename-out [line0 line]) ; broken due to original implementation
         (rename-out [rectangle0 rectangle])
         (rename-out [square0 square])
         (rename-out [circle0 circle])
         (rename-out [text0 text])
         ;; textWithFont
         (rename-out [triangle0 triangle]) ; broken due to original implementation
         (rename-out [frame0 frame])
         colorFrame
         placeImage
         placeImages

         (rename-out [posn0 posn]) ; other
         posnX
         posnY
         )


#|

htdp/universe exports

|#

(define (bigBang init-world handlers)
  (define args (append (list init-world) (js-list->list handlers)))
  (apply big-bang args))

(define (toDraw cb) (to-draw cb))
(define (onTick cb [rate 28]) (on-tick cb rate))


#|

htdp/image exports

|#

(define (emptyScene width height [color (js-string "white")])
  (empty-scene width height (js-string->string color)))

(define (text0 txt size color)
  (text (js-string->string txt)
        size
        (js-string->string color)))

(define (line0 x y pen-or-color)
  (line x y (js-string->string pen-or-color)))

(define (rectangle0 w h m c)
  (rectangle w h 
             (js-string->symbol m)
             (js-string->string c)))

(define (square0 s m c)
  (square s 
          (js-string->symbol m)
          (js-string->string c)))
  
(define (circle0 r m c)
  (circle r 
          (js-string->symbol m)
          (js-string->string c)))

;; ; (define (text/font txt size color face family style weight underline?)
;; (define (textWithFont txt size color face family style weight underline?)
;;   (text/font (js-string->string txt)
;;              size
;;              (js-string->string color)
;;              (js-string->string face)
;;              (js-string->string family)
;;              (js-string->string style)
;;              weight
;;              underline?))

; (define (triangle side mode color)
(define (triangle0 side mode color)
  (triangle side 
            (js-string->symbol mode)
            (js-string->string color)))

(define (frame0 img)
  (frame img))

(define (colorFrame color img)
  (color-frame (js-string->string color) img))

(define (placeImage image x y scene)
  (place-image image x y scene))

(define (placeImages images posns scene)
  (place-images (js-list->list images) (js-list->list posns) scene))


#|

other misc exports

|#

(define posn0 posn)
(define posnX posn-x)
(define posnY posn-y)
