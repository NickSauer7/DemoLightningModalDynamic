import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class DemoModalForDynamicLWC extends LightningModal {
    
    dynamicComp;

    @api recordId;
    @api lwcToImport;
    @api showModal = false;
    @api showFooter = false;
    @api showHeader = false;

    @api async connectedCallback(){
        console.log('in connected callback - component to load: '+this.lwcToImport);
        const { default: ctor } = await import(this.lwcToImport);
        this.dynamicComp = ctor;
        this.showModal = true;
    }

    //example from salesforce docs on accessing dynamic component.
    renderedCallback() {
        if(this.refs.dynamicComp){
            //console.log(this.refs.dynamicComp);
        }
    }

    handleClose(){
        this.close('modal is closed');
    }

}