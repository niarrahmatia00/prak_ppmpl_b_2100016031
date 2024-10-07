import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from '../math.js';

describe('Pengujian Kasus Negatif untuk Fungsi Matematika', function() {

    describe('Fungsi kurang', function() {
        it('seharusnya mengembalikan hasil positif jika mengurangi dua angka negatif', function() {
            expect(kurang(-4, -2)).to.equal(-2);
        });

        it('seharusnya mengembalikan hasil yang benar jika mengurangi angka positif dengan negatif', function() {
            expect(kurang(2, -3)).to.equal(5);
        });

        it('seharusnya mengembalikan hasil yang benar jika mengurangi angka negatif dengan positif', function() {
            expect(kurang(-2, 3)).to.equal(-5);
        });

        it('seharusnya mengembalikan NaN jika input adalah string', function() {
            expect(kurang('a', 2)).to.be.NaN;
        });
    });

    describe('Fungsi bagi', function() {
        it('seharusnya melempar error saat membagi dengan 0', function() {
            expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
        });

        it('seharusnya mengembalikan NaN jika input adalah string', function() {
            expect(bagi('a', 2)).to.be.NaN;
        });

        it('seharusnya mengembalikan hasil yang benar saat membagi angka positif dengan angka negatif', function() {
            expect(bagi(6, -3)).to.equal(-2);
        });

        it('seharusnya mengembalikan hasil yang benar saat membagi dua angka negatif', function() {
            expect(bagi(-6, -3)).to.equal(2);
        });
    });

    describe('Fungsi tambah', function() {
        it('seharusnya mengembalikan NaN saat menambahkan string dengan angka', function() {
            expect(tambah('a', 2)).to.be.NaN;
        });
    
        it('seharusnya mengembalikan NaN saat menambahkan angka dengan string', function() {
            expect(tambah(2, 'b')).to.be.NaN;
        });
    
        it('seharusnya mengembalikan NaN saat menambahkan dua string', function() {
            expect(tambah('a', 'b')).to.be.NaN;
        });
    });
    

    describe('Fungsi kali', function() {
        it('seharusnya mengembalikan NaN saat mengalikan string dengan angka', function() {
            expect(kali('a', 2)).to.be.NaN;
        });

        it('seharusnya mengembalikan NaN saat mengalikan angka dengan string', function() {
            expect(kali(2, 'b')).to.be.NaN;
        });

        it('seharusnya mengembalikan NaN saat mengalikan dua string', function() {
            expect(kali('a', 'b')).to.be.NaN;
        });
    });
});
