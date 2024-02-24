import {ComponentBase} from "../../libs/shangwoa/react/components/ComponentBase";
import {Navbar, Page, PageContent} from "framework7-react";
import React from 'react';
import TMs from "../../remotes/TMs";
import {Member} from "../../libs/shangwoa/remotes/Member";
import {Event2} from "../../libs/shangwoa/events/Event2";
import {MainModel, mainModel} from "../../mc/MainModel";



export class ${name} extends ComponentBase {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page pageContent={false} className={"no-toolbar"}>
                <Navbar title="登录/注册" backLink="返回"/>
                <PageContent>

                </PageContent>
            </Page>
        )
    }
}