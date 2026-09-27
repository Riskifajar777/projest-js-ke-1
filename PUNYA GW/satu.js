const judul = 'Belajar JavaScript';
const materi = ['variabel', 'fungsi', 'event', 'DOM'];
let skor = 0;

console.log(judul);
console.log('Materi yang dipelajari:', materi);

function sambut(namaUser) {
    if (!namaUser) {
        namaUser = 'Teman';
    }

    return 'Halo, ' + namaUser + '! Selamat belajar JavaScript.';
}

function updateOutput() {
    const inputNama = document.getElementById('nama').value.trim();
    const hasil = sambut(inputNama);

    document.getElementById('output').textContent = hasil;
    skor = skor + 1;

    console.log('Skor saat ini:', skor);
}

document.getElementById('tombol').addEventListener('click', updateOutput);
