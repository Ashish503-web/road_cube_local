export default {
    data: () => ({
        translations: {
            title: {
                el: "",
                en: "Campaign Credentials",
                it: ""
            },
            notifications: {
                el: "",
                en: "Notifications",
                it: ""
            },
            notificationsInfo: {
                el: "",
                en: `
                    Fill out an extra contact email to receive notifications when creating
                    and running any campaign.
                `,
                it: ""
            },
            smsEmail: {
                el: "",
                en: "SMS + Εmail",
                it: ""
            },
            smsEmailInfo: {
                el: "",
                en: `
                    Fill in the name you want to show when sending messages or Email with
                    the first method. The name must be in Latin characters and without
                    spaces.
                `,
                it: ""
            },
            messageSenderName: {
                el: "",
                en: "Message Sender Name",
                it: ""
            },
            emailFirstMethod: {
                el: "",
                en: "Email (First method)",
                it: ""
            },
            verifyEmail: {
                el: "",
                en: "Verify Email",
                it: ""
            },
            emailFirstMethodInfo: {
                el: "",
                en:
                    "Add the email you want to see as the sender of the campaign",
                it: ""
            },
            emailSecondMethod: {
                el: "",
                en: "Email (Second method)",
                it: ""
            },
            emailSecondMethodInfo: {
                el: "",
                en: `
                    Enter your email credentials in the table below to send email campaigns
                    through your email provider. Leave this blank and RoadCube's email
                    provider will be used.
                `,
                it: ""
            },
            host: {
                el: "",
                en: "Host",
                it: ""
            },
            name: {
                el: "",
                en: "Name",
                it: ""
            },
            email: {
                el: "",
                en: "Email",
                it: ""
            },
            password: {
                el: "",
                en: "Password",
                it: ""
            },
            info: {
                el: "",
                en: `
                    * Sending email by priority. If the first method doesnt exists then
                    the second method will be used. If the second method doesnt exists
                    as well then RoadCube's email provider will be used.
                `,
                it: ""
            }
        }
    })
};
