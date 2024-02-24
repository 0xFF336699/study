import {ComponentBase} from "#/libs/fanfanlo/react/components/ComponentBase";
import {Navbar, Page, PageContent} from "framework7-react";
import React from 'react';
import Dom7 from "dom7";
import TMs from "#/remotes/TMs";
import {Member} from "#/libs/fanfanlo/remotes/Member";
import {Event2} from "#/libs/fanfanlo/events/Event2";
import {MainModel, mainModel} from "../../mc/MainModel"

#set($cn = ${StringUtils.removeAndHump($NAME, "-")})
#set($lower = $cn.substring(0,1).toLowerCase() + $cn.substring(1))
class ${cn}Content extends ComponentBase {
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
let pageCount = 0;
class ${cn} extends ComponentBase {
    constructor(props) {
        super(props);
        this.pageId = `${lower}Router-` + (++pageCount);
        this.pageSelectId = "#" + this.pageId;
    }


    addEvents() {
        super.addEvents();
         Dom7(this.pageSelectId).on("page:init", this.onPageInit);
    }

    removeEvents() {
        super.removeEvents();
         Dom7(this.pageSelectId).off("page:init", this.onPageInit);
    }

    onPageInit = (e, page) => {
        if (!page) return;
        this.setState({pageParams: page.route.params})
    }
    render() {
        return (
            <Page id={this.pageId} pageContent={false} className={"no-toolbar"}>
                <Navbar title={${lower}Router.name} backLink="返回"/>
                <PageContent>
                    <${cn}Content />
                </PageContent>
            </Page>
        )
    }
}
//<Link href={${lower}Router.path}>{${lower}Router.name}</Link>
export const ${lower}Router = {
    id:"${NAME}",
    p:"/${NAME}/",
    path:"/${NAME}/",
    component:${cn},
    name:"授权操作"
}
