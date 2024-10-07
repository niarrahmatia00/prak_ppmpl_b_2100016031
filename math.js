// Fungsi tambah
export function tambah(a, b) {
    // Memastikan kedua input adalah tipe number
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Mengembalikan NaN jika input bukan angka
    }
    return a + b;
}

// Fungsi kurang
export function kurang(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Mengembalikan NaN jika input bukan angka
    }
    return a - b;
}

// Fungsi kali
export function kali(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Mengembalikan NaN jika input bukan angka
    }
    return a * b;
}

// Fungsi bagi
export function bagi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN; // Mengembalikan NaN jika input bukan angka
    }
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol'); // Melempar error saat pembagian dengan nol
    }
    return a / b;
}
