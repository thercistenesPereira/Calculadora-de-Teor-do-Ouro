import Swal from 'sweetalert2';

export const isFormValidation = (dryWeight: string, wetWeight: string) => {
    if (dryWeight === '' || wetWeight === '') {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'Preencha todos os campos!',
        });
        return false;
    }

    if (Number(dryWeight) <= 0 || Number(wetWeight) <= 0) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'Os campos devem ser maiores que 0',
        });
        return false;
    }

    if (Number(dryWeight) <= Number(wetWeight)) {
        Swal.fire({
            title: 'Oops...',
            icon: 'error',
            text: 'O peso seco deve ser maior que o peso molhado',
        });
        return false;
    }

    return true;
};