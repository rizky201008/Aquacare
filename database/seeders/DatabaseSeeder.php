<?php

namespace Database\Seeders;

use App\Models\Feedback;
use App\Models\Report;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory(10)->create();
         Report::factory(4)->create();
         Feedback::factory(4)->create();
    }
}
