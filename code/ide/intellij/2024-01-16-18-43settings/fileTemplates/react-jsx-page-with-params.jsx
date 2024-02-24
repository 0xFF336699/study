import {ComponentBase} from "../../libs/shangwoa/react/components/ComponentBase";
import {Navbar, Page, PageContent} from "framework7-react";
import React from 'react';
import TMs from "../../remotes/TMs";
import {Member} from "../../libs/shangwoa/remotes/Member";
import {Event2} from "../../libs/shangwoa/events/Event2";
import {MainModel, mainModel} from "../../mc/MainModel";
import Dom7 from "dom7";
import {AliPayIdOrdersRouter} from "../alipayidorders/AliPayIdOrders";


export class ${name}Content extends ComponentBase {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>

            </>
        )
    }
}

export class ${name} extends ComponentBase {
    constructor(props) {
        super(props);
        this.state = {pageParams:null};// {pageParams:{path:"/${name}/:params here"}}
    }

    addEvents() {
        super.addEvents();
        Dom7(`#${${name}Router.pageId}`).on("page:init", this.onPageInit);
    }
    removeEvents() {
        super.removeEvents();
        Dom7(`#${${name}Router.pageId}`).off("page:init", this.onPageInit);
    }

    onPageInit =(e,page)=>{
        if(!page)return;
        this.setState({pageParams: page.route.params})
    }
    render() {
        return (
            <Page id={${name}Router.pageId} pageContent={false} className={"no-toolbar"}>
                <Navbar title={${name}Router.name} backLink="返回"/>
                <PageContent>
                    <${name}Content />
                </PageContent>
            </Page>
        )
    }
}
export const ${name}Router = {
    pageId:"page-id-${name}",
    path:"/${name}/:params here",
    component:${name},
    name:"授权操作"
}
