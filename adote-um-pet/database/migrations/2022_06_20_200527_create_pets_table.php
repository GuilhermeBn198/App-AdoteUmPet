<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() //this function make the migration run!
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 50);
            $table->text('historia');
            $table->string('foto', 1000);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() //this function revert the up function
    {
        Schema::dropIfExists('pets');
    }
};
