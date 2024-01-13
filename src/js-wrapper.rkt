#lang racketscript/base

(require (for-syntax racketscript/base
                     syntax/parse)
         racketscript/htdp/image
         racketscript/htdp/universe
         "wrapper-utils/type-conversions.rkt")

#|

Broken functions:

- line (not working in original implementation either)
- triangle (sort of works but creates weird pentagon instead of triangle)

|#

(provide bigBang ; htpd/universe
         toDraw
         onTick
         onMouse
         onKey
         stopWhen
         
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
         placeImageAlign
         placeImagesAlign
         overlayAlign
         overlayXY
         (rename-out [overlay0 overlay])
         (rename-out [underlay0 underlay])
         underlayXY
         ; the four exports below this are slightly buggy due to original implementation
         aboveAlign
         (rename-out [above0 above])
         besideAlign
         (rename-out [beside0 beside])

         (rename-out [posn0 posn]) ; other
         posnX
         posnY)



#|

htdp/universe exports

|#

(define (bigBang init-world . handlers)
  ; hacky fix for an issue with requestAnimationFrame in big-bang that produces an arity mismatch
  (define old-requestAnimationFrame #js*.window.requestAnimationFrame)
  ($/:= #js*.window.requestAnimationFrame (lambda (cb)
                                            (#js.old-requestAnimationFrame (lambda (_) (cb)))
                                            $/undefined))

  (apply big-bang (js-arguments->list $/arguments)))

(define toDraw to-draw)
(define (onTick cb [rate 28]) (on-tick cb rate))
(define onMouse on-mouse)
(define (onKey cb) (on-key (lambda (ws key)
                             (cb ws (js-string key)))))
(define stopWhen stop-when)


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

;; (define (textWithFont txt size color face family style weight underline?)
;;   (text/font (js-string->string txt)
;;              size
;;              (js-string->string color)
;;              (js-string->string face)
;;              (js-string->string family)
;;              (js-string->string style)
;;              weight
;;              underline?))

(define (triangle0 side mode color)
  (triangle side 
            (js-string->symbol mode)
            (js-string->string color)))

(define frame0 frame)

(define (colorFrame color img)
  (color-frame (js-string->string color) img))

(define placeImage place-image)

(define (placeImages images posns scene)
  (place-images (js-list->list images) (js-list->list posns) scene))

(define (placeImageAlign image x y x-place y-place scene)
  (place-image/align image 
                     x y 
                     (js-string->string x-place)
                     (js-string->string y-place)
                     scene))

(define (placeImagesAlign images posns x-place y-place scene)
  (place-images/align (js-list->list images) 
                     (js-list->list posns) 
                     (js-string->string x-place)
                     (js-string->string y-place)
                     scene))

(define (overlayAlign xPlace yPlace . images)
  (define args-list (append (list (js-string->string xPlace)
                                  (js-string->string yPlace))
                            images))
  (apply overlay/align args-list))

(define overlayXY overlay/xy)

(define overlay0 overlay)

(define underlay0 underlay)

(define underlayXY underlay/xy)

(define (aboveAlign x-place . imgs)
  (apply above/align (append (list (js-string->string x-place)) imgs)))

(define above0 above)

(define (besideAlign y-place . imgs)
  (apply beside/align (append (list (js-string->string y-place)) imgs)))

(define beside0 beside)


#|

other misc exports

|#

(define posn0 posn)
(define posnX posn-x)
(define posnY posn-y)
