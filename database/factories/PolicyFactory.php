<?php

namespace Database\Factories;

use Carbon\Carbon;
use App\Models\Account;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Policy>
 */
class PolicyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('-1 year', 'now');
        $endDate = Carbon::parse($startDate)->copy()->addMonths($this->faker->numberBetween(0, 12));

        return [
            'account_id' => Account::factory(),
            'customer_name' => $this->faker->name,
            'sum_insured' => $this->faker->randomFloat(0, 100, 1000) * 1000,
            'premium' => $this->faker->randomFloat(0, 10, 100) * 1000,
            'purchase_date' => $startDate,
            'start_date' => $startDate,
            'end_date' => $endDate,
        ];
    }
}
