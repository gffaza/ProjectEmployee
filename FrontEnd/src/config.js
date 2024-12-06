import Swal from "sweetalert2"

const baseUrl = "http://localhost:8000/api"
const baseUrlGambar = "http://localhost:8000/img/pegawai"


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
export { baseUrl, baseUrlGambar, Toast }