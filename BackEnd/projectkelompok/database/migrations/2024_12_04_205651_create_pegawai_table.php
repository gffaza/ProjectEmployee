<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pegawai', function (Blueprint $table) {
            $table->id('id_pegawai'); // Primary key
            $table->string('nama'); // Nama pegawai
            $table->string('email')->unique(); // Email pegawai
            $table->string('telp', 12); // Nomor telepon pegawai
            $table->date('tgl_lahir'); // Tanggal lahir pegawai
            $table->date('onboard'); // Tanggal onboarding pegawai
            $table->string('position'); // Posisi/jabatan pegawai
            $table->string('role'); // Role/peran pegawai
            $table->string('departmen'); // Departemen pegawai
            $table->string('group'); // Grup kerja pegawai
            $table->string('lokasi_kerja'); // Lokasi kerja pegawai
            $table->string('image')->nullable(); // Path gambar pegawai
            $table->timestamps(); // Timestamps (created_at, updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pegawai');
    }
};
