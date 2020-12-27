import API from "@/models/API";

export default class BusinessProfile {
    static uploadImage = image =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/settings/upload-images`,
            image
        );
}
