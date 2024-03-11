sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.form", {
      onSubmitButtonPress: async function (oEvent) {
        const oappmodel = this.getView().getModel("formdata");

        console.log(this, "---");
        console.log(this.getView());
        // console.log(this.getView().getModel()))
        console.log(oappmodel);

        const data = oappmodel.oData;
        console.log(data);

        if (data.user.firstname === "") {
          MessageToast.show("Enter Name");
          return;
        }

        console.log(this.getView().byId("firstname_inp").getBindingContext("formdata"),"Binding context")
        // console.log(this.getView().byId("firstname_inp").getBinding(sName))
        debugger
        MessageToast.show(`Welcome! ${data.user.firstname}`);

        const orouter = this.getOwnerComponent().getRouter();

        orouter.navTo("Users");
      },
    });
  }
);
