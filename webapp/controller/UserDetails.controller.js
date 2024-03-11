sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.UserDetails", {

		/**
		 * @override
		 */
		onInit: function() {

			const router = this.getOwnerComponent().getRouter()

			router.getRoute("UserDetails").attachPatternMatched(this.fNmatched,this)
			
			
		
		},

		fNmatched:function(oEvent)
		{

			console.log("fnmatched")
			this.getView().bindElement({

				path:"/"+ window.decodeURIComponent(oEvent.getParameter("arguments").userpath),
				model:"userdata"
			})

		}
	});
});