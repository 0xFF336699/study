;这里的 “分号” 表示注释
Rwin::RCtrl

;===============================================================================
;用来修改win10默认的窗口快捷键，使左手可以单手操作
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


!p::   ;; !->alt键   k->字母键k
Send {PrintScreen}   ;;输入 上 键
return

;;; 选中关键字后,同时按下win+F3，打开google搜索
#F3::  ;win+F3
Send ^c   ;输入 ctrl+c
sleep,50  ; 50
run https://www.google.com/search?q=%clipboard%&oq=%clipboard%
;根据选中的内容打开google搜索
return

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


;;; 选中关键字后,同时按下win+s，打开google搜索
#F2::  ;win+F2
Send ^c   ;输入 ctrl+c
sleep,50  ; 50
run https://translate.google.cn/?sl=auto&tl=zh-CN&text=%clipboard%&op=translate
;根据选中的内容打开google搜索
return


^space:: 
;将当前激活窗口存入变量w 
WinGetActiveTitle, w 
;对w窗口置顶，Toggle表示在on 与 off 中切换 
Winset, AlwaysOnTop, Toggle, %w% 
;返回执行 
return