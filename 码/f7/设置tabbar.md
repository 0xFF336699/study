```
export function setHighlight(name:TabsName) {
    for (var tabsNameKey in TabsName) {
        let v =  TabsName[tabsNameKey];
        if(typeof v == 'number')continue;
        if (name !== v){
            $$(".main-toolbar .tab-" + v).removeClass('tab-link-active')
        }else{
            $$(".main-toolbar .tab-" + v).addClass('tab-link-active')
        }
    }
    const $tabbarEl = $$('.main-toolbar');
    let $highlightEl = $tabbarEl.find('.tab-link-highlight');
    const tabLinksCount = $tabbarEl.find('.tab-link').length;
    const $activeLink:any = $tabbarEl.find('.tab-link-active');
    let highlightWidth:string;
    let highlightTranslate:string;

    if ($tabbarEl.hasClass('tabbar-scrollable') && $activeLink && $activeLink[0]) {
        highlightWidth = `${$activeLink[0].offsetWidth}px`;
        highlightTranslate = `${$activeLink[0].offsetLeft}px`;
    } else {
        const activeIndex = $activeLink.index();
        highlightWidth = `${100 / tabLinksCount}%`;
        highlightTranslate = `${(getApp().rtl ? -activeIndex : activeIndex) * 100}%`;
    }

    getApp().utils.nextFrame(() => {
        $highlightEl
            .css('width', highlightWidth)
            .transform(`translate3d(${highlightTranslate},0,0)`);
    });
}
```