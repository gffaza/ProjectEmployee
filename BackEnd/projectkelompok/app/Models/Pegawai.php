<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;

    protected $table = 'pegawai'; // Nama tabel di database
    protected $primaryKey = 'id_pegawai'; // Primary key
    public $incrementing = true; // Jika ID menggunakan auto-increment
    protected $keyType = 'int'; // Tipe data primary key

    protected $fillable = [
        'nama',           // Nama lengkap pegawai
        'email',          // Email pegawai
        'telp',           // Nomor telepon pegawai
        'tgl_lahir',      // Tanggal lahir pegawai
        'onboard',        // Tanggal onboarding pegawai
        'image',          // Path gambar pegawai
        'position',       // Posisi pegawai
        'role',           // Peran pegawai
        'departmen',      // Departemen pegawai
        'group',          // Kelompok pegawai
        'lokasi_kerja'    // Lokasi kerja pegawai
    ];
}
