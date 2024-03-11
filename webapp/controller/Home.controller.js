sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function(
	Controller,JSONModel
) {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Home", {

      /**
       * @override
       */
      onInit: function() {
         var aItems = [
            { key: "1", text: "Karnataka" },
            { key: "2", text: "Mahaarashtra" },
            { key: "3", text: "Kerala" }
        ];

        // Create a JSON model and set the ComboBox items
        var oModel = new JSONModel({
            items: aItems
        });
        this.getView().setModel(oModel);
         
      
      },


        onRegistrationFormButtonPress:function()
      {
         const router= this.getOwnerComponent().getRouter()
         

         router.navTo("form")
      

      }
	});
});