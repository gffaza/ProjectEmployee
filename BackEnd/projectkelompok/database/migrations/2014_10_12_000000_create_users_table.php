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
        Schema::create('users', function (Blueprint $table) {
            $table->id("id_user"); //primary.key, Autoincrement,BIGINT
            $table->string('name'); //varchar 255
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('telp', 12);
            $table->string('password');
            $table->rememberToken();
            $table->timestamps(); //created_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
