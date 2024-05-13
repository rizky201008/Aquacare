<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Report>
 */
class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rasa' => $this->faker->word(),
            'suhu' => $this->faker->word(),
            'kekentalan' => $this->faker->word(),
            'warna' => $this->faker->word(),
            'bau' => $this->faker->word(),
            'keasaman' => $this->faker->word(),
            'detail' => $this->faker->text(),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'user_id' => \App\Models\User::all()->random()->id
        ];
    }
}
