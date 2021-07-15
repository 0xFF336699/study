;这里的 “分号” 表示注释 这个键盘没有右边ctrl，不方便代码注释
Rwin::RCtrl

;===============================================================================
;用来修改win10默认的窗口快捷键，使左手可以单手操作。下面改为alt+qw键了，留下这个用于记忆win和ctrl键描述符
;===============================================================================
^#a::
    send, {lwin down}{ctrl down}{left}
    sleep 50
    send, {lwin up}{ctrl up}
return
;按下ctrl + win + a等于按下ctrl + win +  左方向键

^#s::
    send, {lwin down}{ctrl down}{right}
    sleep 50
    send, {lwin up}{ctrl up}
return
;按下ctrl + win + s等于按下ctrl + win +  右方向键

;; 这个键盘没有print键

!p::   ;; !->alt键   k->字母键k
Send {PrintScreen}   ;;输入 上 键
return

;;; 选中关键字后,同时按下win+g，打开google搜索
#g::  ;win+g
Send ^c   ;输入 ctrl+c
sleep,50  ; 50
run https://www.google.com/search?q=%clipboard%&oq=%clipboard%
;根据选中的内容打开google搜索
return



;===============================================================================
;用来修改win10默认的窗口快捷键，使左手可以单手操作。
;===============================================================================

!q::
    send, {lwin down}{ctrl down}{left}
    sleep 50
    send, {lwin up}{ctrl up}
return

!w::
    send, {lwin down}{ctrl down}{right}
    sleep 50
    send, {lwin up}{ctrl up}
return