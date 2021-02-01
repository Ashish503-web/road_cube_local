import API from "@/models/API";

export default class BusinessProfile {
    static uploadImage = image =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/upload-images`,
            image
        );

    static getProfileData = profile  => 
            API().get(
                '/companies/1/settings/all',profile
            );

    static getUserManual = file =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/upload-file`,
            file
        );


    static getTermFile = file =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/upload-file`,
            file
        );

    static getPrivacyFile = file =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/upload-file`,
            file
        );


}
