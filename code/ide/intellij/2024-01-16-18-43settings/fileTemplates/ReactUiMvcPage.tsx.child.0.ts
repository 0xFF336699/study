import {PageModel} from "../../mc/PageModel";
import {getPage, ${name}Page} from "./${name}Page";
import {IRouterConf} from "../IPageRouterTabConf";
import {IParams, model, ${name}PageModel} from "./${name}PageModel";
import {PageEvent} from "../pageevents/PageEvent";

const ${name} = PageModel.pageNames.${name};
export const ${name}Router:IRouterConf = {
    canOpenDirect: true,
    path: `/` + ${name},
    name:${name},
    mainTab:PageModel.mainViewTabs.discount,
    component: ${name}Page,
    title:()=>{},
    on: {
        pageInit: function (e, page) {
            // console.log(`${name} on page init is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageInit, page));
        },
        pageReinit:function (e, page){
            // console.log(`${name} on page pageReinit is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageReinit, page));
        },
        pageBeforeIn:function (e, page){
            if (page.route.query && page.route.query.d){
              let s = decodeURIComponent(page.route.query.d);
              let q = JSON.parse(s);
              getPage().setParams(q as IParams);
            }
            // console.log(`${name} on page pageBeforeIn is`, s);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageBeforeIn, page));
        },
        pageMounted:function (e, page){
            // console.log(`${name} on page pageMounted is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageMounted, page));
        },
        pageAfterIn: function test(e, page) {
            // console.log(`${name} on page pageAfterIn  is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageAfterIn, page));
        },
        pageBeforeOut:function (e, page){
            // console.log(`${name} on page pageBeforeOut is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageBeforOut, page));
        },
        pageAfterOut:function (e, page){
            // console.log(`${name} on page pageAfterOut is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageAfterOut, page));
        },
        onPageBeforeUnmount:function (e, page){
            // console.log(`${name} on page onPageBeforeUnmount is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageBeforUnmount, page));
        },
        pageBeforeRemove:function (e, page){
            // console.log(`${name} on page pageBeforeRemove is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageBeforRemove, page));
        },
        pageTabShow:function (e, page){
            // console.log(`${name} on page pageTabShow is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageTabShow, page));
        },
        pageTabHide:function (e, page){
            // console.log(`${name} on page pageTabHide is`, e, page);
            model.dispatchEvent(new PageEvent(PageEvent.EventTypes.onPageTabHide, page));
        }
    }
}