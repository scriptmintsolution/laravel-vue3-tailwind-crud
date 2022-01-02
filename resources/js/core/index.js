import * as Api from "@core/apis"
import * as Form from "@core/utils/form"

import mitt from 'mitt';
import Toast from "vue-toastification";
import VueLoading from 'vue-loading-overlay';
import Swal from "sweetalert2";

const emitter = mitt();

export default app => {
    app.provide('$http', Api);
    app.provide('$form', Form);
    app.provide('$swal', Swal);
    app.provide('emitter', emitter);

    app.use(Toast, {
        position: "bottom-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
    })
    app.use(VueLoading);
}
