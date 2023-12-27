({
    openTestLWC1 : function(component, event, helper) {
        let testLWC = component.find("testLWC");
        testLWC.testModal("c/demoLWCForDynamicLWC");
    },

    openTestLWC2 : function(component, event, helper) {
        let testLWC = component.find("testLWC");
        testLWC.testModal("c/demoLWCForDynamicLWC2");
    }
})
