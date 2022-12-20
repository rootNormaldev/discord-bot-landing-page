import Swal from "sweetalert2";
const toast = Swal.mixin({
    toast: true,
    animation: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})
export {
    toast
}