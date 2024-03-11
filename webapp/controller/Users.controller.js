sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
  function (Controller, JSONModel,Filter,FilterOperator) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.Users", {
      onInit: async function () {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const jdata = await res.json();

        const ousermodel = new JSONModel(jdata);

        jQuery.ajax("https://jsonplaceholder.typicode.com/users", {
          success: function (data) {
            console.log(data, "hi");
          },
        });

     


        debugger;

        this.getOwnerComponent().setModel(ousermodel, "userdata");
      },

      

		onColumnListItemPress: function(oEvent) {

      console.log(oEvent)
      const Item=oEvent.getSource()
      const router= this.getOwnerComponent().getRouter() 


      console.log("HI")
      console.log(Item,"item")
      console.log(Item.getBindingContext("userdata"))

      router.navTo("UserDetails",{

        userpath: window.encodeURIComponent(Item.getBindingContext("userdata").getPath().substr(1))

      })
      debugger

      
			
		},

		onSearchFieldSearch: function(oEvent) {

       var filters=[]

       var query= oEvent.getParameter("query")
       if(query)
       {
        filters.push(new Filter("username",FilterOperator.Contains,query))
       }
       console.log(filters)

       var otable = this.byId("usertable")
       var oBinding=otable.getBinding("items")
       console.log(oBinding,"obinding")

       
       oBinding.filter(filters)
       console.log(filters,"filters")
			
      console.log(oEvent)
      debugger
		}
    });
  }
);
