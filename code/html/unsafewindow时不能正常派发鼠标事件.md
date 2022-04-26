https://stackoverflow.com/questions/54064213/my-code-works-the-in-firefox-console-but-not-in-tampermonkey-not-a-timing-issu

在油猴里搞油管字幕时遇到。
window在unsafewindow时会有问题
 // evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
  evt.initMouseEvent("click", true, true);