
ws_MinHeight = 25

; This line will unroll any rolled up windows if the script exits
; for any reason:
OnExit, ExitSub
return

#If MouseIsOverTitlebar()
RButton::

MouseGetPos,,, WinUMID
WinActivate, ahk_id %WinUMID%

        WinGet, ws_ID, ID, A
        Loop, Parse, ws_IDList, |
        {
            IfEqual, A_LoopField, %ws_ID%
            {
                ; Match found, so this window should be restored (unrolled):
                StringTrimRight, ws_Height, ws_Window%ws_ID%, 0
                WinMove, ahk_id %ws_ID%,,,,, %ws_Height%
                StringReplace, ws_IDList, ws_IDList, |%ws_ID%
                return
            }
        }
        WinGetPos,,,, ws_Height, A
        ws_Window%ws_ID% = %ws_Height%
        WinMove, ahk_id %ws_ID%,,,,, %ws_MinHeight%
        ws_IDList = %ws_IDList%|%ws_ID%
        return

;#z::  ; Change this line to pick a different hotkey.
; Below this point, no changes should be made unless you want to
; alter the script's basic functionality.
; Uncomment this next line if this subroutine is to be converted
; into a custom menu item rather than a hotkey.  The delay allows
; the active window that was deactivated by the displayed menu to
; become active again:
;Sleep, 200

MouseIsOverTitlebar() {
    static WM_NCHITTEST := 0x84, HTCAPTION := 2
    CoordMode Mouse, Screen
    MouseGetPos x, y, w
    if WinExist("ahk_class Shell_TrayWnd ahk_id " w)  ; Exclude taskbar.
        return false
    SendMessage WM_NCHITTEST,, x | (y << 16),, ahk_id %w%
    WinExist("ahk_id " w)  ; Set Last Found Window for convenience.
    return ErrorLevel = HTCAPTION
}


ExitSub:
Loop, Parse, ws_IDList, |
{
	if A_LoopField =  ; First field in list is normally blank.
		continue      ; So skip it.
	StringTrimRight, ws_Height, ws_Window%A_LoopField%, 0
	WinMove, ahk_id %A_LoopField%,,,,, %ws_Height%
}
ExitApp  ; Must do this for the OnExit subroutine to actually Exit the script.
