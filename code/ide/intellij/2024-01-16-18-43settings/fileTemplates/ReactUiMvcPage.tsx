import {ComponentBase} from "../components/ComponentBase";
import PropertyChangeEvent from "../../../../events/PropertyChangeEvent";
import {IParams, model, ${name}PageModel} from "./${name}PageModel";
import {Page, PageContent, Row} from "framework7-react";

import {TMs} from "../../remotes/TMs";
import Member from "../../remotes/Member";
import {mainModel, MainModel } from "../../mc/MainModel";
import {Event2} from "../../../../events/Event";

import {userModel} from "../../mc/UserModel";
import {User} from "../../vo/user/User";
let page:${name}Page;
export function getPage():${name}Page{
    return page;
}
export class ${name}Page extends ComponentBase{
    private _eventsInitialized:boolean = false;
    constructor(props) {
        super(props);
        this.state = {params:null};
        page = this;
        this.dispatcher.addEventListener(ComponentBase.eventIsMountedChanged, this._onMounted);
    }
    setParams = (params:IParams)=>{
        this.setState({params})
    }
    _onAdded = ()=>{
        page = this;
        this._addEvents();
    }
    _onRemoved = ()=>{
        this._removeEvents();
    }
    _addEvents = () => {
      if (this._eventsInitialized) return;
      this._eventsInitialized = true;
      userModel.user.addEventListener(User.eventIsLoggedChanged, this._onLoggedChanged);
      this._fetchData();
    }
    _removeEvents = () => {
      if (!this._eventsInitialized) return;
      this._eventsInitialized = false;
      userModel.user.removeEventListener(User.eventIsLoggedChanged, this._onLoggedChanged);
    }
    _onLoggedChanged =()=>{
      this.setState({logged:userModel.user.isLogged})
    }
    _onMounted = (e:PropertyChangeEvent<boolean>)=>{
        if(e.newValue){
            this._onAdded();
        }else{
            this._onRemoved();
        }
    }
    render = () =>{
        return <Page pageContent={false}>
            <div className="navbar">
                <div className="navbar-bg"></div>
                <div className="navbar-inner sliding" style={{flexDirection:"row"}}>
                    <a className="link back">
                        <i className="icon icon-back"></i>
                        <span className="if-not-md">返回</span>
                    </a>
                </div>
            </div>
            <PageContent style={{paddingTop:"0px"}}>
                
            </PageContent>
        </Page>
    }
}