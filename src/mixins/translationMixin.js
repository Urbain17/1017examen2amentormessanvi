export const MixinTranslations ={

    
    data () {
        return {
            en: {
                age: "Age"
            },
            fr: {
                age: "Ager"
            }

        }
    },
    filters: {
        translation: function (mot){
            if (mot == "Age"){
                return 'Ager'
            }
        }
    },

    //Jest
    // data() {
    //      en: {
    //           age: "Age"
    //        },
    //        fr: {
    //            age: "Ager"
    //        }
    //
    //    }
    // expeect (age).toBe('translation ager');
    //
    //
    //
};