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

}
