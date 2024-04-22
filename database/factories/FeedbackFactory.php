<?php

namespace Database\Factories;

use Closure;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'message' => $this->faker->text(),
            'user_id' => 1,
            'report_id' => $this->uniqueReportId(),
        ];
    }

    private function uniqueReportId(): Closure
    {
        $usedReportIds = [];

        return function () use (&$usedReportIds) {
            $reportId = Arr::random(array_values(array_diff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $usedReportIds)));
            $usedReportIds[] = $reportId;
            return $reportId;
        };
    }
}
