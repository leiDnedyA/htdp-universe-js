#lang racketscript/base

(require (for-syntax racketscript/base
                     syntax/parse)
         racketscript/htdp/image
         "universe-primitives.rkt"
         "jscommon.rkt"
         "encode-decode.rkt"
         "debug-tools.rkt"
         "universe-server.rkt")

(provide bigBang)

(define (bigBang init-state handlers [dom-root $/undefined])
  (#js*.console.log handlers)
  (if ($/binop === dom-root $/undefined)
      0 1))
