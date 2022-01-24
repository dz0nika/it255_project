<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::factory()->create([
            'email' => 'admin@scap.rs',
            'password' => bcrypt('RaESFDqpTKDBpbQ'),
        ]);
    }
}
