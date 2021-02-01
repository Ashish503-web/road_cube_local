import API from "@/models/API";
import pointsRelation from "@/utils/translations/loyaltyPanel/businessProfile/pointsRelation";

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

    static putInitialPoint = points =>
        API().put(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/init-user-points`,points
        );

    static updatePointRelation = pointsRelation =>
        API().put(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/online-offline-points-ratio`,pointsRelation
        );


}
