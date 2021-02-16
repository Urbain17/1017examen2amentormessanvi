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
};