<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('rasa');
            $table->string('suhu');
            $table->string('kekentalan');
            $table->string('warna');
            $table->string('bau');
            $table->string('keasaman');
            $table->text('detail');
            $table->enum('status', ['pending', 'approved', 'rejected', 'completed', 'onprogress']);
            $table->foreignIdFor(\App\Models\User::class)->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
