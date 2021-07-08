//* This file should contain All EndPoint Routes Across all the application*/
/* Follow the Naming Convention*/

// const uri = "https://orid.remabackend.com/v1";
const uri = "https://api.oreedapp.com/v1";
export const API_URLS = {
    auth: {
        auth: uri + "/auth/login",
        changePassword: uri + "/auth/changePassword",
        resetPassword: uri + "/auth/resetPassword/{email}",
        resetPasswordbyCode: uri + "/auth/changePassword/{code}",
        // register: uri + "/auth/register",
        logout: uri + "/auth/logout",
    },
    User: {
        post: uri + "/User",
        get: uri + "/User/all",
        getOne: uri + "/User/{entityId}",
        put: uri + "/User/{entityId}",
        delete: uri + "/User/{entityId}",
        updateFcm: uri + "/User/updateFcm/{userId}",
        blockUser: uri + "/User/block/{userId}",
        // upload: uri + "/User/upload",
    },
    Notification: {
        SendBulk: uri + "/Notification/sendBulk",
        sendSpicific: uri + "/Notification/specific/{mobile}",
    },

    State: {
        post: uri + "/State",
        get: uri + "/State/all",
        getOne: uri + "/State/{entityId}",
        put: uri + "/State/{entityId}",
        delete: uri + "/State/{entityId}",
    },
    Region: {
        post: uri + "/Region",
        get: uri + "/Region/all",
        getOne: uri + "/Region/{entityId}",
        getRegionByState: uri + "/Region/state/{entityId}",
        put: uri + "/Region/{entityId}",
        delete: uri + "/Region/{entityId}",
    },

    Restaurant: {
        post: uri + "/Restaurant",
        get: uri + "/Restaurant/all",
        getOne: uri + "/Restaurant/{entityId}",
        put: uri + "/Restaurant/{entityId}",
        delete: uri + "/Restaurant/{entityId}",
        offer: uri + "/Restaurant/offer/{entityId}",
        getAllOffer: uri + "/Restaurant/all/offers",
        getQr:uri + "/Restaurant/qr/{restaurantId}",
        BlockRest:uri+"/Restaurant/block/{restaurantId}"
    },

    Offer: {
        post: uri + "/Restaurant/offer/{entityId}",
        get: uri + "/Restaurant/all/offers",
        getOne: uri + "/Restaurant/offer/{entityId}",
        put: uri + "/Restaurant/offer/{restaurantId}/{offerId}",
        delete: uri + "/Restaurant/offer/{restaurantId}/{offerId}",
    },

    menu:{
        post: uri + "/Restaurant/menu/{restaurantId}",
        get: uri + "/Restaurant/menu/all",
        getOne: uri + "/Restaurant/menu/{entityId}",
        put: uri + "/Restaurant/menu/{restaurantId}/{menuId}",
        delete: uri + "/Restaurant/menu/{restaurantId}/{menuId}",
    }, 
    
    Report:{
        post: uri + "/Report",
        get: uri + "/Report/all",
        getOne: uri + "/Report/{entityId}",
        put: uri + "/Report/{entityId}",
        delete: uri + "/Report/{entityId}",
    },
    Notice:{
        post:uri + "/Notice/send"
    },

    OurContact: {
        post: uri + "/OurContact",
        get: uri + "/OurContact/all",
        getOne: uri + "/OurContact/{entityId}",
        put: uri + "/OurContact/{entityId}",
        delete: uri + "/OurContact/{entityId}",
    }, 
    
    SystemSettings: {
        post: uri + "/SystemSettings",
        get: uri + "/SystemSettings/all",
        getPointPrice: uri + "/SystemSettings/pointPrice",
        getOne: uri + "/SystemSettings/{entityId}",
        put: uri + "/SystemSettings/{entityId}",
        delete: uri + "/SystemSettings/{entityId}",
    },    
    
    Analytics: {
        getReport: uri + "/Analytics/report",
        getReportForRestaurants: uri + "/Analytics/report/{restaurantId}",
        getAllReports: uri + "/Analytics/totals",
    },
    
    Points: {
        get: uri + "/Points/report",
        getForPlace: uri + "/Points/report/{restaurantId}",
        post: uri + "/Points/debit/{restaurantId}",
    },
























































    /** Other Panel Request need to Delete */

    OnBoarding: {
        post: uri + "/onBoarding",
        get: uri + "/onBoarding/all",
        getOne: uri + "/onBoarding/{entityId}",
        put: uri + "/onBoarding/{entityId}",
        delete: uri + "/onBoarding/{entityId}",
    },
    Category: {
        post: uri + "/Category",
        get: uri + "/Category/all",
        getOne: uri + "/Category/{entityId}",
        put: uri + "/Category/{entityId}",
        delete: uri + "/Category/{entityId}",
    },
    SubCategory: {
        post: uri + "/Category/addSubcategory/{entityId}",
        put: uri + "/Category/subCategry/{entityId}",
        delete: uri + "/Category/subCategry/{entityId}",
    },

    Utility: {
        post: uri + "/Utility",
        get: uri + "/Utility/all",
        getOne: uri + "/Utility/{entityId}",
        put: uri + "/Utility/{entityId}",
        delete: uri + "/Utility/{entityId}",
        // upload: uri + "/User/upload",
    },

    ContactUs: {
        post: uri + "/ContactUs/replay",
        get: uri + "/ContactUs/all",
        getOne: uri + "/ContactUs/{entityId}",
        put: uri + "/ContactUs/{entityId}",
        delete: uri + "/ContactUs/{entityId}",
    },

    Banner: {
        post: uri + "/Banner",
        get: uri + "/Banner/all",
        getNotExpired: uri + "/Banner/notExpired",
        getOne: uri + "/Banner/{entityId}",
        put: uri + "/Banner/{entityId}",
        delete: uri + "/Banner/{entityId}",
    },
    Transaction: {
        post: uri + "/Transaction",
        get: uri + "/Transaction/all",
        getOne: uri + "/Transaction/{entityId}",
        put: uri + "/Transaction/{entityId}",
        delete: uri + "/Transaction/{entityId}",
        // upload: uri + "/User/upload",
    },
    // Offer: {
    //     post: uri + "/Offer",
    //     get: uri + "/Offer/all",
    //     getOne: uri + "/Offer/{entityId}",
    //     put: uri + "/Offer/{entityId}",
    //     delete: uri + "/Offer/{entityId}",
    // },
    Review: {
        post: uri + "/Review",
        get: uri + "/Review/all",
        getOne: uri + "/Review/{entityId}",
        put: uri + "/Review/{entityId}",
        delete: uri + "/Review/{entityId}",
    },
    Specialization: {
        post: uri + "/Specialization",
        get: uri + "/Specialization/all",
        getOne: uri + "/Specialization/{entityId}",
        put: uri + "/Specialization/{entityId}",
        delete: uri + "/Specialization/{entityId}",
    },
    WelcomeScreen: {
        post: uri + "/WelcomeScreen/create",
        get: uri + "/WelcomeScreen/all",
        getOne: uri + "/WelcomeScreen/{entityId}",
        put: uri + "/WelcomeScreen/{entityId}",
        delete: uri + "/WelcomeScreen/{entityId}",
    },

    Country: {
        post: uri + "/Country",
        get: uri + "/Country/all",
        getOne: uri + "/Country/{entityId}",
        put: uri + "/Country/{entityId}",
        delete: uri + "/Country/{entityId}",
    },
    City: {
        post: uri + "/City",
        get: uri + "/City/all",
        getOne: uri + "/City/{entityId}",
        put: uri + "/City/{entityId}",
        delete: uri + "/City/{entityId}",
    },

    File: {
        upload: uri + "/File/upload?project=ORID",
        UploadMultiple: uri + "/File/uploadMultiple?project=ORID",
        delete: uri + "/File",
        download: uri + "/File/",
    },

    Form: {
        post: uri + "/Form",
        get: uri + "/Form/all",
        getOne: uri + "/Form/{entityId}",
        put: uri + "/Form/{entityId}",
        delete: uri + "/Form/{entityId}",
    },
    Advertise: {
        post: uri + "/Advertise",
        get: uri + "/Advertise/all",
        getOne: uri + "/Advertise/{entityId}",
        put: uri + "/Advertise/{entityId}",
        delete: uri + "/Advertise/{entityId}",
    },

    "doctor-reports": {
        post: uri + "/doctor-reports",
        get: uri + "/doctor-reports/all",
        getOne: uri + "/doctor-reports/{entityId}",
        put: uri + "/doctor-reports/{entityId}",
        delete: uri + "/doctor-reports/{entityId}",
    },

    Promocode: {
        post: uri + "/Promocode",
        get: uri + "/Promocode/all",
        getOne: uri + "/Promocode/{entityId}",
        put: uri + "/Promocode/{entityId}",
        delete: uri + "/Promocode/{entityId}",
    },
};
