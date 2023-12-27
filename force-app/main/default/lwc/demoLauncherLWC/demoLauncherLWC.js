import { LightningElement, api } from 'lwc';
import demoModal from 'c/demoModalForDynamicLWC';

export default class DemoLauncherLWC extends LightningElement {

    /* STANDARD ATTRIBUTES */
    @api recordId;

    /* MODAL ATTRIBUTES */
    lwcToImport;
    size = 'large';
    showFooter = false;
    showHeader = false;

    /* MODAL ATTRIBUTES */

    //Test MODAL Launch for Demo Dynamic LWC.
    @api testModal(lwcName){
        this.size = 'full';
        this.showHeader = false;
        this.showFooter = true;
        this.lwcToImport = lwcName;
        this.handleLWCModal();
    }

    /* LWC MODAL OPENING */
    async handleLWCModal() {
        this.result = await demoModal.open({
            size: this.size,
            showHeader: this.showHeader,
            showFooter: this.showFooter,
            lwcToImport:  this.lwcToImport,
            recordId: this.recordId
        });
    }

}