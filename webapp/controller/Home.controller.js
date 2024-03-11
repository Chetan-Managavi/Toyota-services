sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel) {
        "use strict";

        return Controller.extend("assignment.toyota.controller.Home", {
            onInit: function () {

                const img=
                    [
                        {"src":"https://static3.toyotabharat.com/images/homepage/banners/hytime-uch-homepage-banner-1920x807.jpg"},
                        {src:"https://static3.toyotabharat.com/images/homepage/banners/camry-distinctive-homepage-banner-1920x807.jpg"},
                        {src:"https://static3.toyotabharat.com/images/dynamic/hpbanner/uc-hyryder-e-cng-banner-1920x807.jpg"},
                        {src:"https://static3.toyotabharat.com/images/homepage/banners/toyota-zero-milege-homepage-banner-1920x807.jpg"}
                    ]
                const imgmodel=new JSONModel(img)
                

                this.getView().setModel(imgmodel,"images")
            }
        });
    });
