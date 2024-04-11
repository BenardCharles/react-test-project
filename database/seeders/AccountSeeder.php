<?php

namespace Database\Seeders;

use App\Models\Policy;
use App\Models\Account;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Policy::truncate();
        Account::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $accounts = Account::factory()->count(20)->create();

        foreach ($accounts as $account) {
            Policy::factory()->count(20)->create(['account_id' => $account->id]);
        }
    }
}
