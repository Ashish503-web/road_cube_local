import PaymentMethods from "@/models/loyaltyPanel/subscriptions/PaymentMethods";

export default {
    namespaced: true,

    state: () => ({
        companyPaymentMethods: [],
        systemPaymentMethods: [],
        paymentMethod: new PaymentMethods(),
        paymentMethodAdditionalInfo: {}
    }),

    mutations: {
        setCompanyPaymentMethods(state, payload) {
            state.companyPaymentMethods = payload;
        },
        setSystemPaymentMethods(state, payload) {
            state.systemPaymentMethods = payload;
        },
        setPaymentMethod(state, payload) {
            state.paymentMethod = new PaymentMethods(payload);
        },
        setPaymentMethodAdditionalInfo(state, payload) {
            state.paymentMethodAdditionalInfo = payload;
        }
    },

    actions: {
        async getCompanyPaymentMethods({ commit }){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await PaymentMethods.getCompanyPaymentMethods();
                
                const paymentMethods = data.data
                paymentMethods.map(item => {
                    item.system_payment_method.description = JSON.parse(item.system_payment_method.description)
                })
                console.log(paymentMethods,'paymentMethods')
                commit("setCompanyPaymentMethods", paymentMethods);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },
        
        async getSystemPaymentMethods({ commit }){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await PaymentMethods.getSystemPaymentMethods();
                
                const paymentMethods = data.data
                console.log(paymentMethods,'SysemPaymentMethods')
                commit("setSystemPaymentMethods", paymentMethods);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async getPaymentMethodProfile({ commit } , id){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await PaymentMethods.getPaymentMethodProfile(id);
                
                const paymentMethod = data.data
                console.log(paymentMethod,'SysemPaymentMethods')
                // commit("setSystemPaymentMethods", paymentMethod);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async createPaymentMethod({ commit, dispatch, state }) {
            try {
                commit("setLoading", true, { root: true });

                let paymentMethod = { ...state.paymentMethod };
                delete paymentMethod.payment_method_id;

                await PaymentMethods.create(paymentMethod);
                
                dispatch("getCompanyPaymentMethods")
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created payment method!"
                    },
                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },
    }
        
};
